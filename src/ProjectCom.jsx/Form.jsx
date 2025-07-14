/* eslint-disable no-constant-condition */
import { useState } from "react";
import { PostData } from "../API/PostAPI";

export const Form = ({ data, setData }) => {
    const [addData, setAddData] = useState({
        title: "", body: ""
    });

    const addPostData = async () => {
        // eslint-disable-next-line no-undef
        const res = await PostData(addData);
        console.log(res);

        if ((res.status === 201)) {
            setData([...data, res.data])
            setAddData({ title: "", body: "" })
        }
    }

    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setAddData((prev) => {
            console.log(prev);
            return {
                ...prev, [name]: value,
            }
        })
    }
    const handleFormSubmit = (e) => {
        e.preventDefault();
        addPostData();
    }
    return (<>
        <form className="posts-container" onSubmit={handleFormSubmit}>
            <div >
                <label htmlFor="title"></label>
                <input type="text"
                    autoComplete="off"
                    id="title"
                    name="title"
                    placeholder="Add title"
                    value={addData.title}
                    onChange={handleInputChange}
                />
            </div>

            <div>
                <label htmlFor="body"></label>
                <input type="text"
                    autoComplete="off"
                    placeholder="Add post"
                    name="body"
                    value={addData.body}
                    onChange={handleInputChange}
                />
            </div>
            <button type="submit">Add</button>
        </form>
    </>);
};