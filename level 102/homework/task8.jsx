//9) წარმატებული ავტორიზაციის შემდეგ მომხმარებელი უნდა ჩაითვალოს შესულად
//პროექტის პირობა
//შექმენი ერთგვერდიანი React აპლიკაცია ფუნქციური კომპონენტებით
//გამოიყენე custom hook useForm
//input-ები უნდა იყოს controlled
//არ გამოიყენო ცალკე useState თითო input-ზე
//localStorage გამოიყენე JSON.stringify და JSON.parse-ით
//ავტორიზაციის ლოგიკა არ უნდა იყოს პირდაპირ კომპონენტში
//კოდი დაწერეთ სუფთად, ლოგიკურად და შეცდომების გარეშე
// authService.js

export const registerUser = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
};

export const loginUser = (data) => {
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
        return { success: false, message: "User not found" };
    }

    if (
        data.email === savedUser.email &&
        data.password === savedUser.password
    ) {
        localStorage.setItem("isAuthenticated", JSON.stringify(true));
        return { success: true };
    }

    return { success: false, message: "Invalid credentials" };
};

export const isLoggedIn = () => {
    return JSON.parse(localStorage.getItem("isAuthenticated")) === true;
};
