import React, {useState} from 'react';
import { useQuery } from 'react-query';
import {getMovies} from "../../apiCalls";
import MovieCard from '../MovieCard';
import Navbar from "../navbar/Navbar"
import Spinner from "../Spinner";
import Error from "../Error";

const MovieList = () => {
    const [page, setPages] = useState(1);
    const {data: movies, status, isError, error, isPreviousData} = 
    useQuery(['movies', page], () => getMovies(page), {keepPreviousData: true, retry:false} );

    if(isError) {
        return <Error error={error}/>
    }

    return (
        <>
        <header>
            <Navbar />
        </header> 
        <div className="justify-content-center container d-flex flex-wrap py-5 mt-5">
            {status === "loading" && <Spinner /> }
            { status === "success" && movies.results.map( data => <MovieCard key={data.id} movieData={data} /> )}
        </div>
        {status === "success" && movies ? 
        <div className="d-flex mb-3">
            <button onClick={() => setPages(oldValue => Math.max(oldValue - 1, 1))} 
            className="btn btn-sm btn-info m-auto" disabled={page === 1 && true}>Prev Page</button>
            <span className="text-light">{page}</span>
            <button onClick={() => !isPreviousData && setPages(oldValue => oldValue + 1)} 
            className="btn btn-sm btn-info m-auto" disabled={page === movies.total_pages && true}>Next Page</button>
        </div>
         : <span></span>}
        </>
     );
}
 
export default MovieList;