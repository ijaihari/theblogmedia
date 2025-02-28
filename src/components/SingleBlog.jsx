import { useParams } from "react-router-dom";
import { blogs } from "../data/blog";
import { useNavigate } from "react-router-dom";
function SingleBlog() {
    const navigate = useNavigate()
    const { blogId } = useParams();
    const SelectedBlog = blogs.find((b) => b.id === parseInt(blogId));

    return (
        <div className="singleblog">
            <section className="singleblog-container">
                <button className="edit"><i class="fa-solid fa-pen"></i></button>
                <h1 className="bs-title">{SelectedBlog.title}</h1>
                <p className="pub-date bs-date">Published on: {SelectedBlog.date} <span className="tag"> {`#${SelectedBlog.tag}`}</span></p>
                <p className="bs-content">{SelectedBlog.content}</p>
                <button className="backto" onClick={()=> navigate('/blogs')}> <i class="fa-solid fa-circle-arrow-left"></i> Back to blogs</button>
            </section>

        </div>
    );
}

export default SingleBlog;