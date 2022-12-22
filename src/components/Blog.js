import { useHistory } from "react-router-dom";

const Blog = (props) => {
    const history = useHistory();

    function handleClick() {

        const opt = {
            method: 'delete'
        };

        fetch('http://localhost:8000/blogs/' + props.id, opt)
            .then(res => {
                history.push('/');
            })
    }   

    return (
        <article>
            <h2>{props.title}</h2>
            <p>Written by {props.author}</p>
            <div>{props.body}</div>
            <button onClick={() => handleClick(props.id)}>Delete</button>
        </article>
    );
}

export default Blog;