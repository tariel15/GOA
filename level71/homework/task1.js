function runExamples() {
    console.log("📌 პრიმიტიული ტიპები (Stack)");
    let a = 5;
    let b = a;
    b = 10;

    console.log("a =", a);
    console.log("b =", b);

    console.log("📌 კომპლექსური ტიპები (Heap)");
    let person1 = { name: "Nino" };
    let person2 = person1;
    person2.name = "Ana";

    console.log("person1.name =", person1.name);
    console.log("person2.name =", person2.name);

    console.log("📌 Stack vs Heap:");
    console.log("პრიმიტიული ტიპები აკოპირებენ მნიშვნელობას (by value)");
    console.log("კომპლექსური ტიპები იზიარებენ რეფერენციას (by reference)");
}
