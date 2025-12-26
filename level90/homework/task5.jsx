//6) React კომპონენტში შექმენით boolean ცვლადი showText. JSX-ში && ოპერატორის გამოყენებით გამოიტანეთ <p> ტექსტით "This text is visible" მხოლოდ მაშინ, როცა showText არის true. კომენტარებში ახსენით && ოპერატორის მუშაობის პრინციპი JSX-ში
function ConditionalText() {
    const showText = true;

    return (
        <div>
            {/* && ოპერატორი JSX-ში მუშაობს ასე:
            თუ მარცხენა მხარე (showText) არის true,
            მაშინ შესრულდება მარჯვენა მხარე და <p> დარენდერდება.
            თუ showText არის false, React არაფერს აჩვენებს. */}
            {showText && <p>This text is visible</p>}
        </div>
    );
}

export default ConditionalText;
