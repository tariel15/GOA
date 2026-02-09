//19) შეასრულეთ გამოწვევები HackerRank-ზე: 
//https://www.hackerrank.com/challenges/react-contact-form/problem?isFullScreen=true
import React, { useState } from "react";

function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [submitted, setSubmitted] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        // ვალიდაცია: თუ რომელიმე ველი ცარიელია
        if (!name.trim() || !email.trim() || !message.trim()) {
            setError("All fields are required.");
            return;
        }

        // Submit-ის შემთხვევაში
        setSubmitted({ name, email, message });
        setError("");
        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <div style={{ padding: "20px", fontFamily: "Arial" }}>
            <h2>Contact Form</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    data-testid="name-input"
                />
                <br />
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    data-testid="email-input"
                />
                <br />
                <textarea
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    data-testid="message-input"
                />
                <br />
                <button type="submit" data-testid="submit-button">
                    Submit
                </button>
            </form>

            {error && <p data-testid="error-message" style={{ color: "red" }}>{error}</p>}

            {submitted && (
                <div data-testid="submitted-info" style={{ marginTop: "20px" }}>
                    <p>Name: {submitted.name}</p>
                    <p>Email: {submitted.email}</p>
                    <p>Message: {submitted.message}</p>
                </div>
            )}
        </div>
    );
}

export default ContactForm;


//https://www.hackerrank.com/challenges/blog-post/problem?isFullScreen=true
import React, { useState } from "react";

function BlogPostApp() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // ვალიდაცია
        if (!title.trim() || !description.trim()) {
            setError("All fields are required.");
            return;
        }

        // ახალი პოსტის დამატება
        const newPost = { id: Date.now(), title, description };
        setPosts([...posts, newPost]);
        setTitle("");
        setDescription("");
        setError("");
    };

    const handleDelete = (id) => {
        setPosts(posts.filter((post) => post.id !== id));
    };

    return (
        <div style={{ padding: "20px", fontFamily: "Arial" }}>
            <h2>Blog Post</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    data-testid="title-input"
                />
                <br />
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    data-testid="description-input"
                />
                <br />
                <button type="submit" data-testid="submit-button">Add Post</button>
            </form>

            {error && <p data-testid="error-message" style={{ color: "red" }}>{error}</p>}

            <h3>Posts:</h3>
            {posts.length === 0 ? (
                <p data-testid="no-posts">No posts available</p>
            ) : (
                <ul>
                    {posts.map((post) => (
                        <li key={post.id} style={{ marginBottom: "10px" }}>
                            <strong>{post.title}</strong>
                            <p>{post.description}</p>
                            <button onClick={() => handleDelete(post.id)} data-testid={`delete-${post.id}`}>
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default BlogPostApp;
