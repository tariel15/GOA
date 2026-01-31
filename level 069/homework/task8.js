function sumOneToHundred() {
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
        sum += i;
    }
    console.log("1-დან 100-მდე რიცხვების ჯამი: " + sum);
    document.getElementById("sumResult").innerText = "1-დან 100-მდე რიცხვების ჯამი: " + sum;
}
