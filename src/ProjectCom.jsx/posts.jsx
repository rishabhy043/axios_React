import { useEffect, useState } from "react";
import { GetPost } from "../API/PostAPI";

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
    return (<>
        <div className="secction-post">
            <ul>
                {
                    data.map((curElem) => {
                        const { id, body, title } = curElem;
                        return (
                            <li key={id}>
                                <p>Card ID : {id}</p>
                                <p>Title : {title}</p>
                                <p>About : {body}</p>
                                <button>UPDATE</button>
                                <button>DELETE</button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    </>)
}