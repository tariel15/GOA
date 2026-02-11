
function Component3({ user }) {
    return (
        <div>
            <h2>Name: {user.name}</h2>
            <h3>Age: {user.age}</h3>
        </div>
    );
}

export default Component3;
/*
რატომ არის ეს Props Drilling?

აქ user state ინახება App კომპონენტში,
მაგრამ მისი გამოყენება გვჭირდება Component3-ში.

ამისთვის გვიწევს user-ის გადაცემა:
App → Component1 → Component2 → Component3

Component1 და Component2 თავად არ იყენებენ user-ს,
მაგრამ მაინც იღებენ და გადასცემენ ქვემოთ.

ეს სწორედ Props Drilling-ია —
როდესაც მონაცემი გადადის რამდენიმე შუალედურ კომპონენტში,
რომლებიც მას რეალურად არ იყენებენ.
*/
