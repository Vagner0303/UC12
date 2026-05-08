const div = document.getElementsByClassName("conteiner");
const btn = document.getElementById("btn");

// Criar novos elementos e fazer aparecer no HTML

btn.addEventListener("click", () => {

const novo = document.createElement("p");
novo.textContent = "Texto criado";

// Depois dele criado o elemento, precisamos dizer onde ele sera pocisionado

div.appendChild(novo);

})


