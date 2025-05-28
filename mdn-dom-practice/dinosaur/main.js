//Active Learning on MDN web docs for DOM manipulation
//https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/DOM_scripting#active_learning_basic_dom_manipulation

const link = document.querySelector("a");
link.textContent = "Mozilla Developer Network";
link.href = "https://developer.mozilla.org";

//Creating and placing new nodes
const sect = document.querySelector("section");
const para = document.createElement("p");
para.textContent = "We hope you enjoyed the ride.";
sect.appendChild(para);

const text = document.createTextNode(" - the premier source for web development knowledge.");
const linkPara = document.querySelector ("p");
linkPara.appendChild(text);

//Moving and removing elements
sect.appendChild(linkPara);

linkPara.remove();

//Manipulating styles
para.setAttribute("class","highlight");