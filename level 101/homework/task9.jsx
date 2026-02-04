//9) თითოეულ note-ს უნდა ჰქონდეს Edit ღილაკი, რომელზე დაჭერისას title გადაიქცევა input-ად და შესაძლებელი იქნება მისი შეცვლა
import { useState } from "react";

function Dashboard() {
    const [title, setTitle] = useState("");
    const [notes, setNotes] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [editedTitle, setEditedTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;

        const newNote = {
            id: Date.now(),
            title,
        };

        setNotes([...notes, newNote]);
        setTitle("");
    };

    const handleEditClick = (note) => {
        setEditingId(note.id);
        setEditedTitle(note.title);
    };

    const handleSave = (id) => {
        if (!editedTitle.trim()) return;

        const updatedNotes = notes.map((note) =>
            note.id === id ? { ...note, title: editedTitle } : note
        );

        setNotes(updatedNotes);
        setEditingId(null);
        setEditedTitle("");
    };

    const handleCancel = () => {
        setEditingId(null);
        setEditedTitle("");
    };

    const handleDelete = (id) => {
        setNotes(notes.filter((note) => note.id !== id));
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

                                <td>
                                    {editingId === note.id ? (
                                        <input
                                            type="text"
                                            value={editedTitle}
                                            onChange={(e) => setEditedTitle(e.target.value)}
                                        />
                                    ) : (
                                        note.title
                                    )}
                                </td>

                                <td>
                                    {editingId === note.id ? (
                                        <>
                                            <button onClick={() => handleSave(note.id)}>Save</button>
                                            <button onClick={handleCancel}>Cancel</button>
                                        </>
                                    ) : (
                                        <button onClick={() => handleEditClick(note)}>Edit</button>
                                    )}
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
