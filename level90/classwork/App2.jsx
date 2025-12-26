//3) შექმენით fiftyFifty ცვლადი math.random() და შედარების ოპერატორით, შემდეგ დაარენდერეთ პარაგრაფი მე მოვიგე თუ ამოვიდა true ხოლო სხვა შემთხვევაში მე მაინც მოვიგე რადგან ვისწავლე react
function App() {
    // Math.random() აბრუნებს რიცხვს 0–დან 1-მდე
    // თუ მეტია 0.5-ზე → true, სხვა შემთხვევაში → false
    const fiftyFifty = Math.random() > 0.5;

    return (
        <div>
            {
                fiftyFifty
                    ? <p>მე მოვიგე</p>
                    : <p>მე მაინც მოვიგე რადგან ვისწავლე React</p>
            }
        </div>
    );
}

export default App;
