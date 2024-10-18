document.addEventListener('DOMContentLoaded', () => {
    const proyectosSection = document.querySelector("#proyects");

    const proyects = [
        {
            id: 1,
            title: "Comentarios (2023)",
            description: "Comentarios hechos en la casa del futuro con mucho amor",
            img: "https://i.postimg.cc/jq79LfT9/Casita-del-Futuro.png",
            host: "https://ignaciobala.github.io/Comentario-casadelfuturo/"
        },
        {
            id: 2,
            title: "Cartas Catálogo Guitarras",
            description: "Cartas hechas en la casa del futuro",
            img: "https://i.postimg.cc/jq79LfT9/Casita-del-Futuro.png",
            host: "https://ignaciobala.github.io/c/"
        },
        {
            id: 3,
            title: "Juego Nachonesa",
            description: "Cartas hechas en la casa del futuro",
            img: "https://i.postimg.cc/jq79LfT9/Casita-del-Futuro.png",
            host: "https://ignaciobala.github.io/Jueganachonesa/"
        },
    ];

    // Mostrar los proyectos
    proyects.forEach((project) => {
        const projectCard = `
        <article class="card">
            <img src="${project.img}" alt="${project.title}">
            <div class="card__content">
                <p class="card__title">${project.title}</p>
                <p class="card__description">${project.description}</p>
                <a target="_blank" href="${project.host}" class="button">View site</a>
            </div>
        </article>`;
        
        proyectosSection.innerHTML += projectCard; // Añadimos la tarjeta del proyecto
    });
});