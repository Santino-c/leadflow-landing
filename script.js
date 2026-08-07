const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{threshold:.2});


document.querySelectorAll(
    '.flow-card,.benefit-card,.about-item,.why-card,.stat-card,.service-card'
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