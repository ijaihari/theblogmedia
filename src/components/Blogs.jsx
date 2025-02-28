import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Blogs() {
    const navigate = useNavigate()
    const blogs = useSelector((state) => state.blog.blogs);
    return (
        <div className="blog-container">
            <section className="category">
                <h2 className="cat-title">Category</h2>
                <ul>
                    <ul>
                        <li class="cat-list"><button onclick="">All</button></li>
                        <li class="cat-list"><button onclick="">Technology</button></li>
                        <li class="cat-list"><button onclick="">Health & Wellness</button></li>
                        <li class="cat-list"><button onclick="">Finance</button></li>
                        <li class="cat-list"><button onclick="">Education</button></li>
                        <li class="cat-list"><button onclick="">Science</button></li>
                        <li class="cat-list"><button onclick="">Lifestyle</button></li>
                        <li class="cat-list"><button onclick="">Business & Startups</button></li>
                        <li class="cat-list"><button onclick="">Entertainment</button></li>
                        <li class="cat-list"><button onclick="">Sports</button></li>
                        <li class="cat-list"><button onclick="">Environment</button></li>
                    </ul>
                </ul>
            </section>
            <section>
                {
                    blogs.map((blg, index) => <section key={index} className="blog-block">
                        <h2 className="b-title">{blg.title}</h2>
                        <p className="pub-date">Published date: {blg.date}</p>
                        <p className="b-summary">{blg.summary}</p>
                        <span className="tag">{`#${blg.tag}`}</span><br />
                        <button className="opento" onClick={() => navigate(`/blogs/${blg.id}`)}>Read <i class="fa-solid fa-arrow-up-right-from-square"></i></button>
                    </section>)
                }
            </section>
        </div>
    );
}

export default Blogs;