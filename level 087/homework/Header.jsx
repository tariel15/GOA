//11) შექმენით components ფოლდერი  შექმენით 4 კომპონენტი:  Header.jsx, Card.jsx, Info.jsx, Footer.jsx  ყველა კომპონენტი სწორად დააექსპორტეთ
import Card from "./Card.jsx"
import Footer from "./Footer.jsx"
import Header from "./Header.jsx"
import Info from "./Info.jsx"


function App() {
    return (
        <>
            <Header />
            <Footer />
            <Info />
            <Card />
        </>
    )
}

export default App