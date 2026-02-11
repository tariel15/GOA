//5) შექმენით AuthContext:
//AuthContext უნდა შეიცავდეს:
//- email
//- password

//შექმენით AuthProvider კომპონენტი და გამოიყენეთ .Provider.
//App.jsx-ში:
//- 3-ჯერ გამოიყენეთ AuthProvider
//- ყოველ ჯერზე გადაეცით სხვადასხვა email და password

//იგნით გამოიძახეთ AuthConsumer კომპონენტი.
//კომენტარებში ახსენით რატომ არის Context კარგი მსგავსი მონაცემებისთვის
// App.jsx
import AuthProvider from "./AuthProvider";
import AuthConsumer from "./AuthConsumer";

function App3A() {
    return (
        <div>
            <AuthProvider email="user1@gmail.com" password="1234">
                <AuthConsumer />
            </AuthProvider>

            <AuthProvider email="user2@gmail.com" password="abcd">
                <AuthConsumer />
            </AuthProvider>

            <AuthProvider email="admin@gmail.com" password="admin123">
                <AuthConsumer />
            </AuthProvider>
        </div>
    );
}

export default App3;
