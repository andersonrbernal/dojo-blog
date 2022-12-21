const Error = (props) => {
    return (
        <div className="error-container">
            <h2 className="error-title">Ooops, something went wrong. Try again later.</h2>
            <p className="error-message"> { props.message }</p>
        </div>
    );
}
 
export default Error;