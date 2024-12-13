import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { storeContext } from "../ContextAPI";
import { FaUserCircle } from "react-icons/fa";
import { GiHearts } from "react-icons/gi";
import { IoNavigate } from "react-icons/io5";
import { HiOutlinePlus } from "react-icons/hi2";
// const feedsData = [
//   {
//     id: 1,
//     profileURL: "",
//     Name: "Aarav",
//     time: "2 hours ago",
//     description:
//       "Just arrived in New York City! Excited to explore the sights,sounds, and energy of this amazing place.",
//     hastags: "#NYC #Travel",
//     imgURL: "",
//     likes: 67,
//   },
//   {
//     id: 1,
//     profileURL: "",
//     Name: "Aarav",
//     time: "2 hours ago",
//     description:
//       "Just arrived in New York City! Excited to explore the sights,sounds, and energy of this amazing place.",
//     hastags: "#NYC #Travel",
//     imgURL: "",
//     likes: 67,
//   },
//   {
//     id: 1,
//     profileURL: "",
//     Name: "Aarav",
//     time: "2 hours ago",
//     description:
//       "Just arrived in New York City! Excited to explore the sights,sounds, and energy of this amazing place.",
//     hastags: "#NYC #Travel",
//     imgURL: "",
//     likes: 67,
//   },
// ];

const Home = () => {
  const { user, feedsData,setFeedsData} = useContext(storeContext);
  const navigate = useNavigate()
  console.log("Home profile Details", user);
  const createPost = () =>{
    navigate("/CreatePost")
    
  }
  return (
    <div className="bg-Home">
      <div className="userProfile">
        {/* <img src={user.photoURL} alt="userProfile"/> */}
        <FaUserCircle size={50} />
        <div>
          <p style={{ color: "#c8c8c8" }}>Welcome Back</p>
          <h3>{user.name}</h3>
        </div>
      </div>
      <div className="feed-bg">
        <h2>Feeds</h2>
        <div className="posts">
          {feedsData.map((eachFeed, index) => (
            <div key={index} className="feed-card">
              <div className="userProfile">
                <img
                  src="/public/feedProfiles/user1.png"
                  alt=""
                  className="feedProfile_pic"
                />
                <div>
                  <h3>{eachFeed.Name}</h3>
                  <p>{eachFeed.time}</p>
                </div>
              </div>
              <p>{eachFeed.description}</p>
              <h4>{eachFeed.hastags}</h4>
              <img src="public/feedProfiles/user1post.png" alt="" className="post-img"/>
              <div className="feed-footer">
                <div style={{color:"#d95b7f",display:"flex",gap:"5px"}}>
                <GiHearts size={25} />
                <h4>{eachFeed.likes}</h4>
                </div>
                <button className="share-btn"><IoNavigate size={20}/> Share</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="createPost-icon" onClick={createPost}>
      <HiOutlinePlus size={40}/>
      </div>
    </div>
  );
};

export default Home;
