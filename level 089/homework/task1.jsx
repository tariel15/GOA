//2) React-ის კომპონენტში შექმენით boolean ცვლადი. && ოპერატორის გამოყენებით დაარენდერეთ <p> ტექსტით "User is active" მხოლოდ მაშინ, როცა boolean არის true. კომენტარებში ახსენით && ოპერატორის ლოგიკა JSX-ში
function UserStatus() {
    const isActive = true; // boolean ცვლადი

    return (
        <div>
            {
                // && ოპერატორი JSX-ში მუშაობს ასე:
                // თუ მარცხენა მხარე (isActive) არის true,
                // მაშინ გამოირენდერება მარჯვენა მხარე (<p>User is active</p>)
                // თუ isActive არის false, React არაფერს დაარენდერებს
                isActive && <p>User is active</p>
            }
        </div>
    );
}

export default UserStatus;
