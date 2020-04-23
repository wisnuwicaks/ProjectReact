import React from "react";
import Axios from 'axios'
import {API_URL} from '../../constans/API'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import Cookie from 'universal-cookie'
import {
  todoInputHandler,
  usernameInputHandler,
  addTodoHandler,
  idInputHandler,
  userLogout,
} from "../../redux/actions";

const cookieObject = new Cookie();
class ProfileScreen extends React.Component {

  state = {
    id: 0,
    username: "",
    role: "",
    fullName: "",
  };

  // componentDidMount() {
  //   let userId = this.props.match.params.userId;

  //   Axios.get(`${API_URL}/users/${userId}`)
  //     .then((res) => {
  //       console.log(res);

  //       const { id, username, role, fullName } = res.data;
  //       this.setState({
  //         id,
  //         username,
  //         role,
  //         fullName,
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  onLogout =()=>{
    alert('remove')
    cookieObject.remove('authData');
    this.props.userLogout();
  }
  ubahStateGlobal = () =>{
    this.props.onChangeUsername('No Active User')
    this.props.onChangeId(0)
   }
  render() {
  
    const { id,username,role,fullName} = this.state
    if(this.props.user.id >0){
      return (
        <div className="background-img1 size-body">
        <center className="container p-5">
          <div className="card p-2 card-opacity border-hitam" >
          <h1>Profile</h1>
          <h2>Welcome, {this.props.user.username} </h2>
          <h2>Full Name : {this.props.user.fullName}</h2>
          <h2>Role : {this.props.user.role}</h2>
          <Link to="/LoginScreen"><input type="button" className="btn btn-primary" value="Logout" 
          onClick={this.onLogout}
          /></Link>
          </div>
        </center>
        </div>
      );
    }
    else{
      return (
        <div className="background-img1 size-body">
        <center className="pt-5">
        <h1>No Active User</h1>
        </center>
        </div>
      )
    }
    
  }
}

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
  userLogout,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);