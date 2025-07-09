import { useEffect } from "react";
import { GetPost } from "../API/PostAPI";

export const Posts = () => {
    const getPostData = async () => {
        const res = await GetPost();
        //  setPosts(res.data);  // Save all post objects to state
        console.log(res);
    };

    useEffect(() => {
        getPostData();
    }, [])
    return (<>
        <h1>Hello kse ho ?</h1>
    </>)
}