//5) შექმენით WindowResize კომპონენტი. გამოიყენეთ useState და useEffect ეკრანის სიგანის (window.innerWidth) შესანახად. დაამატეთ resize eventListener useEffect-ში და cleanup function-ის გამოყენებით წაშალეთ იგი. კომენტარებით ახსენით როდის იძახება cleanup function
import { useState, useEffect } from "react";

function WindowResize() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div>
            <h2>Window Resize</h2>
            <p>Window width: {width}px</p>
        </div>
    );
}

export default WindowResize;

/*
როდის იძახება cleanup function?
- როდესაც კომპონენტი იშლება (unmount)
- სანამ useEffect ხელახლა გაეშვება (თუ dependency შეიცვლება)
- cleanup საჭიროა memory leak-ების თავიდან ასაცილებლად
- event listener-ის წაშლა აუცილებელია, რომ კომპონენტის წაშლის შემდეგ
ძველი listener არ დარჩეს აქტიური
*/
