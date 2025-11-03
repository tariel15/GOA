
const box = document.getElementById('smallBox');
const container = document.getElementById('container');
const containerSize = 400;
const boxSize = 50;
let x = 0;
let y = 0;
let direction = 'right';
setInterval(moveBox, 10);
function moveBox() {
    /*
    აქ ვიყენებთ ოთხ ძირითად მიმართულებას:
    → right  — მარჯვნივ გადაადგილება
    ↓ down   — ქვემოთ ჩასვლა
    ← left   — მარცხნივ გადაადგილება
    ↑ up     — ზემოთ ასვლა
    */
    if (direction === 'right') {
        x += 1;
        if (x >= containerSize - boxSize) {
            direction = 'down';
        }
    } else if (direction === 'down') {
        y += 1;
        if (y >= containerSize - boxSize) {
            direction = 'left';
        }
    } else if (direction === 'left') {
        x -= 1;
        if (x <= 0) {
            direction = 'up';
        }
    } else if (direction === 'up') {
        y -= 1;
        if (y <= 0) {
            direction = 'right';
        }
    }
    box.style.left = x + 'px';
    box.style.top = y + 'px';
}

/*
- x და y აღნიშნავენ ყუთის მიმდინარე პოზიციას.
- თითოეულ ინტერვალზე (10ms) moveBox() ფუნქცია გადაადგილებს ყუთს 1px-ით არჩეული მიმართულებით.
- როდესაც ყუთი მიაღწევს შესაბამის საზღვარს, direction იცვლება.
- ასე ყუთი მოძრაობს საათის ისრის მიმართულებით უსასრულოდ.

setInterval(moveBox, 10)
ყოველ 10 მილიწამში ერთხელ იძახებს moveBox() ფუნქციას, რაც ქმნის უწყვეტ ანიმაციას.
*/
