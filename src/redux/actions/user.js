import Axios from "axios";
import { API_URL } from "../../constans/API";
import user from "../reducers/user";

export const usernameInputHandler = (text) => {
  return {
    type: "ON_CHANGE_USERNAME",
    payload: text,
  };
};

export const idInputHandler = (text) => {
  return {
    type: "ON_CHANGE_ID",
    payload: text,
  };
};

export const loginHandler = (userData)=>{
  
  return (dispatch) =>{
    const {username,password} = userData
    Axios.get(`${API_URL}/users`,{
      params :{
        username,
        password,
      }
    })
    .then(res=>{
      
      if (res.data.length>0){
       
      dispatch({
        type : "ON_LOGIN_SUCCESS",
        payload : res.data[0],
      })
    }
    else {
     
      dispatch({
        type : "ON_LOGIN_FAILED",
        payload :'Username atau password salah',
      })
    }
    })

    .catch(err=>{
      console.log(err)
    })

    
  }
}

export const registerHandler = (userData)=>{
  
  return (dispatch) =>{
    // const {username,password,fullName,role} = userData
    Axios.post(`${API_URL}/users`,userData)
    
    .then(res=>{  
      alert('Berhasil Terdaftar')
      
    dispatch({
        type : "ON_REGISTER_SUCCESS",
        payload : userData,
      })
    })

    .catch(err=>{
      console.log(err)
    })

    
  }
}

export const userKeepLogin = (userData) => {
  
  return (dispatch) =>{
    Axios.get(`${API_URL}/users`,{
      params:{
        id:userData.id
      }
    })
 
    .then((res)=>{

      console.log(res.data[0]);
      if (res.data.length>0){
  
        dispatch({
          type : "ON_LOGIN_SUCCESS",
          payload : res.data[0],
        })
      }
      else {
       
        dispatch({
          type : "ON_LOGIN_FAILED",
          payload :'Username atau password salah',
        })
      }
    })
    .catch((err)=>{
      alert('sda')
      console.log(err)
    })
  }
}

export const userLogout = () => {
  const logoutData ={
    id: 0,
    username: "No User Active",
    role: "",
    fullName: "",
    errMsg : '',
  }
  return (dispatch) =>{
    
        dispatch({
          type : "ON_LOGOUT_SUCCESS",
          payload : logoutData,
        })
      
  }
}