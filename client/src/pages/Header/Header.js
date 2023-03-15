import React, { useContext } from "react";
import "./HeaderCustom"
import "./Header.css"
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
// import "./Header.css";
import evangadiLogo from "../../CommonResources/evanLogo.jpeg"

const Header = ({logout}) => {
  const [userData, setUserData] = useContext(UserContext);

  // const handleAuthentication = () => {
  //   if (userData) {
  //     
  //   }
  // };

  return (
    // <div className="nav">
    //   <Link to="/">
    //   <img
    //     className="nav__image"
    //     src="https://www.evangadi.com/themes/humans//assets/images/misc/evangadi-logo-home.png"
    //     alt=""
    //   />
    //   </Link>

    //     <Link to={!userData.user && "/login"} className="link">
    //   <div className="nav__bar">
    //     <span>Home</span>
    //     <span className="nav__works">How it Works</span>
    //       {/* <div onClick={handleAuthentication} className=""> */}
    //       {userData.user ? <button onClick={logout}>LogOut</button>: <button>SignIn</button>}

    //       {/* </div> */}
    //   </div>
    //     </Link>

    // </div>

    <div className="header">
      <div className="header_container ">
        <Link to="/">
          <div className="header__logo">
            <img src={evangadiLogo} alt="" />
          </div>
        </Link>
        <div className="header__titles">
          <div className="header__home">
            <Link to="/"> Home</Link>
          </div>
          <div className="header__how">
            <Link to=""> How it works</Link>
          </div>

          {userData.user ? (
            <button className="signInBtn" onClick={logout}>
              LogOut
            </button>
          ) : (
            <button className="signInBtn">SignIn</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
