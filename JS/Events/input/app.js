const username = document.querySelector("#username");

username.addEventListener("input", function () {
    const h1 = document.querySelector("h1");
    if (this.value !== "") {
        h1.innerText = "Welcome, " + this.value;
    } else {
        h1.innerText = "Enter Your Username";
    }
});
