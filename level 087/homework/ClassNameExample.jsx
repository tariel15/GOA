//3) შექმენით ClassNameExample კომპონენტი  დააბრუნეთ <div className="box">Content</div>  კომენტარებში ახსენით რატომ ვიყენებთ className-ს და არა class-ს JSX-ში  App-ში გამოიტანეთ <ClassNameExample />
function ClassNameExample() {
    return <div className="box">Content</div>;
}

export default ClassNameExample;

/*
  JSX-ში არ ვიყენებთ "class"-ს, რადგან:
  - "class" არის დაცული სიტყვა (reserved keyword) JavaScript-ში
  - JSX რეალურად არის JavaScript, ამიტომ React იყენებს "className"-ს
  - "className" პირდაპირ შეესაბამება HTML-ის class ატრიბუტს
*/
