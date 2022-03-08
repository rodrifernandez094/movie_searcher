
export const getMovies = async (page, setPages) => {
    const query = localStorage.getItem("query");
    const response = await fetch(`/movies/${query}&page=${page}`);
    if(!response.ok) {
        throw Error("Not found");
    }
    const data = await response.json();
    if(data.errors) {
        throw Error("Not found");
    }
    return data;
}

export const getMovie = async (id) => {
    const response = await fetch(`/movie/${id}&append_to_response=credits,images`);
    return response.json();
}

export const getConfig = async () => {
    const response = await fetch("/config");
    return response.json();
}

export const getPopularMovies = async () => {
    const response = await fetch("/discover/movie?sort_by=popularity.desc");
    return response.json();
}