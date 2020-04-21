import React from "react";
import Axios from 'axios'
import {API_URL} from '../../constans/API'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {
  todoInputHandler,
  usernameInputHandler,
  addTodoHandler,
  idInputHandler,
} from "../../redux/actions";

class ProfileScreen extends React.Component {

  state = {
    id: 0,
    username: "",
    role: "",
    fullName: "",
  };

  componentDidMount() {
    let userId = this.props.match.params.userId;

    Axios.get(`${API_URL}/users/${userId}`)
      .then((res) => {
        console.log(res);

        const { id, username, role, fullName } = res.data;
        this.setState({
          id,
          username,
          role,
          fullName,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
//   state={
//     currentUser:[]
//   }


//   getDataHandler = () =>{
//     const {currentUser}=this.state
//      Axios.get(`${API_URL}/users`,{
//        params:{
//          username:this.props.match.params.user
//        }
//      })
//      .then((res)=>{
//        const {data} = res
//        this.setState({currentUser:[...data]})
//      }
//      )
//      .catch((err)=>{console.log(err)})
//    }
// componentDidMount(){
//  this.getDataHandler()
// }

// componentWillMount(){
//   this.getDataHandler()
// }
// getDataHandler = () =>{
//   const {currentUser} = this.state
//   Axios.get(`${API_URL}/users`)
//   .then((res)=>{
//     console.log(res)
//     const {data} = res
//     this.setState({currentUser:[...currentUser,...data]})
//   })
//   .catch((err)=>{console.log(err)})
// }
  // deleteHandler = () =>{
  //   Axios.delete(`${API_URL}/users/2`)
  //   .then((res)=>{
  //     console.log(res)
  //   })
  //   .catch((err)=>{console.log(err)})
  // }

  // postDataHandler=()=>{
  //   Axios.post(`${API_URL}/users`, {
  //     username: "seto",
  //     password: "password",
  //     role: "user",
  //     fullName: "seto haha"
  //   })
  //   .then((res)=>{
  //     console.log(res)
  //   })
  //   .catch((err)=>{
  //     console.log(err)
  //   })
  // }
  ubahStateGlobal = () =>{
    this.props.onChangeUsername('No Active User')
    this.props.onChangeId(0)
   }
  render() {
    // alert('ini render')
    // const { currentUser} = this.state
    
    // if(currentUser.length >0){
    //   return (
    //     <div className="background-img1 size-body">
    //     <center className="container p-5">
    //       <div className="card p-2 card-opacity border-hitam" >
    //       <h1>Profile</h1>
    //       <h2>Welcome, {currentUser[0].username} </h2>
    //       <h2>Full Name : {currentUser[0].fullName}</h2>
    //       <h2>Role : {currentUser[0].role}</h2>
    //       </div>
    //     </center>
    //     </div>
    //   );
    // }
    // else if(this.props.match.params.user=="No Active User"){
    //   return (
    //     <div className="background-img1 size-body">
    //     <center className="pt-5">
    //     <h1>No Active User</h1>
    //     </center>
    //     </div>
    //   )
    // }
    // else{
    //   return (
    //     <div className="background-img1 size-body">
    //       <center><h1> Loading...</h1></center>
    //     </div>
    //   )
    // }
    

   
    const { id,username,role,fullName} = this.state
    if(id >0){
      return (
        <div className="background-img1 size-body">
        <center className="container p-5">
          <div className="card p-2 card-opacity border-hitam" >
          <h1>Profile</h1>
          <h2>Welcome, {username} </h2>
          <h2>Full Name : {fullName}</h2>
          <h2>Role : {role}</h2>
          <Link to="/LoginScreen"><input type="button" className="btn btn-primary" value="Logout" 
          onClick={this.ubahStateGlobal}
          /></Link>
          </div>
        </center>
        </div>
      );
    }
    // else if (this.props.match.params.user=="No Active User"){
    //   return (
    //     <div className="background-img1 size-body">
    //     <center className="pt-5">
    //     <h1>No Active User</h1>
    //     </center>
    //     </div>
    //   )
    // }
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
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);