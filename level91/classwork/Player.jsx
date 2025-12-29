function Player(props) {
    /*
        props (properties) არის ობიექტი,
        რომლითაც მშობელი კომპონენტი შვილ კომპონენტს
        გადასცემს მონაცემებს (ინფორმაციას).
        props არის მხოლოდ წასაკითხი (read-only),
        შვილ კომპონენტს არ შეუძლია props-ის შეცვლა.
    */

    return (
        <div>
            <h2>საყვარელი სიმღერა: {props.song}</h2>
            <p>საყვარელი არტისტი: {props.artist}</p>
        </div>
    );
}

export default Player;
