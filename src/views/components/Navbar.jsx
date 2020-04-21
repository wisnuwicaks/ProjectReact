import React from "react";
import { Link } from "react-router-dom";
import "../../style.css"
import {connect} from 'react-redux'
class Navbar extends React.Component {
  render() {
    return (

      <div
        className="navbarku border-hitam bg-light"
      >
        <Link to="/RegisterScreen">Register</Link>
        <Link to="/LoginScreen">Login</Link>
        {/* <Link to={`/profile/${this.props.logedIn}`}>Profile ({this.props.logedIn})</Link> */}
        <Link to={`/profile/${this.props.logedIn}`}>Profile ({this.props.user.username})</Link>
        
      </div>
        
        
    );
  }
}

// export default Navbar;
const mapStateToProps = (state) => {
  return {
    // Field dlm object ini bisa diakses lewat this.props.namaField
    todo: state.haha,
    user: state.user,
  };
};

export default connect(mapStateToProps)(Navbar);
