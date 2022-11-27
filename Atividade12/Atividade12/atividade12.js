const imagem = document.getElementById("imagem");

onload = () => {
    imagem.src = "janelafechada.png";
}

imagem.addEventListener("mouseenter", () => {
    imagem.src = "janelaaberta.png";
});

imagem.addEventListener("mouseleave", () => {
    imagem.src = "janelafechada.png";
});

imagem.addEventListener("click", () => {
    imagem.src = "janelaquebra.png";
});