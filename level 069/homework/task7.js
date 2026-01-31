function promptUntilStop() {
    let input = "";
    while (input.toLowerCase() !== "stop") {
        input = prompt("გთხოვთ შეიყვანოთ ტექსტი (გადაწყვეტისთვის დაწერეთ 'stop')");
        if (input === null) {
            alert("მოცემული ჩართვა შეწყვეტილია.");
            break;
        }
    }
    alert("ციკლი შეჩერდა სიტყვით 'stop'");
}
