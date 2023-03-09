import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

function Question() {
  const [userData, setUserData] = useContext(UserContext);
  const [form, setForm] = useState({});
  const postId = Math.floor(Math.random() * 100000)
  const navigate = useNavigate();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:5000/api/questions", {
      user_id: userData.user.id,
      question: form.brief,
      question_description: form.descr,
      post_id: `questionPost${postId}`,
    });
    navigate("/");
  };
  return (
    <div>
      <h2>Ask Question to the community</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="brief"
          placeholder="write your question"
          onChange={handleChange}
        />
        <textarea
          name="descr"
          id=""
          cols="30"
          rows="10"
          placeholder="Elaborate your question"
          onChange={handleChange}
        ></textarea>
        <button>Post your Question</button>
      </form>
    </div>
  );
}

export default Question;
