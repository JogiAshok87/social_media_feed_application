import React,{useState,useEffect,useContext} from 'react';
import { initializeApp } from 'firebase/app';
import {getAuth,signInWithPopup,GoogleAuthProvider} from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { storeContext } from '../ContextAPI';
import { useNavigate } from 'react-router-dom';
import '../App.css'



const firebaseConfig = {
    apiKey: "AIzaSyCdJsX-y39DCuu69zS_i0sN_AkXv4d7zIM",
    authDomain: "social-media-feed-application.firebaseapp.com",
    projectId: "social-media-feed-application",
    storageBucket: "social-media-feed-application.firebasestorage.app",
    messagingSenderId: "901363324853",
    appId: "1:901363324853:web:8d96d781afda52ed4d2bfc"

}
const app = initializeApp(firebaseConfig);
const auth  = getAuth(app);

const Login = () => {
    const {user,setUser} = useContext(storeContext);
    const navigate = useNavigate()


    useEffect(() => {
        if (user) {
          console.log("Updated User:", user);
        }
      }, [user]);
      

    
      
    // const [user,setUser] = useState(null);

    // useEffect(()=>{
    //      auth.onAuthStateChanged(person =>{
    //         if(person){
    //             setUser(person)
    //         }else{
    //             setUser(null)
    //         }

    //      })
    // },[])

    const signInWithGoogle = async() =>{
        const provider = new GoogleAuthProvider()
        try{
           const result = await signInWithPopup(auth,provider);
           const userDetails = result.user
           console.log("User Signed-in:",userDetails)
           setUser({
            name :userDetails.displayName,
            photoURL : userDetails.photoURL,

           })
           navigate('/home');
        }
        catch(err){
            console.error(err)
        }
        

    }
  return (
    <div>
        <div className='grid-wrapper'>
            <div>
                <img src="image1.png"/>
            </div>
            <div>
                <img src="image2.png"/>
            </div>
            <div>
                <img src="image3.png"/>
            </div>
            <div>
                <img src="image4.png"/>
            </div>
            <div>
                <img src="image5.png"/>
            </div>
            <div>
                <img src="image6.png"/>
            </div>
            <div>
                <img src="image7.png"/>
            </div>
            <div>
                <img src="image8.png"/>
            </div>
            <div>
                <img src="image9.png"/>
            </div>

        </div>
        <div className='bg-Login'>
            <h1>Vibesnap</h1>
            <p>Moments That Matter, Shared Forever.</p>
            
           <button className="login-btn" onClick={signInWithGoogle}><FcGoogle size={20}/>
            continue with Google
            </button>
        </div>
        
       </div>
  )
}

export default Login