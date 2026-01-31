//1) წინაზე შესრულბულ useEffect-ის დავალება შეცვალეთ და .then (promsie-მეთოდის) ნაცვლად გამოიყენეთ async/await სინტაქსი (ასინქონიაზცია) მაგრამ გაითვალისწინეთ ის რომ არ შეიძლება useEffect-ზე გადაცემული callback ფუნქცია არ შეიძლება იყოს ასქრიონული, ამიტომ გადაეცით სინქრონული ფუნქცია რომელიც ასინქრონულ ფუქნციას გამოიძახებს ან პირდაპირ შექმენით ასქრიონული ფუნქცია useEffect-ში არსებულ arrow ფუქნციაში და მერე იქვე გამოიძახეთ
import { useEffect, useState } from "react";

function App() {
    const [dataType, setDataType] = useState("users");
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://jsonplaceholder.typicode.com/${dataType}`
                );
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [dataType]);

    return (
        <div>
            <button onClick={() => setDataType("users")}>Users</button>
            <button onClick={() => setDataType("posts")}>Posts</button>
            <button onClick={() => setDataType("comments")}>Comments</button>

            <ul>
                {data.map((item) => (
                    <li key={item.id}>
                        {item.name || item.title || item.body}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
