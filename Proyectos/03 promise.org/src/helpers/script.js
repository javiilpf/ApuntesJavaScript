// // AQUÍ VAMOS A LLAMAR A DOM

// const VITE_API_URL = import.meta.env.VITE_API_URL;
// const VITE_IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL;

// export async function fetchAllCharacterAsync() {
  
//   let allCharacters = []; // Declarar el array vacío. IMPORTANTE
//   let currentPage = 1; 
//   let hasNext = true; // Variable booleana

//   try {
//     while (hasNext) {
//       const response = await fetch(`${VITE_API_URL}?page=${currentPage}`);
//       if (!response.ok) {
//         throw new Error("No puedo obtener información de la api de Star Wars");
//       }
      
//       const data = await response.json();
      

//       // Agregar los resultados al array allCharacters
//       allCharacters = allCharacters.concat(data.results);

//       // Verificar si hay más páginas
//       hasNext = data.next !== null;
//       currentPage++;
//     }

//     // Guardar la información en el localStorage
//     localStorage.setItem("StarWars", JSON.stringify(allCharacters));
//     // renderizar el DOM
//     renderCharacters(allCharacters);

//   } catch (error) {
//     console.error("Error en la petición fetchAllCharacterAsync", error);
//   }
// }

// function renderCharacters(characters){
//     //1. Seleccionamos la etiqueta div donde vamos a renderizar los personajes.
//     const resultDiv=document.getElementById("app");
//     const suma= resultDiv === 17 ? resultDiv=18 : resultDiv;
//     resultDiv.innerHTML=""; // Limpiamos el contenido del DIV
//     //2. Iteramos sobre el array de characters
//     characters.forEach((character, index)=>{
//         // Creamos un DIV para cada personaje.
//         const characterId = index + 1;
//         const characterDiv= document.createElement("div"); // Para crear un elemento con DOM, se pasa como parámetro el elemento que quiero crear con DOM
//         characterDiv.className="character";
//         index > 16 ? (characterId=characterId+1) : characterId
        
//         characterDiv.innerHTML=`
//         <h2>${character.name}</h2>
//         <p>Altura: ${character.height}</p>
//         <img src="${VITE_IMAGE_BASE_URL}${characterId}.jpg" alt="${character.name}" width="200"/>
//         `;
//         // 3. Añadimos el characterDiv (hijo) al resultDiv (padre)
//         resultDiv.appendChild(characterDiv);
//     })
// }

// // document
// //     .getElementById("app")
// //     .addEventListener("click", () => {



// //                      MI VERSION
// //     const urlData = import.meta.env.VITE_URL_API;
  
// //     const getUsers = () => {
// //       fetch(urlData)
// //         .then((response) => {
// //           if (!response.ok) {
// //             throw new Error('Error en la petición');
// //           }
// //           return response.json();
// //         })
// //         .then((data) => {
// //           console.log("La respuesta es ", data);
// //         })
// //         .catch((error) => {
// //           console.error("Error: ", error);
// //         });
// //     };
  
// //     getUsers();
// //   });
  

export async function fetchAllCharacterPromiseAll(){
  try{
    const promisePagesArray=[];
    // suponemos que hay 9 páginas.
    for (let i=1; i<9; i++){
      promisePagesArray.push(fetch(`${VITE_API_URL}?page=${i}`)
      .then(response =>{
        if (!response.ok) {
          throw new Error('Error en la petición');
        }
        return response.json();
      })
      .catch((error)=>{
        console.error("Error en la petición", error)
      }));
      // ejecutar todas las promesas:
      

      const resultPromiseAll=await Promise.all(promisePagesArray);
      console.log("Resultado de promiseAll", resultPromiseAll);
    
    }

  }catch(error){

  }
}