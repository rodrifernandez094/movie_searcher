import React from 'react';
import { Link } from "react-router-dom"
import defaultMoviePoster from "../assets/movie-poster.png"


const MovieCard = (props) => {
    const {poster_path, title, vote_average, release_date, id} = props.movieData;
    const config = JSON.parse(localStorage.getItem("config"));
    const imgUrl = `${config.images.secure_base_url}${config.images.poster_sizes[3]}/${poster_path}`
    return ( 
        <div className="card bg-transparent border-0">
            <Link  to={`/movie/${id}`} >
            <div className="movie-card position-relative">
                
                <div className="card-img">
                    <img src={poster_path ? `${imgUrl}` : `${defaultMoviePoster}`} alt={`${title}`} className="rounded-top" />
                </div>
                <p className="text-start text-light mt-2">{title} </p>
                <div className="d-flex justify-content-between">
                    <p className="text-start text-muted mt-1">{release_date}</p>
                    <div className="score-badge">
                        <small className="badge bg-info text-light">{vote_average}</small>
                    </div>
                </div>
            </div>
            </Link>
        </div>
     );
}
 
export default MovieCard;