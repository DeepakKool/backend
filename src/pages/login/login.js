import React, { useState, useEffect } from "react";
import "../style.css";
import background from "../../assets/bg_1.jpg";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context";
import { loginWithEmail } from "../../services/auth";

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
	 		navigate("/Blank");
        localStorage.setItem("token", data);	
        

     
      }
    });
  };

  return (
    <div
      style={{ flexDirection: "row", display: "flex", alignItems: "center" }}
    >
      <div style={{ width: "50%" }}>
        <div className="form">
          <text style={{ fontSize: 25 }}>EOV</text>
          <br />
          <text style={{ fontSize: 20 }}>Login</text>
          <div className="form-body">
            <div className="email">
              <label className="form__label" for="email">
                Email{" "}
              </label>
              <input
                type="email"
                id="email"
                className="form__input"
                value={email}
                onChange={(e) => handleInputChange(e)}
                placeholder="Email"
              />
            </div>
            <div className="password">
              <label className="form__label" for="password">
                Password{" "}
              </label>
              <input
                className="form__input"
                type="password"
                id="password"
                value={password}
                onChange={(e) => handleInputChange(e)}
                placeholder="Password"
              />
            </div>
          </div>

          <div class="footer">
            <button onClick={() => handleSubmit()} type="submit" class="btn">
              Login
            </button>
          </div>
        </div>
      </div>

      <div
        style={{
          width: "50%",
          height: 1000,
          //   backgroundImage: url('../assets/bg_1.jpg')
          backgroundImage: `url(${background})`,
        }}
      >
        ds
      </div>
    </div>
  );
};

export default Login;
