//2) ავტორიზაციის შემდეგ დაამატეთ student-ების მართვის სისტემა, უნდა გქონდეთ ცალეკ ფორმა სტუდენტის სახელის გვარისა და ასაკის შესატანდ და დასადასტურებლად, ასევე უდნა იყოს ფუქნცია რომელიც მართავს ამ ყველაფერს დადასტურებისას და მდგომარეობა სტუდენტების სიისთვის, თითოეულ სტუდენტის წაშლაც უნდა შეიძლებოდეს უნდა იყოს ცხრილი სადაც დარენდერება ყველა მოსწავლე
import { useState } from "react";

function App() {
    const [isAuth, setIsAuth] = useState(false);

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

    const signin = (e) => {
        e.preventDefault();
        setIsAuth(true);
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
            {!isAuth ? (
                <section>
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
                </section>
            ) : (
                <section>
                    <h2>სტუდენტის დამატება</h2>

                    <form onSubmit={addStudent}>
                        <input
                            type="text"
                            placeholder="სახელი"
                            value={studentData.name}
                            onChange={(e) =>
                                setStudentData({ ...studentData, name: e.target.value })
                            }
                            required
                        />
                        <input
                            type="text"
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

                    <h2>სტუდენტების სია</h2>

                    <table border="1">
                        <thead>
                            <tr>
                                <th>სახელი</th>
                                <th>გვარი</th>
                                <th>ასაკი</th>
                                <th>ქმედება</th>
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
