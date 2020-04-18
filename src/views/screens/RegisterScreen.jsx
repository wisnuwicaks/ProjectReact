import React from "react";
import {Link, Redirect} from "react-router-dom"
import Axios from 'axios'
import {API_URL} from '../../constans/API'

class RegisterScreen extends React.Component {
  state = {
    username: "",
    password: "",
    fullName:"",
    role:"",
    repPassword: "",
    isLoggedIn: false,
    users: [],
    loginUsername: "",
    loginPassword: "",
  };

  componentDidMount(){
    console.log(this.users)
    this.getDataHandler()
  }
  inputHandler = (e, field) => {
    this.setState({ [field]: e.target.value });
  };

  getDataHandler = () =>{
    const {users}=this.state
     Axios.get(`${API_URL}/users`)
     .then((res)=>{
       const {data} = res
       this.setState({users:[...users,...data]})
      }
     )
     .catch((err)=>{console.log(err)})
   }

   
  postDataHandler=(username,password,fullName,role)=>{
    Axios.post(`${API_URL}/users`, {
      username: username,
      password: password,
      fullName: fullName,
      role: role,
    })
    .then((res)=>{
      console.log(res)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  registerHandler = () => {
    const { repPassword, password, username,role,fullName, users } = this.state;

    if (repPassword == password) {
       let cariIndexUsername = users.findIndex(val=>val.username==username)
        if(cariIndexUsername==-1){
        this.postDataHandler(username,password,fullName,role)
        let newData = {
          username,password,fullName,role
        };
        this.setState({
          users: [...users, newData],
          username: "",
          password: "",
          fullName:"",
          role :"",
          repPassword: "",
        });
        console.log(users);
        }else{
          alert("Maaf username sudah terpakai")
        }

    } else {
      alert("Password belum cocok");
    }
  };

  renderUsers = () => {
    const { users, activeEditIdx } = this.state;
    return users.map((val, idx) => {
      if (idx == activeEditIdx) {
        return (
          <tr>
            <td>{idx + 1}</td>
            {/* <td>{val.username}</td> */}
            <td>
              <input type="text" placeholder={val.username} />
            </td>
            <td>
              <input
                type="button"
                value="Delete"
                className="btn btn-danger"
                onClick={() => this.deleteHandler(idx)}
              />
            </td>
          </tr>
        );
      } else {
        return (
          <tr>
            <td>{idx + 1}</td>
            <td>{val.username}</td>
            <td>
              <Link to={"/profile/" + val.username}>
              <input
                type="button"
                value="Edit"
                className="btn btn-info"
                // onClick={() => this.setState({ activeEditIdx: idx })}
                
              />
              </Link>
            </td>
          </tr>
        );
      }
    });
  };

  render() {
    const {
      username,
      password,
      role,
      fullName,
      repPassword,
    } = this.state;

  
      return (
        <div className="size-body background-img">
         
          <center className="p-5">
            <div className="card p-5 card-opacity border-hitam">
            <h4>Register </h4>
              <input
                value={username}
                className="form-control mt-2"
                type="text"
                placeholder="Username"
                onChange={(e) => this.inputHandler(e, "username")}
              />
              <input
                value={fullName}
                className="form-control mt-2"
                type="text"
                placeholder="Full Name"
                onChange={(e) => this.inputHandler(e, "fullName")}
              />

              <input
                value={role}
                className="form-control mt-2"
                type="text"
                placeholder="Role"
                onChange={(e) => this.inputHandler(e, "role")}
              />
              <input
                value={password}
                className="form-control mt-2"
                type="text"
                placeholder="Password"
                onChange={(e) => this.inputHandler(e, "password")}
              />
              <input
                value={repPassword}
                className="form-control mt-2"
                type="text"
                placeholder="Repeat Password"
                onChange={(e) => this.inputHandler(e, "repPassword")}
              />
              <input
                type="button"
                value="Register"
                className="btn btn-primary mt-3"
                onClick={this.registerHandler}
              />
            </div>
          </center>
        </div>
      );
    
   
  }
}

export default RegisterScreen;
