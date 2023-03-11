import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import "./Header.css";

const Header = ({logout}) => {
  const [userData, setUserData] = useContext(UserContext);

  // const handleAuthentication = () => {
  //   if (userData) {
  //     
  //   }
  // };

  return (
    <div className="nav">
      <Link to="/">
      <img
        className="nav__image"
        src="https://www.evangadi.com/themes/humans//assets/images/misc/evangadi-logo-home.png"
        alt=""
      />
      </Link>

        <Link to={!userData.user && "/login"} className="link">
      <div className="nav__bar">
        <span>Home</span>
        <span className="nav__works">How it Works</span>
          {/* <div onClick={handleAuthentication} className=""> */}
          {userData.user ? <button onClick={logout}>LogOut</button>: <button>SignIn</button>}
            
          {/* </div> */}
      </div>
        </Link>
        


    </div>
  );
};

export default Header;
