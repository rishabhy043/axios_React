import axios from "axios";
import { useEffect } from "react";
// import { PiCloudFogBold } from "react-icons/pi";npm install react-icons@latest

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