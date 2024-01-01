import { auth, provider} from "../config/firebase";
import {signInWithPopup} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import Main from "./Main";
export default function Login() {
    const [user, loading, error]= useAuthState(auth);
    const navigate= useNavigate()
    const signInwithGoogle = async () => {
        
           const result = await signInWithPopup(auth, provider)
        //    console.log(result)
        navigate("/");

    }
    return (
       
        <div>
            <h1 style={{textAlign: "center"}}>Sign In with Google to Continue</h1>
            <div style={{textAlign:"center"}}>
            <button onClick={signInwithGoogle}>Sign In with Google</button>
            </div>
        </div>
       
    )
}