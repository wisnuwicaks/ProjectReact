import React from "react";
import { Link } from "react-router-dom";
import "../../style.css"

class Navbar extends React.Component {
  render() {
    return (

        
      <div
        className="navbarku border-hitam bg-light"
      >
        <Link to="/RegisterScreen">Register</Link>
        <Link to="/LoginScreen">Login</Link>
        <Link to={`/profile/${this.props.logedIn}`}>Profile ({this.props.logedIn})</Link>
        
      </div>
        
        
    );
  }
}

export default Navbar;
