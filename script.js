let modeBtn = document.getElementById("mode"); 
let body = document.getElementsByTagName("body")[0]; 

let currmode = "light"; 

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
