import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "../Component/UI/Card"

// import { PiCloudFogBold } from "react-icons/pi";npm install react-icons@latest

/*
export const Movie = () => {

    const API = "https://www.omdbapi.com/?i=tt3896198&apikey=1c12799f&s=titanic&page=1";
    //    const res = await axios.get(API);
    //    console.log(res);

    const getMovieData = async () => {
        try {
            const res = await axios.get(API);
            // console.log(res.data.search);
            console.log(res);
            // console.log(res.data.search);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getMovieData();
    }, [])

    return (<>
        <h1>Movie</h1>
    </>)
}
*/

//------------2nd  STEP TO STORE THE DATA AFTER RETRIVEING---------------


export const Movie = () => {
    const [Data, setData] = useState([]);

    const API = "https://www.omdbapi.com/?i=tt3896198&apiskey=1c12799f&s=titanic&page=1";
    //    const res = await axios.get(API);
    //    console.log(res);

    const getMovieData = async () => {
        try {
            const res = await axios.get(API);
            // console.log(res.data.search);
            console.log(res);
            setData(res.data.search)     //storing the data
        } catch (error) {
            console.log("This is Error Message");
            console.log(error);
            console.log(error.response.status);
        }
    }

    useEffect(() => {
        getMovieData();
    }, [])

    return (<>
        <ul className="ontainer grid grid-four--cols">
            {/* <h1>HELLO YADAV G</h1> */}
            {Data.map((curElem) => {
                return <Card key={curElem.imdbID} movieData={curElem} />
            })
            }
        </ul>
    </>)
}