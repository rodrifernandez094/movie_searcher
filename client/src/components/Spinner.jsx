// import { useState } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const Spinner = () => {

    return(
      <div className="spinner">
        <Loader
        type="ThreeDots"
        color="#f3f3f3"
        height={100}
        width={100}
        
        />
      </div>
    )
}

export default Spinner;