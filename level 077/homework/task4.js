// ვპოულობთ ელემენტებს
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const itemList = document.getElementById("itemList");
const items = itemList.getElementsByTagName("li");
// ვუსმენთ ღილაკზე დაჭერას
searchBtn.addEventListener("click", function () {
    // ვიღებთ მომხმარებლის მიერ შეყვანილ ტექსტს
    const searchText = searchInput.value.toLowerCase(); // პატარა ასოებით შევადაროთ
    // ვმუშაობთ თითოეულ li ელემენტზე for ციკლით
    for (let i = 0; i < items.length; i++) {
        // ვიღებთ li-ს ტექსტს და ვაქცევთ პატარა ასოებად
        const itemText = items[i].textContent.toLowerCase();
        /* 
            ვამოწმებთ, შეიცავს თუ არა li-ს ტექსტი შეყვანილ სიტყვას.
            indexOf() აბრუნებს -1-ს თუ ტექსტი არ მოიძებნა,
            ხოლო >= 0 ნიშნავს, რომ ნაპოვნია.
        */
        if (itemText.indexOf(searchText) >= 0) {
            // თუ ტექსტი შეიცავს საძიებო სიტყვას → ვაჩვენებთ ელემენტს
            items[i].style.display = "list-item";
        } else {
            // თუ არა → ვმალავთ ელემენტს
            items[i].style.display = "none";
        }
    }
});
