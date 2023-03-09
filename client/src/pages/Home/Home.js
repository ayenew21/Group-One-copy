import axios from 'axios';
import React, { useContext, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

function Home({logout}) {
    const [userData, setUserData] = useContext(UserContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (!userData.user) navigate("/login");
        const fetch = async ()=>{
          const response = await axios.get('http://localhost:5000/api/questions');

          setUserData({
            ...userData,
            questions: response.data.questions
          })

        }
        fetch();
    }, [userData.user, navigate]);
    console.log(userData);

    const handleClick = (item) =>{
      setUserData({
        ...userData,
        singleQuestion: {
         post_id: item.post_id,
         question_id: item.question_id
        }
      })
      console.log(userData);
      navigate('/answer')
    }
  return (
    <div>

            {/* show username in homepage */}
            <h1>WelCome {userData.user?.display_name}</h1>
            <button onClick={()=>navigate('/question')}>Ask Question</button>
{
  userData.questions && userData.questions?.map((item)=>(
  <div>   
 {/* <div onClick={()=>navigate(`/question/${item.post_id}`)}>{item.question}</div> */}
    <div onClick={()=>handleClick(item)}>{item.question}</div>
  <div>{item.user_name}</div>
  </div>
  ))
}
            {/* logout when the button clicked in which the function comes from app.js */}
            <button onClick={logout}>Log out</button>
        </div>
  )
}

export default Home;