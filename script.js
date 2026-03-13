let slideIndex = 0;

mostrarSlides();

function mostrarSlides(){

let slides = document.getElementsByClassName("slide");

for(let i=0;i<slides.length;i++){
slides[i].style.display="none";
}

slideIndex++;

if(slideIndex > slides.length){
slideIndex = 1;
}

slides[slideIndex-1].style.display="block";

setTimeout(mostrarSlides,3000);

}

function mostrarHorarios(dia){

let horarios = document.getElementById("horarios")

if(dia === "sabado"){

horarios.innerHTML = `
<div class="horario" onclick="agendar('Sábado','14:00')">14:00</div>
<div class="horario" onclick="agendar('Sábado','16:00')">16:00</div>
<div class="horario" onclick="agendar('Sábado','19:00')">19:00</div>
`

}

if(dia === "domingo"){

horarios.innerHTML = `
<div class="horario" onclick="agendar('Domingo','15:00')">15:00</div>
<div class="horario" onclick="agendar('Domingo','18:00')">18:00</div>
`

}

if(dia === "semana"){

horarios.innerHTML = `
<div class="horario" onclick="agendar('Semana','19:00')">19:00</div>
<div class="horario" onclick="agendar('Semana','20:30')">20:30</div>
`

}

}

function agendar(dia,hora){

let mensagem = `Olá! Gostaria de agendar uma apresentação no ${dia} às ${hora}.`

let link = 'https://www.instagram.com/soares_studio_oficial?igsh=MWh3M2ZyODJnMzVpZA=='

window.open(link,"_blank")

}















