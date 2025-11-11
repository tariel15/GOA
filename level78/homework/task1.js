const div = document.getElementById('outer');
const section = document.getElementById('middle');
const button = document.getElementById('inner');
div.addEventListener('click', () => {
    console.log('DIV capturing');
}, true);
section.addEventListener('click', () => {
    console.log('SECTION capturing');
}, true);
button.addEventListener('click', () => {
    console.log('BUTTON capturing');
}, true);
div.addEventListener('click', () => {
    console.log('DIV bubbling');
}, false);

section.addEventListener('click', () => {
    console.log('SECTION bubbling');
}, false);

button.addEventListener('click', () => {
    console.log('BUTTON bubbling');
}, false);
