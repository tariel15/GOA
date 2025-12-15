//12) App.jsx-ში გამოიძახეთ კომპონენტები  იმპორტი გაუკეთეთ Header, Card, Info, Footer  დააბრუნეთ ისინი JSX-ში თანმიმდევრობით  გამოიყენეთ Fragment <> </>
import Header from "./components/Header";
import Card from "./components/Card";
import Info from "./components/Info";
import Footer from "./components/Footer";

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
