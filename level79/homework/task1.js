function write(msg) {
    document.getElementById("output").textContent += msg + "\n";
}
function clearOutput() {
    document.getElementById("output").textContent = "";
}
function runSync() {
    clearOutput();
    write("სინქრონული ჩატვირთვა დაიწყო...");
    for (let i = 1; i <= 3; i++) {
        write("დავალება " + i + " შესრულდა");
    }
    write("სინქრონული დასრულდა!");
}
function runAsync() {
    clearOutput();
    write("ასინქრონული ჩატვირთვა დაიწყო...");
    write("დავალება 1 შესრულდა");
    setTimeout(() => {
        write("დავალება 2 (დაყოვნებით) შესრულდა");
    }, 2000);
    write("დავალება 3 შესრულდა");
    write("ასინქრონული დასრულდა (მაგრამ დავალება 2 მოგვიანებით მოვა)");
}
