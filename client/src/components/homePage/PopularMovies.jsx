import React from 'react';
import { useQuery } from "react-query";
import {getPopularMovies} from "../../apiCalls";
import MovieCard from '../MovieCard';

const PopularMovies = () => {
    const {data:movies, status, isError} = useQuery('popularMovies', getPopularMovies);
    if (isError) {
        <span></span>
    }
    return ( 
        <div className="py-5">
            <h2 className="text-center mb-5 text-light">What's popular</h2>
            <div className="container">
                <div className="d-flex flex-wrap justify-content-center movies-container">
                  {status === "success" && movies.results
                  .filter((data, index) => index < 10).map(data => <MovieCard key={data.id} movieData={data}/>)}
                </div>
            </div>
        </div>
     )
}
 
export default PopularMovies;