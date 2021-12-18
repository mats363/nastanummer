let body = document.getElementById("root");
let input = document.createElement("input");
let btn = document.createElement("button");
let result = document.createElement("div");
btn.innerHTML = "Klicka här";
body.append(input, btn, result);

btn.addEventListener("click", function(){
    let number = parseInt(input.value);
    let newNumber = number + 1;
    result.innerHTML = newNumber;
});



