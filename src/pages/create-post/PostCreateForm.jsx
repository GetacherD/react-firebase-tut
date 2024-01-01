import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import {addDoc, collection} from "firebase/firestore"
import { auth, db } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "../../assets/App.css";
import { useNavigate } from "react-router-dom";



export default function PostCreateForm() {
    const schema =  yup.object().shape({
        title: yup.string().required("You must add a title."),
        description: yup.string().required("Must be at least 10 Chars").min(10)
    })
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })
    const [user] = useAuthState(auth);
    const postsRef = collection(db, "posts");
    async function onCreatePost(data) {
        await addDoc(postsRef, {
            ...data,
            username: user.displayName,
            userID: user.uid,
        })
        navigator("/");
    }
    const navigator = useNavigate();
    return (
        <div>
            Post Create Form
            <form onSubmit={handleSubmit(onCreatePost)}>
                <br />
                <input type="text"placeholder="Title ..." {...register("title")} />
                <p style={{color:"red"}}>{errors.title?.message}</p>
                <br />
                <br />
                <textarea type="text" placeholder="Description ...." {...register("description")} />
                <p style={{color: "red"}}>{errors.description?.message}</p>
                <br />

                <input type="submit" id="create-post" />

            </form>
        </div>
    )
}

// ARE 