
const customers = [
    {
        name: "Philip",
        job: "Web Developer",
        comment:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium rerum omnis exercitationem, veniam saepe maiores amet numquam dignissimos quasi accusantium dolores repudiandae error, itaque vero, laboriosam accusamus in. Molestias, consectetur?",
        image:"./images_overview/imagen1.jpg"
    },
    {
        name: "Monica",
        job: "Ux Designer",
        comment:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium rerum omnis exercitationem, veniam saepe maiores amet numquam dignissimos quasi accusantium dolores repudiandae error, itaque vero, laboriosam accusamus in. Molestias, consectetur?",
        image:"./images_overview/imagen2.jpg"
    },
    {
        name: "Carlos",
        job: "Project Maner",
        comment:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium rerum omnis exercitationem, veniam saepe maiores amet numquam dignissimos quasi accusantium dolores repudiandae error, itaque vero, laboriosam accusamus in. Molestias, consectetur?",
        image:"./images_overview/imagen5.jpg"
    },
    {
        name: "Sharon",
        job: "Sales Developer",
        comment:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium rerum omnis exercitationem, veniam saepe maiores amet numquam dignissimos quasi accusantium dolores repudiandae error, itaque vero, laboriosam accusamus in. Molestias, consectetur?",
        image:"./images_overview/imagen4.jpg"
    },
    
];

let currentIndex = 0;

//seleccion de elementos

const nameElement = document.querySelector(".customer.name");
const jobElement = document.querySelector(".customer.job");
const commentElement = document.querySelector(".customer.comment");
const imageElement = document.querySelector(".face.imag");
const nextButton = document.getElementById("next")
const previousButton = document.getElementById("previous")

//funcion para mostar al cliente actual

function showCustomer (index) {
    const customer = customers[index];
    nameElement.textContent = customer.name;
    jobElement.textContent = customer.job;
    commentElement.textContent = customer.comment;
    imageElement.style.backgroundImage = `url(${customer.image})`;

}

// eventos de botones pre - next

nextButton.addEventListener("click", () => {
    currentIndex=(currentIndex + 1) % customers.length;
    showCustomer(currentIndex);
});

previousButton.addEventListener("click", () => {
    currentIndex=(currentIndex - 1 + customers.length) % customers.length;
    showCustomer(currentIndex);
});

// mostrar primero al cargar 

showCustomer(currentIndex);