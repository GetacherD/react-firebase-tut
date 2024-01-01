import { collection, addDoc, query, where, getDocs, doc, deleteDoc } from "firebase/firestore"
import { auth, db } from "../../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import { useState } from "react";

export default function Post({post}) {
    const [likesList, setLikesList] = useState([]);
    const likesRef = collection(db, "likes");
    const [user] = useAuthState(auth);
    const [liked, setLiked] = useState(false)
    const addLikes = async ()=>{
   
            // console.log(post)
            const hasUserLiked = likesList?.find(userID=>userID==post.userID);
            if (!hasUserLiked) {
                setLiked(true)
                await addDoc(likesRef, {
                    userID:user.uid , postID:post.id})
                    await getLikes()
            }
            else {
                const liketodel =  query(likesRef, where("postID", "==", post.id),
                where("userID", "==", user.uid));
                const likedata = await getDocs(liketodel)
                const dlike = doc(db, "likes", likedata.docs[0].id)
                await deleteDoc(dlike)
             await   getLikes()
             setLiked(false)
            }
            
     
    }
    const likesDoc = query(likesRef, where("postID", "==", post.id));
    const getLikes = async () => {
        const data = await getDocs(likesDoc);
        // console.log(data.docs.map(doc=>doc.data().userID))
       setLikesList(data.docs.map(doc=>doc.data().userID));
    }
    useEffect(()=>{
        getLikes();
    }, [])
    
    return (
        <div className="container">
           <div className="card m-3">
          <div className="card-body">
          <h1>{post.title}</h1>
            <p>{post.description}</p>
            <p>@{post.username}</p>
            <div className="row justify-content-end">
                <p>Likes: {likesList.filter(like=>like == post.userID).length}</p>
            {liked?<button onClick={addLikes} className="col-2 justify-content-center border-1">&#128078;</button>:<button onClick={addLikes} className="col-2 justify-content-center border-1">&#128077;</button>}
            </div>
            {/* <button onClick={getLikes}>&#128078;</button> */}
          </div>
           </div>
            {/* <p>{post.id}</p> */}
        </div>
    )
}