//9) JSX-ის გარეშე, React.createElement-ის გამოყენებით შექმენით <h1> სათაური ტექსტით "Hello without JSX". კომენტარებში ახსენით განსხვავება JSX-სა და React.createElement-ს შორის
function NoJSXExample() {
    return React.createElement(
        "h1",
        null,
        "Hello without JSX"
    );

    /*
        განსხვავება JSX-სა და React.createElement-ს შორის:
        JSX არის სინტაქსური შაქარი (syntax sugar),
        რომელიც Babel-ის დახმარებით გარდაიქმნება React.createElement გამოძახებებად.
        JSX:
        <h1>Hello</h1>
        გარდაიქმნება ასეთ კოდად:
        React.createElement("h1", null, "Hello")
        React.createElement არის ჩვეულებრივი JavaScript ფუნქცია,
        რომელიც ქმნის React ელემენტის ობიექტს.
        ანუ JSX მხოლოდ კოდის გამარტივებისთვის გამოიყენება,
        რეალურად React ყოველთვის React.createElement-ს იყენებს.
    */
}

export default NoJSXExample;
