import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import * as api from "../../apiCalls";
import Spinner from "../Spinner";
import Navbar from "../navbar/Navbar";
import Carousel from "../Carousel";
import "./movieInfo.css";

const Movie = () => {
  const { id } = useParams();
  const { data, status } = useQuery(["movie", id], () => api.getMovie(id));
  const config = JSON.parse(localStorage.getItem("config"));
  const posterUrl = `${config.images.secure_base_url}${config.images.poster_sizes[3]}/`;
  const backdropsUrl = `${config.images.secure_base_url}${config.images.backdrop_sizes[2]}`;

  return (
    <>
      <header>
        <Navbar />
      </header>
      {status === "loading" && <Spinner />}
      {status === "success" && (
        <div className="container text-light">
          <div className="movie-info profile d-flex mt-5 py-4">
            <div className="movie-poster">
              <img
                src={`${posterUrl}${data?.poster_path}`}
                alt={`${data?.original_title}`}
              />
            </div>
            <div className="text-start px-4 my-auto">
              <h1> {data?.original_title} </h1>
              <div className="d-flex justify-content-between text-muted w-50 meta">
                {data?.genres[0] && <p>{data?.genres[0]?.name}</p>}
                <p>{data?.release_date}</p>
                <p>
                  {" "}
                  <span className="text-info">TMDB</span> {data?.vote_average}
                </p>
              </div>
              <p> {data?.overview} </p>
              <div className="credits d-flex w-75 justify-content-between">
                <div className="director d-flex flex-column">
                  <p>Director</p>
                  {data.credits?.crew[0] && (
                    <p className="text-muted">{data.credits?.crew[0]?.name}</p>
                  )}
                </div>
                <div className="cast">
                  <p>Actors</p>
                  {data.credits?.cast[0] && (
                    <p className="text-muted">
                      {data.credits?.cast[0]?.name},{" "}
                      {data.credits?.cast[1]?.name},{" "}
                      {data.credits?.cast[2]?.name}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="my-4 py-4">
            <p className="text-center fs-3 my-2">Media</p>
            <Carousel imgUrl={backdropsUrl} images={data.images?.backdrops} />
          </div>
        </div>
      )}
    </>
  );
};

export default Movie;
