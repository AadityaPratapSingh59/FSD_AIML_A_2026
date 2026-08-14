const child = document.createElement("div");

child.setAttribute("class", "card");

const image = document.createElement("img");

image.setAttribute("src", "https://picsum.photos/200/200");
image.setAttribute("width", "200px");
image.setAttribute("height", "200px");

const h2 = document.createElement("h2");

h2.innerText = "Price : 500/-";

child.appendChild(image);
child.appendChild(h2);

const parent = document.getElementById("root");

parent.appendChild(child);