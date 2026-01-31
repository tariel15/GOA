// Event propagation მაგალითი

// ელემენტების წამოღება
const outer = document.getElementById('outer');
const inner = document.getElementById('inner');
const button = document.getElementById('btn');

//CAPTURING PHASE მაგალითი
// მესამე პარამეტრი true ნიშნავს capturing ფაზას
outer.addEventListener('click', () => {
    console.log('Outer DIV - capturing phase');
}, true);

inner.addEventListener('click', () => {
    console.log('Inner DIV - capturing phase');
}, true);

button.addEventListener('click', () => {
    console.log('Button - capturing phase');
}, true);


//BUBBLING PHASE მაგალითი
// მესამე პარამეტრი false ან გამოტოვებულია — default არის bubbling
outer.addEventListener('click', () => {
    console.log('Outer DIV - bubbling phase');
});

inner.addEventListener('click', () => {
    console.log('Inner DIV - bubbling phase');
});

button.addEventListener('click', () => {
    console.log('Button - bubbling phase');
});
