import { MovieDataContext } from "../context/MovieDataContext";
<<<<<<< HEAD
import { useEffect, useState, useContext, useRef } from "react";


export const useFetch = (url) => {
=======
import { useEffect, useState, useContext } from "react";


export const useFetch = (query, url) => {
>>>>>>> master
    const {movieData, setMovieData} = useContext(MovieDataContext);
    const [status, setStatus] = useState("idle");
    const cache = useRef({});

    useEffect(() => {
        if (!url) return;

        const fetchData = async () => {
            try {
                setStatus("fetching");
                if(cache.current[url]) {
                    const data = cache.current[url];
                    setMovieData(data);
                    setStatus("fetched")
                } else{
                    const response = await fetch(`${url}`);
                    if(!response.ok) {
                        throw Error("Not Found")
                    }
                    const data = await response.json();
                    setMovieData(data);
                    setStatus("fetched")
                }
            } catch (err) {
                console.log(err.message);
            }
        }

        fetchData();
    }, [url]);
    return { movieData, status };
}

