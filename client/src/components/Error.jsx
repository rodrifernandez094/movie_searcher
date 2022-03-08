const Error = (props) => {
    const error = props.error;
    return ( 
        <div className="vh-100 d-flex flex-column align-items-center justify-content-center">
            <h1 className="text-light text-center mb-4">{error.message}</h1>
            <button className="btn btn-info w-25"><a className="text-light" href="/">Go Back</a></button>
        </div>
     );
}
 
export default Error;