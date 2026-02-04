//7) note უნდა ინახებოდეს state-ში როგორც ობიექტი (id, title) და დაემატოს სიას
import { useState } from "react";

function Dashboard() {
    const [title, setTitle] = useState("");
    const [notes, setNotes] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title.trim()) return;

        const newNote = {
            id: Date.now(),
            title: title,
        };

        setNotes([...notes, newNote]);
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

            {notes.length > 0 && (
                <ul>
                    {notes.map((note) => (
                        <li key={note.id}>{note.title}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Dashboard;
