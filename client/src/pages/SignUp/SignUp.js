import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import"./SignUp.css"

function SignUp() {
    const [form, setForm] = useState({});
    const navigate = useNavigate();  
    const [userData, setUserData] = useContext(UserContext);
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            //sending data to be registered in database
            await axios.post('http://localhost:4000/api/users', form);

            //once registered the login automatically so send the new user info to be logged in
            const loginRes = await axios.post('http://localhost:4000/api/users/login', {
                email: form.email,
                password: form.password
            });

            // set the global state with the new user info
            setUserData({
                token: loginRes.data.token,
                user: loginRes.data.user
            });

            //set localStorage with the token
            localStorage.setItem('auth-token', loginRes.data.token);

            //navigate to homepage once the user is signed up
            navigate("/");
        } catch (error) {
            console.log('problem ==>', error.response.data.msg);
alert(error.response.data.msg)

        }
    }
  return (
    //     <>
    //     <div className='signup signup__home'>
    //     <div className='signup__container'>
    //       <div className='signup__title'>
    //         <h2>Join the network</h2>
    //         <p>Already have an account? <Link className='account__link'  to="/login">Sign in</Link></p>

    //         <form  className='signup__form' onSubmit={handleSubmit}>
    //             <input type="email" name ="email" placeholder='Email' onChange={handleChange}/> <br />

    //           <div className='signup__FLname d-xs-block d-sm-block d-md-flex '>
    //             <input type="text" name ="firstName" placeholder='First Name' onChange={handleChange}/> <br />

    //             <input id='lastname' type="text" name='lastName'  placeholder='Last Name'onChange={handleChange}/><br />
    //             </div>

    //             <input type="text" name='userName'  placeholder='User Name'onChange={handleChange}/><br />

    //             <input type="password" name='password' placeholder='Password' onChange={handleChange}/><br />
    //             <button>Agree and Join</button>
    //         </form>
    //         <p>I agree to the <a href="">privacy policy</a> and <a href="">terms of service</a></p>
    //         <Link className='account__link' to = "/login">Already have an ccount?</Link>
    //         </div>

    //     </div>

    //         <div className="signup__about">
    //           <p id='about'>About</p>
    //       <h1>Evangadi Networks Q&A</h1>
    //       <p>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, molestias! Expedita ex nostrum officia harum quos numquam pariatur quas sequi nulla itaque molestias ullam fugit aut voluptatem at, laudantium reprehenderit.</p>
    //         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates porro quidem maxime in nostrum asperiores quos totam quia, molestias facere, consectetur dolores quod soluta aspernatur obcaecati, ipsam mollitia? Assumenda, fugiat?</p> <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis obcaecati corporis a reiciendis vitae repellat. Repellendus voluptatum et sapiente possimus, reiciendis, necessitatibus voluptas laudantium accusamus totam eligendi consectetur dolorem quae.
    //       </p>

    //       <button>HOW IT WORKS</button>
    //       </div>
    //       </div>
    // {/*
    //       <div className="footer">
    //             <div>
    //             <img className="footer__image" src="https://www.evangadi.com/themes/humans//assets/images/misc/evangadi-logo-footer.png"
    //         alt=""
    //       />
    //       <div className="footer_socialLink">
    //       <span><a href="">facebook</a></span>
    //       <span className="footer__instagram"><a href="">insta</a></span>
    //       <span><a href="">youtube</a></span>
    //       </div>
    //       </div>

    // <div className="footer__linkList">
    //     <div className="footer__linkUseful">
    //       <h3>Useful Link</h3>
    //       <ul>
    //         <li>How it works</li>
    //         <li>Terms of Service</li>
    //         <li>Privacy policy</li>
    //       </ul>
    //       </div>
    // <div className="footer__linkContact">
    //       <h3>Contact Info</h3>
    //       <ul>
    //         <li>Evangadi Networks</li>
    //         <li>support@evangadi.com</li>
    //         <li>+1-202-386-2702</li>
    //       </ul>
    //       </div>

    //       </div>

    //         </div> */}

    //     </>
    <>
      <div className="row">
        <div className="col-md-6">
          <div className="signin">
            <div className="signinContainer">
              <h5>Join the network</h5>
              <p className="already">
                {"Already have an account? "}

                <Link to="/login">Sign in</Link>
              </p>
              <form onSubmit={handleSubmit}>
                {/* <label>Email: </label> */}
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                />
                <br />
                <div className="flex">
                  {/* <label>First Name: </label> */}
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    onChange={handleChange}
                  />
                  <br />
                  {/* <label>Last Name: </label> */}
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    onChange={handleChange}
                  />
                  <br />
                </div>

                {/* <label>User Name: </label> */}

                <input
                  type="text"
                  name="userName"
                  placeholder="User Name"
                  onChange={handleChange}
                />
                {/* <label>Password: </label> */}
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                />
                <div className="page">
                  <p>
                    {"I agree to the "}
                    <a href="">privacy policy</a> {"and "}
                    <a href="">terms of serivice</a>
                  </p>
                </div>
                <button className="btn">Agree and join</button>
              </form>

              <Link className="already" to="/login">
                <p>Already have an account?</p>
              </Link>
            </div>
          </div>
        </div>

        <dev className="col-md-6 about">
          <p className="text">About</p>
          <h1>Evangadi Networks</h1>
          <div className="lorem">
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
            <button className="aboutbtn">HOW IT WORKS</button>
          </div>
        </dev>
      </div>
    </>
  );
}

export default SignUp