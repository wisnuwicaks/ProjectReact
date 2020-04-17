import React from 'react';
import { Link, Redirect } from "react-router-dom";
import Axios from 'axios'
import {API_URL} from '../../constans/API'

class LoginScreen extends React.Component{
    state = {
        isLoggedIn: false,
        users: [],
        loginUsername: "",
        loginPassword: "",
        currentUsername: "",
        activeEditIdx: null,
      };

      componentDidMount(){
        alert("didMount")
        console.log(this.users)
        this.getDataHandler()
      }
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

      inputHandler = (e, field) => {
        this.setState({ [field]: e.target.value });
      };

      loginHandler = () => {
        const { loginUsername, loginPassword, users } = this.state;
        for (let i = 0; i < users.length; i++) {
          if (
            users[i].username == loginUsername &&
            users[i].password == loginPassword
          ) {
            this.setState({
              isLoggedIn: true,
              currentUsername: users[i].username,
              loginUsername: "",
              loginPassword: "",
            });
            break;
          }
    
          if (i == users.length - 1) {
            alert("User tidak ada atau password salah");
          }
        }
      };

    render(){
        const {
            isLoggedIn,
            currentUsername,
            loginPassword,
            loginUsername,
          } = this.state;

        
          if(isLoggedIn){
            alert("masul")
            return <Redirect to={`/profile/${currentUsername}`}/>
          }
          else{
            return (
              <center className="container">
                  <div className="card p-5" style={{ width: "400px" }}>
                  <h4>Login</h4>
                  <input
                    value={loginUsername}
                    className="form-control mt-2"
                    type="text"
                    placeholder="Username"
                    onChange={(e) => this.inputHandler(e, "loginUsername")}
                  />
                  <input
                    value={loginPassword}
                    className="form-control mt-2"
                    type="text"
                    placeholder="Password"
                    onChange={(e) => this.inputHandler(e, "loginPassword")}
                  />
                
                  <input
                    type="button"
                    value="Login"
                    className="btn btn-primary mt-3"
                    onClick={this.loginHandler}
                  />
                
                  </div>
              </center>
          )
          }
        
    }
}

export default LoginScreen 