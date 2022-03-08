import React, {useState} from "react";
import {useHistory} from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const history = useHistory()

  const handleInput = (e) => {
    const inputQuery = e.target.value;
    setQuery(inputQuery);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('query' ,query);
    history.push(`/movies:${query}`)
  }

  return ( 
      <>
        <form action="/" method="POST" className="d-flex ms-auto mt-2">
          <input type="text" name="search" placeholder="Search for a movie" value={query} onChange={handleInput} className="form-control me-2" />
          <input type="submit" value="Search" onClick={handleSubmit} className="btn btn-outline-info" />
        </form>
      </>
    );
}
 
export default SearchBar;