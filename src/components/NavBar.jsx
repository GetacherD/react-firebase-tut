
import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

export default function NavBar() {
    const [user, loading, error]= useAuthState(auth);
    const SignUserOut  = async () => {
        await signOut(auth)
    }
    return (
        <div className="container-fluid bg-secondary text-end text-white ">
                <Link  to="/"><i style={{color:"white", display:"inline", marginRight:5}}>Home</i></Link>
                {!user  ?
                        <Link to="/login"><i style={{color:"white", display:"inline",marginRight:5}}>Login</i></Link>
                        :
                        user && <Link  to="/createpost"><i style={{color:"white", display:"inline", marginRight:5}}>Create Post</i></Link>}
                {user && 
                <Link to="/login" >
                {/* <i style={{color:"white"}}>{user?.displayName}</i> */}
                <img src={user?.photoURL || ""} alt="" width={30} height={30} style={{marginRight:5}} />
                <button onClick={SignUserOut} className="btn btn-danger">Log Out</button>
            </Link>}
                {/*  0922786013   AWN  S10 D4R */}
        </div>
    )
}