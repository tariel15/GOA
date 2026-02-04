//6) შექმენით Dashboard კომპონენტი, სადაც იქნება ფორმა ახალი note-ის დასამატებლად (title input + button). ფორმის დადასტურებისას უნდა გამოიძახოთ handler ფუნქცია
import { useState } from "react";

function Dashboard() {
    const [title, setTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title.trim()) return;

        console.log("დამატებული note:", title);
        setTitle("");
    };

    return (
        <div>
            <h2>Dashboard</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="შეიყვანეთ note-ის სათაური"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button type="submit">Add Note</button>
            </form>
        </div>
    );
}

export default Dashboard;
