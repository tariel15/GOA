//7) React კომპონენტში შექმენით boolean ცვლადი isAdmin. ternary ოპერატორის გამოყენებით JSX-ში თუ isAdmin არის true გამოიტანეთ <p> ტექსტით "Admin panel", ხოლო თუ false — <p> ტექსტით "User panel". კომენტარებში ახსენით ternary ოპერატორის სტრუქტურა
function UserRole() {
    const isAdmin = false;

    return (
        <div>
            {/* Ternary ოპერატორის სტრუქტურა:
            პირობა ? true-ის შემთხვევაში შესრულებული კოდი : false-ის შემთხვევაში შესრულებული კოდი
            JSX-ში ternary ოპერატორი გამოიყენება მაშინ,
            როცა გვინდა ორი განსხვავებული ელემენტის რენდერი პირობის მიხედვით */}
            {isAdmin ? (
                <p>Admin panel</p>
            ) : (
                <p>User panel</p>
            )}
        </div>
    );
}

export default UserRole;
