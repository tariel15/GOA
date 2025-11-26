
const user = {
    name: "tariel",
    age: 15
};
const details = {
    city: "Tbilisi",
    country: "Georgia"
};

// ობიექტების გაერთიანება spread (...) ოპერატორის გამოყენებით
const fullUser = {
    ...user,      // აქ ვაშლით user ობიექტს
    ...details    // აქ ვაშლით details ობიექტს
};

console.log(fullUser);
