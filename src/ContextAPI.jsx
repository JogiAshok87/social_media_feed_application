import {useState, createContext } from "react";

export const storeContext = createContext()

const ContextProvider = (props) =>{
    const [user,setUser] = useState({
        name :"",
        photoURL:""
    })
    const [feedsData,setFeedsData] = useState([
        {
          id: 1,
          profileURL: "",
          Name: "Aarav",
          time: "2 hours ago",
          description:
            "Just arrived in New York City! Excited to explore the sights,sounds, and energy of this amazing place.",
          hastags: "#NYC #Travel",
          imgURL: "",
          likes: 67,
        },
        {
          id: 2,
          profileURL: "",
          Name: "Aarav",
          time: "2 hours ago",
          description:
            "Just arrived in New York City! Excited to explore the sights,sounds, and energy of this amazing place.",
          hastags: "#NYC #Travel",
          imgURL: "",
          likes: 67,
        },
        {
          id: 3,
          profileURL: "",
          Name: "Aarav",
          time: "2 hours ago",
          description:
            "Just arrived in New York City! Excited to explore the sights,sounds, and energy of this amazing place.",
          hastags: "#NYC #Travel",
          imgURL: "",
          likes: 67,
        },
      ]);

    const ContextData = {user,setUser,feedsData,setFeedsData}

    return(
        <storeContext.Provider value={ContextData}>
            {props.children}

        </storeContext.Provider>
    )


}

export default ContextProvider