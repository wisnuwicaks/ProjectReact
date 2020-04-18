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
        const { loginUsername, loginPassword, users,currentUsername } = this.state;
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
            console.log(this.state.currentUsername)
          
            break;
          }
    
          if (i == users.length - 1) {
            alert("User tidak ada atau password salah");
          }
        }
        console.log(currentUsername)
      };

    render(){
        const {
            isLoggedIn,
            currentUsername,
            loginPassword,
            loginUsername,
          } = this.state;

        
          if(isLoggedIn){
            this.props.callback(currentUsername)
            return <Redirect to={`/profile/${currentUsername}`}/>
          }
        
          else{
            return (
              <div className="border-hitam background-img size-body">
              <center className="container mt-5">
                  <div className="card p-5 card-opacity">
                  <h4>Login </h4>
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
              </div>
          )
          }
        
    }
}

export default LoginScreen 