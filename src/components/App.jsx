import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import Login from "../pages/Login"
import NavBar from "./NavBar";
import CreatePost from "../pages/create-post/CreatePost";


export default function App() {
    return (
        <div>
            <Router>
            <NavBar/>
                <Routes>
                    <Route  path="/" element={<Main />}/>
                    <Route path="/login" element={<Login />} />
                    <Route path="/createpost" element={<CreatePost />} />
                </Routes>
            </Router>
            
        </div>
    )
}