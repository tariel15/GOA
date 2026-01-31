//7) React-ის კომპონენტში შექმენით რიცხვითი ცვლადი (მაგ: notificationsCount). && ოპერატორის გამოყენებით დაარენდერეთ <p> ტექსტით "You have new notifications" მხოლოდ მაშინ, როცა რიცხვი მეტია 0-ზე. კომენტარებში ახსენით რატომ მუშაობს && ამ შემთხვევაში
function Notifications() {
    const notificationsCount = 3; // რიცხვითი ცვლადი

    return (
        <div>
            {
                // && ოპერატორი JSX-ში მუშაობს არა მხოლოდ boolean-ებთან,
                // არამედ ნებისმიერ "truthy / falsy" მნიშვნელობებთან
                //
                // notificationsCount > 0 აბრუნებს boolean-ს:
                // true  -> <p>You have new notifications</p> დარენდერდება
                // false -> React არაფერს დაარენდერებს
                //
                // ამიტომ ტექსტი გამოჩნდება მხოლოდ მაშინ,
                // როცა რიცხვი მეტია 0-ზე
                notificationsCount > 0 && (
                    <p>You have new notifications</p>
                )
            }
        </div>
    );
}

export default Notifications;
