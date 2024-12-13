import React,{useState,useContext} from 'react'
import { storeContext } from '../ContextAPI'
import '../CSS/createPost.css'

const CreatePost = () => {
    const {feedData,setFeedData} = useContext(storeContext)
    const [newPost,setNewPost] = useState({
        title:"",
        description:"",
        tags:"",
        

    })
    const [selectedImg,setSelectedImg] = useState(null)
    
    const onChangeInput = (e) =>{
        const {name,value} = e.target
        setNewPost({...newPost,[name]:value});

    }
    const imageHandler = (e) =>{
        const file = e.target.files?.[0]
        file ? setSelectedImg(URL.createObjectURL(file)): setSelectedImg(undefined)
    }
    
    const posthandler = (e) =>{
        e.preventDefault()
        console.log("newPost",newPost)
        setFeedData({
            description:newPost.description,
            hastags : newPost.tags,
            imgURL : selectedImg,
            

        })
        

    }
  return (
    <div className='CreatePost-bg'>

        <form onSubmit={posthandler}>
            <h1>Create New Post</h1>
            <div>
                <label>Post Title</label>
                <input name="title" type="text" onChange={onChangeInput}/>
            </div>
            <div>
                <label>Post description</label>
                <textarea name= "description" rows={10} onChange={onChangeInput}></textarea>
            </div>
            <div>
                <label>Tags</label>
                <input type="text" name="tags" placeholder='Separated by comma(no more than 5)' onChange={onChangeInput}/>
            </div>

            <div>
                <label>Post Image</label>
                <input type="file" name="image" multiple
                onChange={imageHandler}
                
                />
                {selectedImg && (<img src={selectedImg} height={200} width={500}/>)}
            </div>
            <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:'center',marginTop:"50px"}}>
            <button type="Submit" className='post-submit-btn'>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default CreatePost