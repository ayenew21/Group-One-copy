import axios from "axios";
import "./Login.css";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

function Login() {
  const [userData, setUserData] = useContext(UserContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //sending user data to database to be logged in
      const loginRes = await axios.post(
        "http://localhost:5000/api/users/login",
        {
          email: form.email,
          password: form.password,
        }
      );

      //update global state with response from backend(user-info)
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });

      //set localStorage with the token
      localStorage.setItem("auth-token", loginRes.data.token);

      //navigate user to homepage
      navigate("/");
    } catch (err) {
      // if the email isnot reegistered in the database the backend respond 404 with message so to show that message to the frontend we use the path err.response.data.msg
      console.log("problem", err.response.data.msg);
      alert(err.response.data.msg);
    }
  };

  useEffect(() => {
    if (userData.user) navigate("/");
  }, [userData.user, navigate]);

  return (
    <div className="login">
      <div className="login__heading">
        <h3>Login to your account</h3>
        <p>
          Don’t have an account?{" "}
          <Link to={"/signup"}>Create a new account</Link>
        </p>
      </div>
      <div className="login__form">
        <form onSubmit={handleSubmit}>
          {/* <label>Email: </label> */}
          <input
            className="login__input"
            type="text"
            name="email"
            onChange={handleChange}
            placeholder="Email"
          />
          <br />
          {/* <label>Password: </label> */}
          <input
            className="login__input"
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="password"
          />

          <br />
          <button className="login__button">submit</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
