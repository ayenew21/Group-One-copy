import axios from "axios";
import "./Login.css";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { IconButton } from "@mui/material";

function Login() {
  const [userData, setUserData] = useContext(UserContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  const [type, setType] = useState("password");
  const [visibility, setVisibilitiy] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleToogle = () => {
    if (type === "password") {
      setVisibilitiy(true);
      setType("text");
    } else {
      setVisibilitiy(false);
      setType("password");
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //sending user data to database to be logged in
      const loginRes = await axios.post(
        "http://localhost:4000/api/users/login",
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
      // console.log("problem", err.response.data.msg);
      alert(err.response.data.msg);
    }
  };

  // useEffect(() => {
  //   if (userData.user) navigate("/");
  // }, [userData.user, navigate]);

  return (
    // <div>
    // <div className="login">
    //   <div className="login__container">
    //     <div className="login__title">
    //       <h2>Login to your account</h2>
    //       <p>
    //         Don't have an account?{" "}
    //         <Link className="account__link" to="/signup">
    //           Create a new account
    //         </Link>
    //       </p>

    //       <form className="login__form" onSubmit={handleSubmit}>
    //         {/* <label>Email</label> */}
    //         <input
    //           type="email"
    //           name="email"
    //           placeholder="Your Email"
    //           onChange={handleChange}
    //         />{" "}
    //         <br />
    //         {/* <label>Password</label> */}
    //         <input
    //           type="password"
    //           name="password"
    //           placeholder="Your Password"
    //           onChange={handleChange}
    //         />
    //         <br />
    //         <button>Submit</button>
    //       </form>
    //       <Link className="account__link" to="/signup">
    //         Create an Account?
    //       </Link>
    //     </div>
    //   </div>

    //     <div className="login__about">
    //       <p id="about">About</p>
    //       <h1>Evangadi Networks Q&A</h1>
    //       <p>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
    //         molestias! Expedita ex nostrum officia harum quos numquam pariatur
    //         quas sequi nulla itaque molestias ullam fugit aut voluptatem at,
    //         laudantium reprehenderit.
    //       </p>
    //       <p>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
    //         porro quidem maxime in nostrum asperiores quos totam quia, molestias
    //         facere, consectetur dolores quod soluta aspernatur obcaecati, ipsam
    //         mollitia? Assumenda, fugiat?
    //       </p>{" "}
    //       <p>
    //         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
    //         obcaecati corporis a reiciendis vitae repellat. Repellendus
    //         voluptatum et sapiente possimus, reiciendis, necessitatibus voluptas
    //         laudantium accusamus totam eligendi consectetur dolorem quae.
    //       </p>
    //       <button>HOW IT WORKS</button>
    //     </div>
    //         </div>

    //     </div>
    <>
      <div
        id="home"
        className="login d-lg-flex d-md-flex d-sm-block d-xs-block "
      >
        <div className="container mx-xs-5">
          <div className="login__heading">
            <h3>Login to your account</h3>
            <p className="login__account">
              Don’t have an account?{" "}
              <Link to="/signup">Create a new account</Link>
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
              <div>
                <input
                  className="login__input"
                  type={type}
                  name="password"
                  onChange={handleChange}
                  placeholder="password"
                />
                <span className="eye mt-4">
                  <IconButton onClick={handleToogle}>
                    {visibility ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </span>
              </div>
              <br />
              <button className="login__button">Submit</button>
              <p className="login__account mb-5">
                <Link to="/signup"> Create a new account</Link>
              </p>
            </form>
          </div>
        </div>
        <div className="login__about  mx-xs-5 mb-sm-5 mx-md-1">
          {/* <About /> */}
          <div className="about ">
            <p className="about__about">About</p>
            <div about__title>
              <h1>Evangadi Networks Q&A</h1>
            </div>
            <p>
              No matter what stage of life you are in, whether you’re just
              starting elementary school or being promoted to CEO of a Fortune
              500 company, you have much to offer to those who are trying to
              follow in your footsteps.
            </p>
            <p>
              Wheather you are willing to share your knowledge or you are just
              looking to meet mentors of your own, please start by joining the
              network here.
            </p>

            <button>HOW IT WORKS</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
