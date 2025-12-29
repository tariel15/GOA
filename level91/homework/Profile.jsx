
function Profile(props) {
    return (
        <p>
            Welcome, {props.username}
            {/* props.username არის App.jsx-დან გადაცემული სახელი */}
        </p>
    );
}

export default Profile;
