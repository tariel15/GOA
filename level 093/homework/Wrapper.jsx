// Wrapper კომპონენტი იყენებს props.children-ს
// children არის ყველაფერი, რაც Wrapper კომპონენტის გახსნილ და დახურულ ტეგებს შორის წერია
function Wrapper({ children }) {
    return (
        <div className="wrapper">
            {children}
        </div>
    );
}

export default Wrapper;
