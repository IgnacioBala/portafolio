const proyects = [
    {
        id:1,
        title:"contador (2023)",
        description:"Contador hecho en la casa del futuro con mucho amor",
        img:"https://i.postimg.cc/jq79LfT9/Casita-del-Futuro.png",
        host:""
    },
    {
        id:2,
        title:"",
        description:"",
        img:"",
        host:""
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

