
function Card(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            {/* title არის props-ით მიღებული სათაური */}

            <p>{props.description}</p>
            {/* description არის props-ით მიღებული ტექსტი */}
        </div>
    );
}

export default Card;
