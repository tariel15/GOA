function generateArray() {
    const start = parseInt(document.getElementById("start").value);
    const end = parseInt(document.getElementById("end").value);
    if (isNaN(start) || isNaN(end)) {
        document.getElementById("result").innerText = "გთხოვთ ჩაწერეთ სწორი რიცხვები.";
        return;
    }
    const array = [];
    for (let i = start; i <= end; i++) {
        array.push(i);
    }
    document.getElementById("result").innerText = array.join(", ");
}
