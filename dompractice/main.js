const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const paragraph = document.createElement("p");
paragraph.textContent = "Hey I'm red!";
paragraph.setAttribute("style","color:red;");

container.appendChild(paragraph);

const h3 = document.createElement("h3");
h3.textContent = "I'm blue";
h3.setAttribute("style","color:blue;");

container.appendChild(h3);

const div = document.createElement("div");
div.setAttribute("style", "border-style:solid; border-color: black; background-color: pink");

const divH1 = document.createElement ("h1");
divH1.textContent = "I'm in a div";

div.appendChild(divH1);

const divP = document.createElement("p");
divP.textContent = "ME TOO!";

div.appendChild(divP);

container.appendChild(div);

const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  alert("Hello World");
});