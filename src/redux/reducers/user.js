

const init_state = {
  id: 0,
  username: "No User Active",
};

export default (state = init_state, action) => {
  if (action.type === "ON_CHANGE_USERNAME") {
    return { ...state, username: action.payload };
  }
  else if (action.type === "ON_CHANGE_ID") {
    return { ...state, id : action.payload };
  }
  return { ...state };
};
