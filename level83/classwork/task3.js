const username = document.querySelector("input")
const button = document.querySelector("button")
const div = document.querySelector("div")



button.addEventListener("click", () => {
    let githubUser = username.value;

    let promise  = fetch(https://api.github.com/users/${githubUser})


    promise
        .then((response) => response.json())
        .then((renderInfo))
        .catch((error) => console.log(error))


    console.log(promise);

})