let modeBtn = document.getElementById("mode"); // Use getElementById instead of getElementsById
let body = document.getElementsByTagName("body")[0]; // Access the first body element

let currmode = "light"; // Initial mode

modeBtn.addEventListener("click", () => {
    if (currmode === "light") {
        currmode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    } else {
        currmode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }

    console.log(currmode);
});
