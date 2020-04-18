import React from "react";
import Axios from 'axios'
import {API_URL} from '../../constans/API'

class ProfileScreen extends React.Component {
  state={
    currentUser:[]
  }

  // getDataHandler = () =>{
  //   Axios.get("http://localhost:3001/users")
  //   .then((res)=>{
  //     console.log(res.data)
  //     this.setState({usersList:res.data})
  //   })
  //   .catch((err)=>{console.log(err)})
  // }


  getDataHandler = () =>{
    const {currentUser}=this.state
     Axios.get(`${API_URL}/users`,{
       params:{
         username:this.props.match.params.user
       }
     })
     .then((res)=>{
       const {data} = res
       this.setState({currentUser:[...data]})
     }
     )
     .catch((err)=>{console.log(err)})
   }
componentDidMount(){
 this.getDataHandler()
}

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
  render() {
    // alert('ini render')
    const { currentUser} = this.state
    if(currentUser.length >0){
      return (
        <div className="background-img1 size-body border-hitam">
        <center className="container mt-5 ">
          <div className="card p-2 card-opacity border-hitam" >
          <h1>Profile</h1>
          <h2>Welcome, {currentUser[0].username} </h2>
          <h2>Full Name : {currentUser[0].fullName}</h2>
          <h2>Role : {currentUser[0].role}</h2>
          </div>
        </center>
        </div>
      );
    }
    else if(this.props.match.params.user=="No Active User"){
      return (
        <div className="background-img1 size-body">
        <center className="pt-5">
        <h1>No Active User</h1>
        </center>
        </div>
      )
    }
    else{
      return (
        <div className="background-img1 size-body">
          <center><h1> Loading...</h1></center>
        </div>
      )
    }
    
  }
}

export default ProfileScreen;
