// /8) დარენდერეთ ყველა note ცხრილის სახით (id, title, edit, delete)
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

    const handleDelete = (id) => {
        const filteredNotes = notes.filter((note) => note.id !== id);
        setNotes(filteredNotes);
    };

    const handleEdit = (id) => {
        const noteToEdit = notes.find((note) => note.id === id);
        const updatedTitle = prompt("შეიყვანეთ ახალი სათაური", noteToEdit.title);

        if (updatedTitle && updatedTitle.trim()) {
            const updatedNotes = notes.map((note) =>
                note.id === id ? { ...note, title: updatedTitle } : note
            );
            setNotes(updatedNotes);
        }
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
                <table border="1" cellPadding="8">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {notes.map((note) => (
                            <tr key={note.id}>
                                <td>{note.id}</td>
                                <td>{note.title}</td>
                                <td>
                                    <button onClick={() => handleEdit(note.id)}>Edit</button>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(note.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default Dashboard;
