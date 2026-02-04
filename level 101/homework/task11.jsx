//11) Delete ღილაკზე დაჭერისას note უნდა წაიშალოს სიიდან
//პროექტის პირობა
//გამოიყენეთ React ფუნქციური კომპონენტი
//გამოიყენეთ useState
//თითოეულ note - ს უნდა ჰქონდეს უნიკალური id
//editing რეჟიმში ერთდროულად მხოლოდ ერთი note შეიძლება იყოს
//input - ის მნიშვნელობა უნდა კონტროლდებოდეს state - ით
//თუ note - ების სია ცარიელია, ეკრანზე უნდა გამოჩნდეს შესაბამისი ტექსტი
//კოდი უნდა იყოს სუფთა, მარტივი და ლოგიკურად გამართული
import { useState } from "react";

function Dashboard() {
    const [title, setTitle] = useState("");
    const [notes, setNotes] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [editedTitle, setEditedTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;

        const newNote = { id: Date.now(), title };
        setNotes([...notes, newNote]);
        setTitle("");
    };

    const handleEditClick = (note) => {
        setEditingId(note.id);
        setEditedTitle(note.title);
    };

    const handleSave = (id) => {
        if (!editedTitle.trim()) return;

        setNotes(
            notes.map((note) =>
                note.id === id ? { ...note, title: editedTitle } : note
            )
        );

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
                    placeholder="New note"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button type="submit">Add</button>
            </form>

            {notes.length === 0 ? (
                <p>No notes available.</p>
            ) : (
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
