//5) შექმენით ImagesBlock კომპონენტი რომელიც აბრუნებს <div> და შიგნით 2 <img> ტეგს ნებისმიერი სურათის ლინკით  App-ში გამოიტანეთ <ImagesBlock /> და ნახეთ როგორ მუშაობს JSX-ში img ტეგი
function ImagesBlock() {
    return (
        <div>
            <img
                src="https://via.placeholder.com/150"
                alt="Example 1"
            />
            <img
                src="https://via.placeholder.com/200"
                alt="Example 2"
            />
        </div>
    );
}
export default function App() {
    return (
        <div>
            <ImagesBlock />
        </div>
    );
}
