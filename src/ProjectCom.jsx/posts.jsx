import { useEffect, useState } from "react";
import { DeletePost, GetPost } from "../API/PostAPI";
import { Form } from "./Form";
import "./posts.css"; // Import the external CSS file

export const Posts = () => {
    const [data, setData] = useState([]);
    const getPostData = async () => {
        const res = await GetPost();
        setData(res.data);  // Save all post objects to state
        console.log(res);
    };

    useEffect(() => {
        getPostData();
    }, [])

    //Handle delete post
    
    const handleDeletePost = async (id) => {
        try {
            const res = await DeletePost(id)
            console.log(res);
            if (res.status === 200) {
                const newUpdatesPosts = data.filter((curPost) => {
                    return curPost.id !== id;  //curID s na match hone walw deleted
                })
                setData(newUpdatesPosts);
            }else{
                console.log("failed to delet ethe post " + Response.status);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (<>
   
        <div className="posts-container">
             
            <h1 className="posts-heading">📚 Posts</h1>
            <section>
             <Form data={setData} setData={setData}> <h1>Hello form</h1></Form>
             </section>
            <div className="card-grid">
                {data.map((curElem) => {
                    const { id, title, body } = curElem;
                    return (
                        <div key={id} className="card">
                            <p className="card-id">Card ID: {id}</p>
                            <h2 className="card-title">Title:{title}</h2>
                            <p className="card-body">{body}</p>

                            <div className="card-buttons">
                                <button className="btn update-btn">UPDATE</button>
                                <button className="btn delete-btn" onClick={() => handleDeletePost(id)}>DELETE</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    </>)
}