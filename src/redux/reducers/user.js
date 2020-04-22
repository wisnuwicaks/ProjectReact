

const init_state = {
  id: 0,
  username: "No User Active",
  role: "",
  fullName: "",
  errMsg : ''

};

export default (state = init_state, action) => {

  if (action.type === "ON_CHANGE_USERNAME") {
    return { ...state, username: action.payload };
  }
  else if (action.type === "ON_CHANGE_ID") {
    return { ...state, id : action.payload };
  }
  
  else if (action.type === "ON_LOGIN_SUCCESS") {
    const {username,id,fullName,role} = action.payload;
    return { ...state, username,id,fullName,role };
  }
  else if (action.type === "ON_LOGIN_FAILED") {
    return { ...state, errMsg : action.payload };
  }

  else if (action.type === "ON_REGISTER_SUCCESS") {
    const {username,password,fullName,role} = action.payload;
    return { ...state, username,fullName,role,password };
  }
  else if (action.type === "ON_REGISTER_FAILED") {
    return { ...state, errMsg : action.payload };
  }
  
  
  // else if (action.type === "TESTING") {
  //   return { ...state, testing : action.payload };
  // }
  // else if (action.type === "TESTING2") {
  //   return { ...state, testing2 : action.payload };
  // }
  return { ...state };
};
