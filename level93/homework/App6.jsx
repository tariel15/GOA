//9) შექმენით Layout კომპონენტი props.children-ის გამოყენებით. Layout-ში დაამატეთ header და footer. App კომპონენტში Layout-ის შიგნით განათავსეთ მთავარი კონტენტი (მაგ: სათაური და ტექსტი).
import Layout from "./Layout";

function App() {
    return (
        <Layout>
            <h2>მთავარი გვერდი</h2>
            <p>ეს არის მთავარი კონტენტი, რომელიც Layout კომპონენტშია მოთავსებული</p>
        </Layout>
    );
}

export default App;
