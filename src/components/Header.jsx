function Header() {
    return (
        <>
            <header className="header">
                <nav className="navbar">
                    <h1 className="logo">TheBlog Media</h1>
                    <ul className="navbar__tabs">
                        <li>Home</li>
                        <li>Blogs</li>
                        <li>Write</li>
                        <li>Community</li>
                    </ul>
                    <section className="in-out">
                        <button>Sign in</button>
                        <button>Sign up</button>
                    </section>
                </nav>
            </header>
        </>
    );
}

export default Header;