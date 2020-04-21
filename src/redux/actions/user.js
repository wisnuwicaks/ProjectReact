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
