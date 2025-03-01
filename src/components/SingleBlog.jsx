import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function SingleBlog() {
    const navigate = useNavigate();
    const { blogId } = useParams();
    const blogs = useSelector((state) => state.blog.blogs); 
    const SelectedBlog = blogs.find((b) => b.id === Number(blogId));
    if (!SelectedBlog) {
        return (
            <div className="error-container">
                <h2>Blog Not Found</h2>
                <p>The blog you are looking for does not exist.</p>
                <button className="backto" onClick={() => navigate('/blogs')}>
                    <i className="fa-solid fa-circle-arrow-left"></i> Back to blogs
                </button>
            </div>
        );
    }

    return (
        <div className="singleblog">
            <section className="singleblog-container">
                <button className="edit" onClick={() => navigate(`/blogs/edit/${SelectedBlog.id}`)}>
                    <i className="fa-solid fa-pen"></i>
                </button>
                <h1 className="bs-title">{SelectedBlog.title}</h1>
                <p className="pub-date bs-date">
                    Published on: {SelectedBlog.date} <span className="tag"> {`#${SelectedBlog.tag}`}</span>
                </p>
                <p className="bs-content">{SelectedBlog.content}</p>
                <button className="backto" onClick={() => navigate('/blogs')}>
                    <i className="fa-solid fa-circle-arrow-left"></i> Back to blogs
                </button>
            </section>
        </div>
    );
}

export default SingleBlog;
