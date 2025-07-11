import axios from "axios";

const api = axios.create({ // creates instanse of axios
    baseURL:"https://jsonplaceholder.typicode.com"  // baseURL --> which always sames f4all http requests 
});

//get Method

export const GetPost =(() =>{
    return api.get("/posts")
})

export const DeletePost = (id) => {
    return api.delete(`/posts/${id}`)
}

console.log(GetPost);