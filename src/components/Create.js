import { lazy, useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();

        setIsPending(true);

        const blog = { title, body, author };
        const opt = {
            method: 'post',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(blog)
        }
        
        fetch('http://localhost:8000/blogs', opt)
            .then(res => {
                if (res.ok) { history.push('/') }
                setIsPending(false);
            })
            .catch(err => {
                console.error(err);
                setIsPending(false);
            });
    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Blog title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <label htmlFor="title">Blog body:</label>
                <textarea
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    required
                ></textarea>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                >
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                    <option value="luigi">Luigi</option>
                </select>
                { !isPending && <button>Add Blog</button> }
                { isPending && <button>Submiting...</button> }
            </form>
        </div>
    );
}

export default Create;