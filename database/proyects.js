
const proyects = [
    {
        id:1,
        title:"comentarios (2023)",
        description:"Comentarios hecho en la casa del futuro con mucho amor",
        img:"https://i.postimg.cc/jq79LfT9/Casita-del-Futuro.png",
        host:"https://ignaciobala.github.io/Comentario-casadelfuturo/"
    },
    {
        id:2,
        title:"Cartas catalogo guitarras",
        description:"Cartas hechas en la casa del futuro",
        img:"https://i.postimg.cc/jq79LfT9/Casita-del-Futuro.png",
        host:"https://ignaciobala.github.io/Casa-del-futuro--Javascript/cartas.html"
    },
   
    
]

const proyectosSection = document.querySelector("#proyects")


    console.log("hola");
    proyects.forEach((project)=>{
        proyectosSection.innerHTML += `
        <article class="card">
            <img src="${project.img}" alt="">
            <div class="card__content">
                <p class="card__title">${project.title}</p>
                <p class="card__description">${project.description}</p>
                <a target="_blank" href="${project.host}" class="button" >view site</a>
            </div>
        </article>`
    })

