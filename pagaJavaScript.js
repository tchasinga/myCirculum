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
