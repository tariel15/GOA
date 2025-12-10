//3) შექმენით MyInfo კომპონენტი რომელიც აბრუნებს <p>მე ვსწავლობ React-ს</p>  App-ში გამოიტანეთ <MyInfo /> ორჯერ და ნახეთ როგორ შეიძლება ერთი კომპონენტის მრავალჯერ გამოყენება
function MyInfo() {
    return <p>მე ვსწავლობ React-ს</p>;
}
export default function App() {
    return (
        <div>
            <MyInfo />
            <MyInfo />   {/* იგივე კომპონენტის მეორედ გამოძახება */}
        </div>
    );
}
