import React from 'react';
import { Link, Redirect } from "react-router-dom";
import Axios from 'axios'
import {API_URL} from '../../constans/API'
import swal from "sweetalert";
import { connect } from "react-redux";
import Cookie from 'universal-cookie'
import {
  todoInputHandler,
  usernameInputHandler,
  addTodoHandler,
  idInputHandler,
  loginHandler,
} from "../../redux/actions";

const cookieObject = new Cookie()
class LoginScreen extends React.Component{
    // state = {
    //     isLoggedIn: false,
    //     users: [],
    //     loginUsername: "",
    //     loginPassword: "",
    //     currentUsername: "",
    //     activeEditIdx: null,
    //   };

    //   componentDidMount(){
        
    //     console.log(this.users)
    //     this.getDataHandler()
    //   }
    //   getDataHandler = () =>{
    //     const {users}=this.state
    //      Axios.get(`${API_URL}/users`)
    //      .then((res)=>{
    //        const {data} = res
    //        this.setState({users:[...users,...data]})
    //       }
    //      )
    //      .catch((err)=>{console.log(err)})
    //    }

    //   inputHandler = (e, field) => {
    //     this.setState({ [field]: e.target.value });
    //   };

    //   loginHandler = () => {
    //     const { loginUsername, loginPassword, users,currentUsername } = this.state;
    //     for (let i = 0; i < users.length; i++) {
    //       if (
    //         users[i].username == loginUsername &&
    //         users[i].password == loginPassword
    //       ) {
    //         this.setState({
    //           isLoggedIn: true,
    //           currentUsername: users[i].username,
    //           loginUsername: "",
    //           loginPassword: "",
    //         });
    //         console.log(this.state.currentUsername)
          
    //         break;
    //       }
    
    //       if (i == users.length - 1) {
    //         alert("User tidak ada atau password salah");
    //       }
    //     }
    //     console.log(currentUsername)
    //   };

    state = {
      username: "",
      password: "",
      isLoggedIn: false,
      loginProfile: {},
    };
  
    inputHandler = (event, field) => {
      const { value } = event.target;
      this.setState({ [field]: value });
    };
  
    loginHandler = () => {
     
      const { username, password } = this.state;
      const userData = {
        username,
        password,
      };

      this.props.onLogin(userData);
  
      // Axios.get(`${API_URL}/users`, {
      //   params: {
      //     username,
      //     password,
      //   },
      // })
      //   .then((res) => {
      //     // Login sukses
      //     if (res.data.length > 0) {
      //       swal("Success!", "Berhasil berhasil hore", "success");
      //       this.setState({ isLoggedIn: true, loginProfile: res.data[0] });
      //     } else {
      //       swal("Error!", "Username atau password salah", "error");
      //     }
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    };
    
    componentDidUpdate(){
    
      if(this.props.user.id){
        alert("Success Login")
        cookieObject.set("authData",JSON.stringify(this.props.user))
        console.log(this.props.user)
      }
    }
    render(){
      
        const {
            isLoggedIn,
            currentUsername,
            password,
            username,
            loginProfile
          } = this.state;

        
          if(this.props.user.id){
            // this.props.callback(currentUsername)
              
            // this.props.onChangeUsername(username)
            // this.props.onChangeId(this.state.loginProfile.id)
   
            return <Redirect to={`/profile/${this.props.user.id}`}/>
            // return <Redirect to="/LoginScreen"/>

          }
        
          else{
            return (
              <div className=" background-img size-body p-5">
              <center className="container">
                  <div className="card p-5 card-opacity">
                  <h4>Login </h4>
                  <input
                    value={username}
                    className="form-control mt-2"
                    type="text"
                    placeholder="Username"
                    onChange={(e) => this.inputHandler(e, "username")}
                  />
                  <input
                    value={password}
                    className="form-control mt-2"
                    type="text"
                    placeholder="Password"
                    onChange={(e) => this.inputHandler(e, "password")}
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

// export default LoginScreen 
const mapStateToProps = (state) => {
  return {
    user: state.user,
    id :state.user,
  };
};

// Supaya action bisa diakses component lewat props
// dan action bisa berhubungan dengan reducer
const mapDispatchToProps = {
  onChangeTodo: todoInputHandler,
  onChangeUsername: usernameInputHandler,
  onChangeId: idInputHandler,
  onAddTodo: addTodoHandler,
  onLogin : loginHandler,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);