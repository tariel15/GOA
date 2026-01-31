function checkEntry() {
    const hasTicket = document.getElementById("ticket").checked;
    const hasFriend = document.getElementById("friend").checked;

    const allowed = hasTicket || hasFriend;

    const message = allowed ? "შეგიძლიათ შესვლა" : "შესვლა აკრძალულია";
    document.getElementById("entryOut").textContent = message;
}

document.getElementById("entryBtn").addEventListener("click", checkEntry);
