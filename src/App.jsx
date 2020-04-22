import React, { useState } from "react";
import { BrowserRouter, Route, Switch,withRouter, Redirect } from "react-router-dom";

import NewScreen from "./views/screens/NewScreen";
import TableProduct from "./views/components/TableProduct";
import CounterScreen from "./views/screens/CounterScreen";
import ProductCard from "./views/components/ProductCard";
import Cookie from 'universal-cookie'
import "./App.css";
import "./bootstrap.css";

import InputScreen from "./views/screens/InputScreen";
import AuthScreen from "./views/screens/AuthScreen";
import LifecycleScreen from "./views/screens/LifecycleScreen";
import HomeScreen from "./views/screens/HomeScreen";
import PageNotFound from "./views/screens/PageNotFound";
import Navbar from "./views/components/Navbar";
import ProfileScreen from "./views/screens/ProfileScreen";
import LoginScreen from './views/screens/LoginScreen';
import RegisterScreen from './views/screens/RegisterScreen';
import TodoReduxScreen from "./views/screens/TodoReduxScreen";


const cookieObject = new Cookie();
class App extends React.Component {
  // State
  // const [UserActive,setUserActive] = useState('No Active User')


  // parentCallBack = (param) => {
  //   setUserActive(param)
  // }
  render(){
  // alert(UserActive)
  return (
    // <div className="App">
    //   <h1>Hello World!</h1>
    //   <CounterScreen />
    //   <InputScreen />
    //   <AuthScreen />
    //   <LifecycleScreen />
    // </div>
    <>
      {/* <LifecycleScreen /> */}
    
      {/* <Navbar logedIn={UserActive}/> */}
      <Navbar/>
      <Switch>
        {/* <Route exact path="/" component={HomeScreen} /> */}
        
        <Route exact path="/" component={RegisterScreen} />
       
        <Route exact path="/RegisterScreen" component={RegisterScreen} />
        {/* <Route exact path="/LoginScreen" component={LoginScreen} /> */}
        <Route exact path="/profile/:userId" component={ProfileScreen} />
        <Route exact path="/LoginScreen" component={LoginScreen} />
        <Route exact path="/todo" component={TodoReduxScreen} />
        {/* <Route render={(props) => <LoginScreen {...props} callback = {parentCallBack} />}/> */}
        
     
        <Route path="*" component={PageNotFound} />
      </Switch>
    </>
  );
  }
}

export default withRouter(App);
