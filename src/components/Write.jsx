import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBlog } from "../store/BlogSlice";

function Write() {
    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("");

    const dispatch = useDispatch();

    function handleSubmit(event) {
        event.preventDefault();
        if (!title || !summary || !content || !category) {
            alert("Please fill in all fields before submitting!");
            return;
        }

        const today = new Date();
        const formattedDate = today.toLocaleDateString("en-US", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        });

        const newBlog = {
            id: Math.floor(Math.random() * 1000000),
            date: formattedDate,
            title,
            summary,
            content,
            tag: category,
        };

        dispatch(addBlog(newBlog));
        setTitle("");
        setSummary("");
        setContent("");
        setCategory("");
    }
function handlesubmitBlog(){
   
}
    return (
        <div className="write-container">
            <h1 className="write-blog">Write a new blog</h1>
            <section className="write">
                <form className="form" onSubmit={handleSubmit}>
                    <label htmlFor="title">Title </label><br />
                    <input
                        type="text"
                        id="title"
                        className="w-title" placeholder="Type blog title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    /><br />

                    <label htmlFor="summary">Summary</label><br />
                    <input
                        type="text"
                        id="summary"
                        className="w-summary"
                        value={summary} placeholder="Type blog summary"
                        onChange={(e) => setSummary(e.target.value)}
                        required
                    /><br />

                    <label htmlFor="dropdown">Category </label><br />
                    <select
                        id="dropdown"
                        name="options"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    >
                        <option value="">Select a Category</option>
                        <option value="Technology">Technology</option>
                        <option value="Health & Wellness">Health & Wellness</option>
                        <option value="Finance">Finance</option>
                        <option value="Education">Education</option>
                        <option value="Science">Science</option>
                        <option value="Lifestyle">Lifestyle</option>
                        <option value="Business-startups">Business & Startups</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Sports">Sports</option>
                        <option value="Environment">Environment</option>
                    </select> <br />

                    <label htmlFor="content">Content</label><br />
                    <textarea
                        name="content"
                        id="content"
                        value={content} placeholder="Type your blog content"
                        onChange={(e) => setContent(e.target.value)}
                        required
                    ></textarea><br />

                    <button type="submit" onClick={()=>{handlesubmitBlog}}>Submit Blog</button>
                </form>
            </section>
        </div>
    );
}

export default Write;
