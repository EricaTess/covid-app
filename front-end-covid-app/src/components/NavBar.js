import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';


const NavBar = () => {
  
    
  return (
    <div>
      <Link to="/login" onClick={() => localStorage.clear()}>Log out</Link>
    </div>
  );
};

export default NavBar;