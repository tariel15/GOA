//2) აიღეთ 3 ღილაკი: Users, Posts, Comments. თითეულზე დაჭერისას შესაბამისი ტექსტით უნდა განახლდეს აქამდე შექმნილი dataType მდგომარეობის მნიშვნლობა setter ფუნქციით (onClick-ის მოვლენის დროს გამოიძახებთ arrow ფუნქციის საშვალებით) შესაბამისად: users, posts, comments. თქვენ უნდა გამოიყენოთ useEffect კაუჭი რომ მონაცემების წამოღება api-დან მოხდეს მხოლოდ dataType მდგომარეობის შეცვლისას, მონაცემები პრიდაპირ დაარენდერეთ
import { useEffect, useState } from "react";

function App() {
    const [dataType, setDataType] = useState("users");
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${dataType}`)
            .then((response) => response.json())
            .then((result) => setData(result));
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
