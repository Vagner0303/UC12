const items = document.querySelectorAll(".foto img, .bloco2-invertido__img, .img7, .imgg, .imggg");

items.forEach((item) => {
    const maxRotate = 15;

    item.addEventListener("mousemove", (e) => {
        const rect = item.getBoundingClientRect();

        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;

        const rotateY = (x - 0.5) * 2 * maxRotate;
        const rotateX = (0.5 - y) * 2 * maxRotate;

        item.style.transform = `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
        `; 
    });

    item.addEventListener("mouseleave", () => {
        item.style.transform = `
            perspective(1000px)
            rotateX(0deg)
            rotateY(0deg)
        `; 
    });
});



const botoes = document.querySelectorAll(
  ".btn, .btn-foto, .bloco2-invertido__btn, .btn-formulario"
);

botoes.forEach((botao) => {

  botao.addEventListener("mousemove", (e) => {

    const rect = botao.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const moveX = (x / rect.width - 0.5) * 10;
    const moveY = (y / rect.height - 0.5) * 6;

    botao.style.transform =
      `translateX(6px) rotateX(${-moveY}deg) rotateY(${moveX}deg)`;

  });

  botao.addEventListener("mouseleave", () => {
    botao.style.transform = "translateX(0px)";
  });

});


const dropdownExtras = document.querySelectorAll(".dropdown-extra");

dropdownExtras.forEach((dropdown) => {

    dropdown.addEventListener("mouseenter", () => {
        dropdown.classList.add("active");
    });

    dropdown.addEventListener("mouseleave", () => {
        dropdown.classList.remove("active");
    });

});

document.addEventListener("click", (e) => {

    dropdownExtras.forEach((dropdown) => {

        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove("active");
        }

    });

});