import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Blogs() {
    const navigate = useNavigate();
    const blogs = useSelector((state) => state.blog.blogs);

    const [selectedCat, setSelectedCat] = useState(blogs);
    const [selectedCategory, setSelectedCategory] = useState("All"); // Track selected category

    function CategoryFilter(cattag) {
        setSelectedCategory(cattag); // Update active category state

        if (cattag === "All") {
            setSelectedCat(blogs);
        } else {
            const filteredBlogs = blogs.filter((sblg) => sblg.tag === cattag);
            setSelectedCat(filteredBlogs);
        }
    }

    const categories = [
        "All", "Technology", "Health & Wellness", "Finance", "Education", "Science",
        "Lifestyle", "Business & Startups", "Entertainment", "Sports", "Environment"
    ];

    return (
        <div className="blog-container">
            <section className="category">
                <h2 className="cat-title">Category</h2>
                <ul className="category-list">
                    {categories.map((category) => (
                        <li key={category} className="cat-list">
                            <button 
                                onClick={() => CategoryFilter(category)}
                                className={selectedCategory === category ? "active-category" : "cattag-btn"}
                            >
                                {category}
                            </button>
                        </li>
                    ))}
                </ul>
            </section>

            <section>
                {selectedCat.length > 0 ? (
                    selectedCat.map((blg) => (
                        <section key={blg.id} className="blog-block">
                            <h2 className="b-title">{blg.title}</h2>
                            <p className="pub-date">Published date: {blg.date}</p>
                            <p className="b-summary">{blg.summary}</p>
                            <span className="tag">{`#${blg.tag}`}</span><br />
                            <button className="opento" onClick={() => navigate(`/blogs/${blg.id}`)}>
                                Read <i className="fa-solid fa-arrow-up-right-from-square"></i>
                            </button>
                        </section>
                    ))
                ) : (
                    <p>No blogs found for this category.</p>
                )}
            </section>
        </div>
    );
}

export default Blogs;
