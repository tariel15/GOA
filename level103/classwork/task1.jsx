//1) შექმენით 3 კომპონენტი, პირველი კომპონენტი უბრალოდ უნდა დარენდრეს App კომპონენტის მიერ, რომელსაც ექნება თავისი name მდგომარეობა და გამოიტანს კიდეც h2-ის საშვალებით, ეს name მდგოამრეობა უნდა გამოიტანოს კომპონენტ N3-მაც. პრობლემაა ისაა რომ ეს კომპონენტები შემდეგი სტრუქტურით არიან დალაგებული: 
//App ->
//   Component1 ->
//      Component2 ->
//        Component3
//ეს დავალება შეასრულეთ 2 გზით ჯერ props drilling შემდეგ კი context კაუჭის გამოყენებით. ახსენით თუ რა დანიშნულებ აქვს contenxt კაუჭას და როგორ მუშაობს
import { useState } from "react";
import Component1 from "./Component1";

const App = () => {
    const [name, setName] = useState("React Student");

    return (
        <div>
            <h2>App Component: {name}</h2>
            <Component1 name={name} />
        </div>
    );
};

export default App;
