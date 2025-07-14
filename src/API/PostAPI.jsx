import axios from "axios";

const api = axios.create({ // creates instanse of axios
    baseURL: "https://jsonplaceholder.typicode.com"  // baseURL --> which always sames f4all http requests 
});

//get Method

export const GetPost = (() => {
    return api.get("/posts")
})

//Delete post
export const DeletePost = (id) => {
    return api.delete(`/posts/${id}`)
}

//post method
export const PostData = (post) => {
    return api.post("./posts", post)
};

console.log(GetPost);