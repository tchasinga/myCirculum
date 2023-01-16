const hOne = document.getElementById('h1-set');
const letter = "I'm Balolebwami";
const secondletter= "My Circulum";

hOne.addEventListener("mouseover",functionOne);
hOne.addEventListener("mouseout" , Mouseouting);
 function functionOne(){
    hOne.innerHTML= letter;
 }
function Mouseouting() {
    return(hOne.innerHTML=secondletter);
}
var typed = new Typed(".autyped",{
    strings : [
        "Coding in Java-aplication",
        "Coding in HTML-CSS-JS",
        "Full-stack Dev",
    ],
    typeSpeed: 150,
    backSpeed: 150,
    loop : true
});

<script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script> 