//MDN Active learning DOM Manipulation - Shopping List exercise

const list = document.querySelector ("ul");
const input = document.querySelector ("input");
const button = document.querySelector ("button");

button.addEventListener("click", () => {
    const myItem = input.value;
    input.value = '';

    const newLi = document.createElement("li");
    const newSpan = document.createElement("span");
    const newButton = document.createElement("button");

    newLi.appendChild(newSpan);
    newLi.appendChild(newButton);

    newSpan.textContent = myItem;
    newButton.textContent = "Delete";

    list.appendChild(newLi);

    newButton.addEventListener("click", () => {
        list.removeChild(newLi);
    });

    input.focus();
});

