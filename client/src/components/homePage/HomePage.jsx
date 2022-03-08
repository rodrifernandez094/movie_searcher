import React, {useEffect} from 'react';
import Navbar from '../navbar/Navbar';
import PopularMovies from './PopularMovies';

const HomePage = () => {
    useEffect(() => {
        fetch("/config")
        .then(res => res.json())
        .then(data => localStorage.setItem("config", JSON.stringify(data)))
        .catch(err => console.log(err));
    }, []);


    return ( 
        <>
            <header>
                <Navbar />
            </header>
            <main className="">
                <section className="position-relative text-center ">
                    <div className="page-poster"></div>
                    <div className="row py-5 banner">
                        <div className="title col-lg-6 col-md-8 mx-auto">
                            <h1 className="text-uppercase text-light">the best way to find the movie you're looking for</h1>
                            <h4 className="lead text-uppercase text-light">millions of movies, actors, and more.</h4>
                            <p className="text-capitalize text-light">powered by <a href="https://www.themoviedb.org/" className="text-decoration-none">the movie database</a></p>
                        </div>
                    </div>
                </section>
                <PopularMovies />
            </main>
        </>
     );
}
 
export default HomePage;