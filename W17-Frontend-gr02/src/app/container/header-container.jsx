"use client";
import React, { Component, useEffect } from "react";
import HeaderComponent from "../component/header-component";

class HeaderContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: props.isLoggedIn,
      setUserType: props.setUserType,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isLoggedIn !== this.props.isLoggedIn) {
      this.setState({ isLoggedIn: this.props.isLoggedIn });
    }
  }

  handleLogin = () => {
    
  };

  handleLogout = () => {
    this.setState({ isLoggedIn: false });
    window.sessionStorage.setItem("page", 0);
    window.sessionStorage.removeItem("userData");
  };

  render() {
    return (
      <div>
        <HeaderComponent 
          setUserType={this.props.setUserType} 
          isLoggedIn={this.state.isLoggedIn} 
          onLogin={this.handleLogin}
          onLogout={this.handleLogout} 
        />
      </div>
    );
  }
}

export default HeaderContainer;
