import BlogList from './BlogList';
import Loader from './partials/Loader';
import Error from "./partials/Error";
import useFetch from "../hooks/useFetch";

const Home = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">
            { error && <Error message={ error } /> }
            { isPending && <Loader /> }
            { blogs && <BlogList blogs={blogs} title="All Blogs" /> }
        </div>
    );
}

export default Home;