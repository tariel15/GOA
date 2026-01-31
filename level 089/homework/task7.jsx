//8) React-ის კომპონენტში შექმენით ღილაკი და დაამატეთ onClick event. ღილაკზე დაჭერისას console.log-ში დაბეჭდეთ "Button clicked". კომენტარებში ახსენით როგორ მუშაობს event handling JSX-ში
function ClickButton() {

    // event handler ფუნქცია
    const handleClick = () => {
        console.log("Button clicked");
    };

    return (
        <div>
            <button
                onClick={handleClick}
                {
          // event handling JSX-ში მუშაობს ასე:
          // onClick იღებს ფუნქციას და არა ფუნქციის გამოძახებას
          // onClick={handleClick} → სწორი
          // onClick={handleClick()} → არასწორი (დაიძახება რენდერისას)
          //
          // React იყენებს SyntheticEvent-ს,
          // რომელიც ბრაუზერის event-ების აბსტრაქციაა
        }
            >
                Click me
            </button>
        </div>
    );
}
export default ClickButton;
