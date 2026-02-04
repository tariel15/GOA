//3) დაასრულეთ პროექტი, დაწერეთ კოდი თქვენით, გამოასწორეთ შეცდომები, მოაწესრიგეთ localstorage და სწორად გამოიყენეთ json-ის მეთოდები, სრულყოფილი გახადეთ ფუნქციონალი
import { useEffect, useState } from "react";

function App() {
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);

    const [registerData, setRegisterData] = useState({
        email: "",
        password: ""
    });

    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });

    const [studentData, setStudentData] = useState({
        name: "",
        surname: "",
        age: ""
    });

    const [students, setStudents] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
        const storedUser = JSON.parse(localStorage.getItem("currentUser"));
        const storedStudents = JSON.parse(localStorage.getItem("students")) || [];

        setUsers(storedUsers);
        setCurrentUser(storedUser);
        setStudents(storedStudents);
    }, []);

    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users));
    }, [users]);

    useEffect(() => {
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
    }, [currentUser]);

    useEffect(() => {
        localStorage.setItem("students", JSON.stringify(students));
    }, [students]);

    const register = (e) => {
        e.preventDefault();

        const exists = users.find(
            user => user.email === registerData.email
        );

        if (exists) {
            setError("ასეთი მომხმარებელი უკვე არსებობს");
            return;
        }

        setUsers([...users, registerData]);
        setRegisterData({ email: "", password: "" });
        setError("");
    };

    const signin = (e) => {
        e.preventDefault();

        const user = users.find(
            u =>
                u.email === loginData.email &&
                u.password === loginData.password
        );

        if (!user) {
            setError("არასწორი მონაცემები");
            return;
        }

        setCurrentUser(user);
        setError("");
        setLoginData({ email: "", password: "" });
    };

    const logout = () => {
        setCurrentUser(null);
    };

    const addStudent = (e) => {
        e.preventDefault();

        const newStudent = {
            id: Date.now(),
            name: studentData.name,
            surname: studentData.surname,
            age: studentData.age
        };

        setStudents([...students, newStudent]);
        setStudentData({ name: "", surname: "", age: "" });
    };

    const deleteStudent = (id) => {
        setStudents(students.filter(student => student.id !== id));
    };

    return (
        <main>
            {!currentUser ? (
                <section>
                    <h2>რეგისტრაცია</h2>
                    <form onSubmit={register}>
                        <input
                            type="email"
                            placeholder="Email"
                            value={registerData.email}
                            onChange={(e) =>
                                setRegisterData({ ...registerData, email: e.target.value })
                            }
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={registerData.password}
                            onChange={(e) =>
                                setRegisterData({ ...registerData, password: e.target.value })
                            }
                            required
                        />
                        <button type="submit">რეგისტრაცია</button>
                    </form>

                    <h2>ავტორიზაცია</h2>
                    <form onSubmit={signin}>
                        <input
                            type="email"
                            placeholder="Email"
                            value={loginData.email}
                            onChange={(e) =>
                                setLoginData({ ...loginData, email: e.target.value })
                            }
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={loginData.password}
                            onChange={(e) =>
                                setLoginData({ ...loginData, password: e.target.value })
                            }
                            required
                        />
                        <button type="submit">შესვლა</button>
                    </form>

                    {error && <p style={{ color: "red" }}>{error}</p>}
                </section>
            ) : (
                <section>
                    <h2>მოგესალმები, {currentUser.email}</h2>
                    <button onClick={logout}>Logout</button>

                    <h3>სტუდენტის დამატება</h3>
                    <form onSubmit={addStudent}>
                        <input
                            placeholder="სახელი"
                            value={studentData.name}
                            onChange={(e) =>
                                setStudentData({ ...studentData, name: e.target.value })
                            }
                            required
                        />
                        <input
                            placeholder="გვარი"
                            value={studentData.surname}
                            onChange={(e) =>
                                setStudentData({ ...studentData, surname: e.target.value })
                            }
                            required
                        />
                        <input
                            type="number"
                            placeholder="ასაკი"
                            value={studentData.age}
                            onChange={(e) =>
                                setStudentData({ ...studentData, age: e.target.value })
                            }
                            required
                        />
                        <button type="submit">დამატება</button>
                    </form>

                    <h3>სტუდენტების სია</h3>
                    <table border="1">
                        <thead>
                            <tr>
                                <th>სახელი</th>
                                <th>გვარი</th>
                                <th>ასაკი</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map(student => (
                                <tr key={student.id}>
                                    <td>{student.name}</td>
                                    <td>{student.surname}</td>
                                    <td>{student.age}</td>
                                    <td>
                                        <button onClick={() => deleteStudent(student.id)}>
                                            წაშლა
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            )}
        </main>
    );
}

export default App;
