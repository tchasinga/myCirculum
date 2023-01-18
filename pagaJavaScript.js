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
/*
var typed = new Typed(".autoTyped",{
    strings : [
        "Coding in Java-aplication",
        "Coding in HTML-CSS-JS",
        "Full-stack Dev",
    ],
    typeSpeed: 150,
    backSpeed: 150,
    loop : true
})
/*/
 const texChange =  document.getElementById("autoTyped");
  const textLoad = () =>{
    setTimeout (() =>{
        texChange.textContent = " Web UI Developers";
    },0);

    setTimeout (() =>{
        texChange.textContent = " Java Software programer";
    },4000);
    setTimeout (() =>{
        texChange.textContent = " Coding in JavaScript";
    },8000);
  }
  textLoad();
  setInterval(textLoad,12000);