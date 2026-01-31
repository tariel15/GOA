//12) App.jsx-ში გამოიძახეთ კომპონენტები  იმპორტი გაუკეთეთ Header, Card, Info, Footer  დააბრუნეთ ისინი JSX-ში თანმიმდევრობით  გამოიყენეთ Fragment <> </>
import Header from "./Header";
import Card from "./Card";
import Info from "./Info";
import Footer from "./Footer";

function App() {
    return (
        <>
            <Header />
            <Card />
            <Info />
            <Footer />
        </>
    );
}

export default App;
