// ვპოულობთ ფორმასა და ცხრილს
const form = document.getElementById('userForm');
const tableBody = document.querySelector('#userTable tbody');
// container ფუნქცია
// ამ ფუნქციას ევალება მონაცემების შეგროვება ფორმიდან,
// მათი "დამუშავება" და <tr> ელემენტის შექმნა.
function container(fullName, email, phone) {
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    nameCell.textContent = fullName;
    const emailCell = document.createElement('td');
    emailCell.textContent = email;
    const phoneCell = document.createElement('td');
    phoneCell.textContent = phone;
    row.appendChild(nameCell);
    row.appendChild(emailCell);
    row.appendChild(phoneCell);
    // container ფუნქცია აბრუნებს მზადყოფნაში არსებულ <tr> ელემენტს
    return row;
}
// presentational ფუნქცია
// ამ ფუნქციას ევალება მიღებული ელემენტის (row) 
// DOM-ში დამატება — ანუ ვიზუალური ჩვენება ცხრილში.
function presentational(rowElement) {
    tableBody.appendChild(rowElement);
}
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    if (!fullName || !email || !phone) {
        alert('გთხოვ შეავსე ყველა ველი!');
        return;
    }
    const newRow = container(fullName, email, phone);
    presentational(newRow);
    form.reset();
});
