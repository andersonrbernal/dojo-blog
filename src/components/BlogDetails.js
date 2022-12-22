import { useParams } from "react-router-dom";
import useFetch from '../hooks/useFetch';

import Loader from '../components/partials/Loader';
import Error from '../components/partials/Error';
import Blog from '../components/Blog';

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);

    return (
        <div className="blog-details">
            { isPending && <Loader />}
            { error && <Error message={ error } />}
            { blog && <Blog id={ blog.id } title={ blog.title } author={ blog.author } body={ blog.body }/>}
        </div>
    );
}
 
export default BlogDetails;