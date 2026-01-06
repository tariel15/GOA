// Layout კომპონენტი იყენებს props.children-ს
// children არის მთავარი კონტენტი, რომელიც განთავსდება header-სა და footer-ს შორის
function Layout({ children }) {
    return (
        <div className="layout">
            <header>
                <h1>My Website</h1>
            </header>

            <main>
                {children}
            </main>

            <footer>
                <p> 2026 My Website</p>
            </footer>
        </div>
    );
}

export default Layout;
