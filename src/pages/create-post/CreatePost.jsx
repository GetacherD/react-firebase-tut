import PostCreateForm from "./PostCreateForm"
export default function CreatePost() {
    return (
    
           
           <div className="container">
            <div className="row text-center">
                    <div className="col-sm-8 col-md-4 ">
                        <div className="card mt-5 text-center bg-primary">
                            <PostCreateForm/>
                        </div>
                    </div>
            </div>
           </div>
        
    )
}