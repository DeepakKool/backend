import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../../context";
import { loginWithEmail } from "../../../services/auth";
import eovlogo from './eovlogo.svg'
import {ReactComponent as GoogleLogo} from './google.svg'
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const { user, setUser } = React.useContext(UserContext);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = () => {
    console.log(email, password);
    logInWithData(email, password);
    // logInWithEmailAndPassword(email, password);
  };

  const logInWithData = async (email, password) => {
    await loginWithEmail().then((data) => {
		console.log("LOGIN", JSON.stringify(data.user, null, 2));
      if (data.error) {
        // finalData.push("Error");
        console.log("here in error");
      } else {
		setUser(data.user);
        // console.log("LOGIN", JSON.stringify(data, null, 2));
	 		navigate("/dashboard");
        localStorage.setItem("user", data.user);	
      }
    });
  };

  return <div className="container main">
      <div className="row">
        <div className="col-md-6 side-image">
          <img src={eovlogo} className='mt-5 pt-5 ml-3' style={{width: '135.59px'}} />
          <h2 className="ml-3 mt-3">Outcome-driven, <span style={{color: '#FD7E14'}}>customer success and people-first</span> approach</h2>
        </div>
        <div className="col-md-6">
          <div className="signin-form">
            <h2 className="mt-5 pt-3 text-center">Log in to your account</h2>
            <p className="mt-3 text-center mb-5 text-muted h6">Welcome back! Please enter your details.</p>
            <div className="form-group">
              <label for="email">Email</label>
              <input placeholder="Enter your email" type="email" className="form-control" />
            </div>
            <div className="form-group">
              <label for="password">Password</label>
              <input type="password" placeholder="Password" className="form-control" />
            </div>
          </div>
          <div className="d-flex justify-content-between mb-1">
            <label>
            <input type='checkbox' value='remember-me'/> Remember me
            </label>
            <Link className="primary" to='/forgotpassword'>Forgot Password</Link>
          </div>
          <button onClick={handleSubmit} type="submit" class="btn btn-primary btn-block mb-3">
            Sign in
          </button>
          <button type="button" class="btn btn-outline-primary btn-block mb-3"><GoogleLogo className='logo' /> Sign in with Google</button>
          <p className="text-center">Don't have an account? <Link to='/signup'>Sign up</Link></p>
      </div>
      </div>
      
    </div>
}

export default Login;
