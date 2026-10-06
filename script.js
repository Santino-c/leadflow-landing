const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{threshold:.2});


document.querySelectorAll(
    '.flow-card,.benefit-card,.about-item,.why-card,.stat-card,.service-card,.project-card'
).forEach(card=>{

    card.classList.add("hidden");
    observer.observe(card);

});


document.querySelectorAll(".counter").forEach(counter=>{

    const target = parseFloat(counter.dataset.target);

    let value = 0;

    const step = target / 80;

    const update = () => {

        value += step;

        if(value >= target){

            value = target;

            if(target === 99.9){

                counter.innerHTML = "99.9%";

            }else{

                counter.innerHTML =
                    target + "<span style='font-size:28px'>/7</span>";

            }

            return;

        }

        if(target === 99.9){

            counter.innerHTML = value.toFixed(1) + "%";

        }else{

            counter.innerHTML = Math.floor(value);

        }

        requestAnimationFrame(update);

    };

    observer.observe(counter);

    counter.parentElement.addEventListener(
        "transitionstart",
        update,
        {once:true}
    );

});


const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{

    if(glow){

        glow.style.left = e.clientX + "px";
        glow.style.top = e.clientY + "px";

    }

});


window.addEventListener("scroll",()=>{

    const nav = document.querySelector(".navbar");

    if(!nav) return;

    if(window.scrollY > 80){

        nav.classList.add("scrolled");

    }else{

        nav.classList.remove("scrolled");

    }

});

// ===========================
// FILTROS DEL PORTFOLIO
// ===========================

const filterButtons = document.querySelectorAll(".filter-btn");
const portfolioProjects = document.querySelectorAll(".portfolio-project");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const filter = button.dataset.filter;

        // Cambiar botón activo
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        // Filtrar proyectos
        portfolioProjects.forEach(project => {

            const category = project.dataset.category;

            if(filter === "all" || category === filter){

                project.classList.remove("project-hidden");

            }else{

                project.classList.add("project-hidden");

            }

        });

    });

});

// ===========================
// GALERÍA CRM INMERSIVA
// ===========================

const crmModal = document.getElementById("crmModal");
const crmOpen = document.querySelector(".crm-gallery-btn");
const crmClose = document.getElementById("crmClose");

const crmImage = document.getElementById("crmImage");
const crmCaption = document.getElementById("crmCaption");
const crmCounter = document.getElementById("crmCounter");

const crmPrev = document.getElementById("crmPrev");
const crmNext = document.getElementById("crmNext");


const crmImages = [

    {
        src: "img/proyectos/crm-login.png",
        caption: "Acceso al sistema"
    },

    {
        src: "img/proyectos/crm-dashboard.png",
        caption: "Dashboard general"
    },

    {
        src: "img/proyectos/crm-clientes.png",
        caption: "Gestión de clientes"
    },

    {
        src: "img/proyectos/crm-cuenta-corriente.png",
        caption: "Cuenta corriente"
    }

];


let crmCurrent = 0;


function updateCRMImage(){

    crmImage.src = crmImages[crmCurrent].src;

    crmCaption.textContent =
        crmImages[crmCurrent].caption;

    crmCounter.textContent =
        `${crmCurrent + 1} / ${crmImages.length}`;

}


if(crmOpen){

    crmOpen.addEventListener("click", () => {

        crmCurrent = 0;

        updateCRMImage();

        crmModal.classList.add("active");

        document.body.style.overflow = "hidden";

    });

}


if(crmClose){

    crmClose.addEventListener("click", closeCRMModal);

}


function closeCRMModal(){

    crmModal.classList.remove("active");

    document.body.style.overflow = "";

}


if(crmNext){

    crmNext.addEventListener("click", () => {

        crmCurrent++;

        if(crmCurrent >= crmImages.length){
            crmCurrent = 0;
        }

        updateCRMImage();

    });

}


if(crmPrev){

    crmPrev.addEventListener("click", () => {

        crmCurrent--;

        if(crmCurrent < 0){
            crmCurrent = crmImages.length - 1;
        }

        updateCRMImage();

    });

}


if(crmModal){

    crmModal.addEventListener("click", (e) => {

        if(e.target === crmModal){
            closeCRMModal();
        }

    });

}


document.addEventListener("keydown", (e) => {

    if(!crmModal || !crmModal.classList.contains("active")){
        return;
    }

    if(e.key === "Escape"){
        closeCRMModal();
    }

    if(e.key === "ArrowRight"){
        crmNext.click();
    }

    if(e.key === "ArrowLeft"){
        crmPrev.click();
    }

});


// ===========================
// GALERÍA BOT WHATSAPP
// ===========================

const botModal = document.getElementById("botModal");
const botOpen = document.querySelector(".bot-gallery-btn");
const botClose = document.getElementById("botClose");

const botImage = document.getElementById("botImage");
const botCaption = document.getElementById("botCaption");
const botCounter = document.getElementById("botCounter");

const botPrev = document.getElementById("botPrev");
const botNext = document.getElementById("botNext");


const botImages = [
    {
        src: "img/bot-whatsapp/bot (1).jpg",
        caption: "Inicio y menú principal"
    },
    {
        src: "img/bot-whatsapp/bot (2).jpg",
        caption: "Participación y regreso al menú"
    },
    {
        src: "img/bot-whatsapp/bot (3).jpg",
        caption: "Consulta personalizada"
    },
    {
        src: "img/bot-whatsapp/bot (4).jpg",
        caption: "Derivación automática al asesor"
    }
];


let botCurrent = 0;


function updateBotImage(){

    botImage.src = botImages[botCurrent].src;

    botCaption.textContent =
        botImages[botCurrent].caption;

    botCounter.textContent =
        `${botCurrent + 1} / ${botImages.length}`;

}


if(botOpen){

    botOpen.addEventListener("click", () => {

        botCurrent = 0;

        updateBotImage();

        botModal.classList.add("active");

        document.body.style.overflow = "hidden";

    });

}


function closeBotModal(){

    botModal.classList.remove("active");

    document.body.style.overflow = "";

}


if(botClose){

    botClose.addEventListener("click", closeBotModal);

}


if(botNext){

    botNext.addEventListener("click", () => {

        botCurrent++;

        if(botCurrent >= botImages.length){
            botCurrent = 0;
        }

        updateBotImage();

    });

}


if(botPrev){

    botPrev.addEventListener("click", () => {

        botCurrent--;

        if(botCurrent < 0){
            botCurrent = botImages.length - 1;
        }

        updateBotImage();

    });

}


if(botModal){

    botModal.addEventListener("click", (e) => {

        if(e.target === botModal){
            closeBotModal();
        }

    });

}
