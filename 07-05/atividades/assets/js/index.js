
const div = document.querySelector("div");
const btn = document.querySelector("button");

let contador = 0



btn.addEventListener("click", () => {

    contador++;

    const box = document.createElement("div");
    box.classList.add("container");

    box.textContent = contador;

    box.addEventListener("click", () => {
    box.remove();
})

div.appendChild(box)

})




