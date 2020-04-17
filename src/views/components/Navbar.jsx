import React from "react";
import { Link } from "react-router-dom";
import "../../style.css"

class Navbar extends React.Component {
  render() {
    return (

        
      <div
        className="navbarku"
        
      >
        <Link to="/RegisterScreen">Register {this.props.logedIn}</Link>
        <Link to="/LoginScreen">Login</Link>
      </div>
        
        
    );
  }
}

export default Navbar;
