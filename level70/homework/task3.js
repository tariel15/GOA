
function Book(title, author, year, available) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.available = available;

    this.toggleAvailability = function () {
        this.available = !this.available;
        console.log(`"${this.title}" ხელმისაწვდომობა შეიცვალა: ${this.available ? "✓ ხელმისაწვდომია" : "✗ მიუწვდომელია"}`);
    };
}

const book1 = new Book("ვეფხისტყაოსანი", "შოთა რუსთაველი", 1200, true);
const book2 = new Book("თამარ მეფე", "დავით კლდიაშვილი", 1910, false);

book1.toggleAvailability();
book2.toggleAvailability();

console.log("წიგნები:");
console.log(book1);
console.log(book2);

