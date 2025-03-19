import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate()
    const [Open, setOpen] = useState(false);
    function OpenClose() {
        setOpen(!Open)
    }

    return (
        <div className="fixed">
            <header className="header">
                <nav className="navbar">
                    <h1 className="word-logo"><Link to="/theblogmedia">TheBlog Media</Link></h1>
                    <button className="menu" onClick={() => { OpenClose() }}><i class="fa-solid fa-bars"></i></button>
                    <ul className={Open ? "navtabs active-bar" : "navtabs close-bar"}>
                        <li><Link to="/theblogmedia">Home</Link></li>
                        <li><Link to="/blogs">Blogs</Link></li>
                        <li><Link to="/write">Write</Link></li>
                        <li><Link to="/community">Community</Link></li>
                    </ul>

                    <section className={Open ? "in-out active-in-out" : "in-out close-bar"}>
                        <button onClick={() => { navigate('/signin') }}>Sign in <i class="fa-solid fa-arrow-right-to-bracket"></i></button>
                        <button onClick={() => { navigate('/signout') }}>Sign up <i class="fa-solid fa-user-plus"></i></button>
                    </section>

                </nav>
            </header>
        </div >
    );
}
export default Header;