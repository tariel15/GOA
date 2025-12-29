
function User(props) {
    return (
        <div>
            <p>სახელი: {props.name}</p> {/* props.name – გადაცემული სახელი */}
            <p>ასაკი: {props.age}</p>   {/* props.age – გადაცემული ასაკი */}
        </div>
    );
}

export default User;
