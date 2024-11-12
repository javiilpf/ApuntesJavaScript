
// Seleccion de elementos del DOM 
const appDiv=document.getElementById('app');
appDiv.innerText="Hola mundo"; // no usar normalmente innerHTML el innerText es texto plano

appDiv.classList.add("clase1", "clase2");

// Seleccion de className
const items=document.getElementsByTagName("items");
let n=1
for (const i of items) {
  //i.textContent=`hola amigo ${++n}`
  i.innerText=`hola amigo ${++n}`
}

// seleccion por clase
const saludoP=document.querySelector(".saludo");

// traer todos por clase
const saludos=document.querySelectorAll(".saludos");

saludos.forEach((saludo, index)=>{
  saludo.innerText=`Hola mundo ${index}`
})

// añadimos atributos a una etiqueta

const miGit=document.getElementById("miGit");
miGit.setAttribute("target", "_blank");
//miGit.removeAttribute("target", "_blank")
miGit.innerText="Ir a mi gitHub";
//text content