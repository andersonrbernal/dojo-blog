const Blog = (props) => {
    return (
        <article>
            <h2>{props.title}</h2>
            <p>Written by {props.author}</p>
            <div>{props.body}</div>
        </article>
    );
}

export default Blog;