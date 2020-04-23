import React from "react";
import { Link } from "react-router-dom";
import "../../style.css"
import Cookie from 'universal-cookie'
import {userLogout} from '../../redux/actions'
import {connect} from 'react-redux'

const cookieObject = new Cookie()
class Navbar extends React.Component {

  onLogout =()=>{
    
    cookieObject.remove('authData');
    this.props.userLogout();
  }
  render() {
    return (

      <div
        className="navbarku border-hitam"
      >
        <Link to="/RegisterScreen">Register</Link>
        <Link to="/LoginScreen">Login</Link>
      
        {!this.props.user.id?
        <Link to={`/profile/${this.props.user.id}`}>Profile ({this.props.user.username})</Link>
        :
        <Link to={`/profile/${this.props.user.id}`}>Profile ({this.props.user.username})   
        <input type="button" value="LOGOUT" className="btn btn-primary ml-2" onClick={this.onLogout}/>
        </Link>
        }
        
      </div>
        
        
    );
  }
}

// export default Navbar;
const mapStateToProps = (state) => {
  return {
    // Field dlm object ini bisa diakses lewat this.props.namaField
    
    user: state.user,
  
  };
};

const mapDispatchToProps = {
  userLogout,
}

export default connect(mapStateToProps,mapDispatchToProps)(Navbar);
