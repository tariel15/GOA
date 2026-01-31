//4) შექმენით PasswordCheck კომპონენტი, რომელიც მიიღებს props-ით password მნიშვნელობას.თუ პაროლის სიგრძე ნაკლებია 8-ზე, გამოიტანეთ <p> ტექსტი: "Password must contain 8 characters".კომენტარებში ახსენით რატომ არის ამ შემთხვევაში password controlled input
function PasswordCheck({ password }) {
    return (
        <>
            {password.length < 8 && (
                <p>Password must contain 8 characters</p>
            )}
        </>
    );
}

export default PasswordCheck;
// password არის controlled input, რადგან:
// 1) მისი მნიშვნელობა ინახება React-ის state-ში (useState)
// 2) input-ს აქვს value={password}
// 3) ცვლილება ხდება onChange-ის საშუალებით
// 4) password გადაეცემა სხვა კომპონენტს (PasswordCheck) props-ით
// ეს შესაძლებელი იქნებოდა მხოლოდ მაშინ, როცა მონაცემი კონტროლდება React-ის მიერ
