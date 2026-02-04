//1) შექმენით 2 სექცია მთავარ გვერდზე (main-ზე) პირველ სექციაში უნდა იყოს 2 ფორმა: რეგისტრაციისა და ავოტრიზაციის თითოეულში 2 input (email, password) და ღილაკი, ორივე ფორიმის დადასტურების დროს უნდა გამოიძახოთ შესაბმისი handler ფუქნცია (registration, signin)
import { useState } from "react";

function App() {
    const [registerData, setRegisterData] = useState({
        email: "",
        password: ""
    });

    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });

    const registration = (e) => {
        e.preventDefault();
        console.log("REGISTER:", registerData);
    };

    const signin = (e) => {
        e.preventDefault();
        console.log("LOGIN:", loginData);
    };

    return (
        <main>
            <section>
                <h2>რეგისტრაცია</h2>
                <form onSubmit={registration}>
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
            </section>

            <section>
                <h2>მეორე სექცია</h2>
                <p>აქ შემდეგ დაემატება კონტენტი</p>
            </section>
        </main>
    );
}

export default App;
