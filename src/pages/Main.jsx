import {useAuthState} from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";
import { Firestore, getDocs, collection, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import { useState } from "react";
import { useEffect } from "react";
import Post from "./create-post/Post";

export default function Main () {
    const [postsList, setPostsList] = useState(null);
    const [user, loading, error]= useAuthState(auth);
    const postsRef = collection(db, "posts");
    const getPosts = async () => {
        const posts = await getDocs(postsRef);
        posts.docs.map(post =>console.log(post.data()));
       setPostsList(posts.docs.map(doc=> ({...doc.data(), id:doc.id})));
    }
    useEffect(()=>{
        getPosts();
    }, [])
    return (
        <div>
            <h1 style={{textAlign:"center", marginTop:20}}>Home of Posts!</h1>
            {postsList?.map((post, key)=> <Post post={post} key={key}/>)}
            <button onClick={getPosts}>check posts</button>
        </div>
    )
}