let header = document.getElementById("header");
header.addEventListener("mouseover", () => {
    header.innerHTML = "ENHANCED FORM";
    header.style.color = "yellow";
});
header.addEventListener("mouseout", () => {
    header.innerHTML = "Enhanced Form";
    header.style.color = "black";
});

let ordered_list = document.getElementById("ordered_list");
ordered_list.addEventListener("mouseover", () => {
    ordered_list.style.textTransform = "uppercase";
    ordered_list.style.background = "black";
    ordered_list.style.color = "white";
});
ordered_list.addEventListener("mouseout", () => {
    ordered_list.style.textTransform = "lowercase";
    ordered_list.style.background = "yellow";
    ordered_list.style.color = "black";
});

let unordered_list = document.getElementById("unordered_list"); // fixed
unordered_list.addEventListener("mouseover", () => {
    unordered_list.style.textTransform = "uppercase";
    unordered_list.style.background = "white";
});
unordered_list.addEventListener("mouseout", () => {
    unordered_list.style.textTransform = "lowercase";
    unordered_list.style.background = "lime";
});

let inputer = document.getElementsByClassName("inputer");
let button = document.getElementById("submit_button"); // fixed

button.addEventListener("click", () => {
    let info_display = document.getElementById("info_display");
    let results = "";
    for (let i = 0; i < inputer.length; i++) {
        results += inputer[i].value + "<br>";
    }
    info_display.innerHTML = results;
});
