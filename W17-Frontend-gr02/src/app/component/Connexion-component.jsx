"use client";
import React, { useState, useEffect} from "react";
import "../globals.css";

const Connexion = ({ setUserType  }) => {
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        emailLog: "",
        passwordLog: "",
      })

    useEffect(() => {
        window.sessionStorage.setItem("page","1");
    }, []);

      const handleChange = (e) => {
      const { title, value } = e.target;
        setState((prevState) => ({
          ...prevState,
          [title]: value,
        }));
      };

      const createUser = () => {
          fetch("http://localhost:8080/W17-venteEnLigne/ExecuteServer/createUser", {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName: state.firstName,
                    lastName: state.lastName,
                    email: state.email,
                    password: state.password,
                }),
            })
            .then(response => {
                if (response.ok) {
                    localStorage.setItem('userData', JSON.stringify({
                        firstName: state.firstName,
                        lastName: state.lastName,
                        email: state.email,
                    }));
                    setState({
                        firstName: "",
                        lastName: "",
                        email: "",
                        password: "",
                    });
                return window.sessionStorage.setItem("page","2");
            }
        })

      };

      const logIn = () => {
        fetch("http://localhost:8080/W17-venteEnLigne/ExecuteServer/connexion", {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    emailLog: state.emailLog,
                    passwordLog: state.passwordLog
                }),
            })
            .then(response => {
                if (response.ok) {
                    setState({
                        emailLog: "",
                        passwordLog: "",
                    });
                return response.json();
            }
        })
        .then(data => {
            if(!data.role){
                window.sessionStorage.setItem("userData", data.id_user);
                window.sessionStorage.setItem("commande", JSON.stringify(data));
                return window.sessionStorage.setItem("page","2");
            }
            else{
                return window.sessionStorage.setItem("page","3");
            }
        })
      }

        return (

            <div className="form">
                <div className="form-content">

                    <div id="login">
                        <h1>Welcome Back!</h1>

                        <form action="/" method="post">

                            <div className="field-wrap">
                                <label>
                                Email Address<span className="req">*</span>
                                </label>
                                <input type="email" title="emailLog" required value={state.emailLog} onChange={handleChange}/>
                            </div>

                            <div className="field-wrap">
                                <label>
                                Password<span className="req">*</span>
                                </label>
                                <input type="password" title="passwordLog" required value={state.passwordLog} onChange={handleChange}/>
                            </div>

                            <div className="forgot">
                                <div><a href="#">Forgot Password?</a></div>
                            </div>

                            <button className="button button-block" onClick={logIn}>Log In</button>

                        </form>

                    </div>

                    <div id="signup">
                        <h1>Sign Up for Free</h1>

                        <form action="/" method="post">

                            <div className="top-row">
                                <div className="field-wrap">
                                    <label>
                                        First Name<span className="req">*</span>
                                    </label>
                                    <input type="text" title="firstName" required value={state.firstName} onChange={handleChange} />
                                </div>

                                <div className="field-wrap">
                                    <label>
                                        Last Name<span className="req">*</span>
                                    </label>
                                    <input type="text" title="lastName" required value={state.lastName} onChange={handleChange}/>
                                </div>
                            </div>

                            <div className="field-wrap">
                                <label>
                                    Email Address<span className="req">*</span>
                                </label>
                                <input type="email" title="email" required value={state.email} onChange={handleChange}/>
                            </div>

                            <div className="field-wrap">
                                <label>
                                    Set A Password<span className="req">*</span>
                                </label>
                                <input type="password" title="password" required value={state.password} onChange={handleChange}/>
                            </div>

                            <button className="button button-block" onClick={createUser}>Get Started</button>

                        </form>

                    </div>

                </div>
            </div>
        )
}

export default Connexion;
