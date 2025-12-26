//11) შექმენით მასივი ["HTML", "CSS", "JavaScript", "React"]. JSX-ში map() გამოყენებით დაარენდერეთ <li> ელემენტები <ul>-ის შიგნით. კომენტარებში ახსენით რატომ ვიყენებთ map()-ს სიების გამოსატანად React-ში
function SkillList() {
    const skills = ["HTML", "CSS", "JavaScript", "React"];

    return (
        <div>
            <ul>
                {/* map() ვიყენებთ იმიტომ,
                რომ მარტივად გადავუაროთ მასივის ყველა ელემენტს
                და თითოეული ელემენტისგან შევქმნათ JSX ელემენტი */}
                {skills.map((skill, index) => (
                    // key აუცილებელია React-ში სიების რენდერისას,
                    // რათა React-მა სწორად ამოიცნოს რომელი ელემენტი შეიცვალა
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    );
}

export default SkillList;
