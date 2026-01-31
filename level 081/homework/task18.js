
const movie = {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    country: "USA",
    genre: "Sci-Fi"
};
r
const { year, country, ...details } = movie;

console.log("Year:", year);
console.log("Country:", country);
console.log("Details:", details);
