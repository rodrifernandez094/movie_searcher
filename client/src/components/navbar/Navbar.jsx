import React from 'react';
import SearchBar from './SearchBar';


const Navbar = () => {
    return ( 
        <nav className="navbar navbar-expand-md navbar-dark fixed-top">
            <div className="container-fluid">
                <a href="/" className="navbar-brand w-25">Crossfire</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse w-75" id="navbarCollapse">
                    <SearchBar />
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;