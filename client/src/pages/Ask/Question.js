import axios from "axios";
import "./Question.css";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

function Question() {
  const [userData, setUserData] = useContext(UserContext);
  const [form, setForm] = useState({});
  const postId = Math.floor(Math.random() * 100000);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:4000/api/questions", {
      user_id: userData.user.id,
      question: form.brief,
      question_description: form.descr,
      post_id: `questionPost${postId}`,
    });
    console.log('hey');
    navigate("/");
  };
  return (
    // <div className="question">
    //   <div className="question__summerize">
    //     <h2 style={{ fontWeight: "450", paddingLeft: "50px" }}>
    //       Steps to write a good question
    //     </h2>
    //     <ul style={{ fontWeight: "350", fontSize: "14px" }}>
    //       <li>summerize your problem in one-line title.</li>
    //       <li>Describe your problem in more detail.</li>
    //       <li>Describe what you tried and what to expected to happen.</li>
    //       <li>Review your question and post it to the site.</li>
    //     </ul>
    //     <br />
    //     <br />
    //     <br />
    //   </div>
    //   <div className="question__detail">
    //     <h3>Ask Question to the community</h3>
    //     <p>Go to question page</p>
    //     <form onSubmit={handleSubmit}>
    //       <input
    //         style={{
    //           height: "40px",
    //           borderRadius: "8px",
    //           border: "1px solid gray",
    //           marginBottom: "6px",
    //         }}
    //         type="text"
    //         name="brief"
    //         size="108"
    //         placeholder="write your question"
    //         onChange={handleChange}
    //       />{" "}
    //       <br />
    //       <textarea
    //         style={{
    //           borderRadius: "8px",
    //           border: "1px solid gray",
    //           marginBottom: "4px",
    //         }}
    //         name="descr"
    //         id=""
    //         cols="110"
    //         rows="8"
    //         placeholder="Question description"
    //         onChange={handleChange}
    //       ></textarea>
    //       <div className="question__button">
    //     <button>Post your Question</button>
    //   </div>
    //     </form>
    //   </div>

    // </div>

    <div className="question">
      <hr />
      <div className="question__desc">
        <div className="question__steps m-5">
          Steps to write a good question
        </div>
        <div className="question__li">
          <li>Summerize your problem in a one-line title.</li>
          <li>Describe your problem in more detail.</li>
          <li>Describe what youu tried and what you expected to happen</li>
          <li>Review your question and post it to the site.</li>
        </div>
      </div>
      <div className="question__box">
        <div className="question__steps mt-5">Ask a public question</div>
        <div className="question__go mb-3" >
          <Link to="/"> Go to question page</Link>
        </div>
        <form className="question_form" onSubmit={handleSubmit}>
          <input
            className="mb-2  p-2 question__input inputs "
            type="text"
            name="brief"
            placeholder=" Title"
            onChange={handleChange}
          />
          <br />
          <textarea
            className="question__textarea  mb-1  pt-2 inputs"
            name="descr"
            id=""
            cols="30"
            rows="10"
            placeholder=" Question Description"
            onChange={handleChange}
          ></textarea>
          <br />
          <button>Post your Question</button>
        </form>
      </div>
    </div>
  );
}

export default Question;
