//8) შექმენით CountryInfo კომპონენტი. გამოიყენეთ useState და useEffect. შექმენით input ველი, სადაც მომხმარებელი ჩაწერს ქვეყნის კოდს (მაგ: ge, us, fr). useEffect-ის გამოყენებით წამოიღეთ ქვეყნის ინფორმაცია API-დან მხოლოდ მაშინ, როცა input-ის მნიშვნელობა შეიცვლება და გამოიტანეთ ქვეყნის სახელი და რეგიონი
//https://restcountries.com/v3.1/alpha/{code}
import { useState, useEffect } from "react";

function CountryInfo() {
    const [code, setCode] = useState("");
    const [country, setCountry] = useState(null);

    useEffect(() => {
        if (code === "") return;
        fetch(`https://restcountries.com/v3.1/alpha/${code}`)
            .then((response) => response.json())
            .then((data) => {
                setCountry(data[0]);
            })
            .catch(() => {
                setCountry(null);
            });
    }, [code]);

    return (
        <div>
            <h2>Country Info</h2>
            <input
                type="text"
                placeholder="Enter country code (ge, us, fr)"
                value={code}
                onChange={(e) => setCode(e.target.value)}
            />
            {country && (
                <div>
                    <p>Country name: {country.name.common}</p>
                    <p>Region: {country.region}</p>
                </div>
            )}
        </div>
    );
}

export default CountryInfo;

/*
რატომ ვიყენებთ useEffect-ს?
- API call არის გვერდითი ეფექტი (side effect)
- არ უნდა შესრულდეს ყოველ რენდერზე
- dependency array [code] უზრუნველყოფს, რომ effect გაეშვას
მხოლოდ მაშინ, როცა მომხმარებელი შეცვლის input-ის მნიშვნელობას
- ეს გვაძლევს კონტროლირებად და სწორ მონაცემთა წამოღებას
*/
