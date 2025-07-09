import { GetPost } from "./API/PostAPI";
import { useEffect } from "react";

const App = () =>{
  console.log(GetPost());

  const getPostData = async () =>{
    const res = await GetPost();
    console.log(res);
  };

  useEffect(() =>{
    getPostData();
  } ,[])

  return(<>
  <h1>Hello kse ho ?</h1></>)
}

export default App;