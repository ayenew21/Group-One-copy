import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

function Answer() {
  const [userData, setUserData] = useContext(UserContext);
  const [post, setPost] = useState({});
  const [form, setForm] = useState({});
  const [answer, setAnswer] = useState([]);
  const navigate = useNavigate();
  console.log(userData.singleQuestion);
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.post(
        `http://localhost:5000/api/questions/id`,
        {
          post_id: userData.singleQuestion.post_id,
        }
      );
      console.log(response);
      setPost({
        question: response.data.data,
      });
    };
    fetch();
  }, []);

  useEffect(() => {
    const get = async () => {
      const res = await axios.post(`http://localhost:5000/api/answers/all`,
       {
        question_id: userData.singleQuestion.question_id,
      }
      );
      console.log(res);
      setAnswer(res.data.data);
    };
    get();
  }, [answer]);

  const handleChange = (e) => {
    setForm({ [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:5000/api/answers`, {
      answer: form.answer,
      user_id: userData.user.id,
      question_id: post.question.question_id,
    });
    setAnswer([]);
    setForm({answer: ''});
  };
  console.log(answer);
  console.log(post);
  return (
    <div>
      <h3>Question</h3>
      <h3>{post?.question?.question}</h3>
      <h3>{post?.question?.question_description}</h3>

      <h3>Answer From The Community</h3>
      {answer &&
        answer?.map((item) => (
          <div>
            <h3>{item.user_name}</h3>
            <h3>{item.answer}</h3>
          </div>
        ))}

      <h2>Answer The Top Questions</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          name="answer"
          id=""
          cols="30"
          rows="10"
          placeholder="Your Answer here"
          value={form.answer}
          onChange={handleChange}
        ></textarea>
        <button>Post Your Answer</button>
      </form>
    </div>
  );
}

export default Answer;
