import { useSelector } from "react-redux";
function Blogs() {
    const blogs = useSelector((state) => state.blog.blogs)
    return (
        <div>
            <h1>Blogs</h1>
            <section>
                {
                    blogs.map(blg => <section className="article-block">
                        <h2>{blg.title}</h2>
                        <p>Published date: {blg.date}</p>
                        <p>{blg.summary}</p>
                        <p>{blg.content}</p>
                        <p>#{blg.tag}</p>
                        <button>Read full article</button>
                    </section>)
                }
            </section>
        </div>
    );
}

export default Blogs;