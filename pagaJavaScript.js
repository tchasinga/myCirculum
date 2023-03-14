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

 const texChange =  document.getElementById("autoTyped");
  const textLoad = () =>{
    setTimeout (() =>{
        texChange.textContent = " Web UI Developer";
    },1000);

    setTimeout (() =>{
        texChange.textContent = " Java Software programer ";
    },2000);
    setTimeout (() =>{
        texChange.textContent = " Front-end Dev";
    },2000);
    setTimeout (() =>{
        texChange.textContent = " Back-end Dev";
    },2000);
    setTimeout (() =>{
        texChange.textContent = " a Improver skills important in FullStack Dev";
    },2000);
    setTimeout (() =>{
        texChange.textContent = " Coding in JavaScript";
    },2000);
  }
  textLoad();
  setInterval(textLoad,12000);
