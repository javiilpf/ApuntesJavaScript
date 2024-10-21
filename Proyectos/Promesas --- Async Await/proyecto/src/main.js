// Realizar una descarga de la data de los users 
//que está en mi web y mostrarla en consola.
import { loginUsers, users } from "./data/data";
import { obtenerUsuarios, verificarLogin } from "./helpers/script";

obtenerUsuarios(users)
  .then((users) => {
    let contador = 0;
    users.forEach(({ name, age }) => {
      setTimeout(() => {
        console.log(`Nombre: ${name}, Edad: ${age}`);
      }, 1000 * contador);
      contador++;
    });
  })
  .catch((error) => {
    console.error(error);
  });

verificarLogin(loginUsers)
  .then((loginUsers) => {
    loginUsers.forEach(({ password, access }) => {
    console.log(`Acceso correcto, ¡Bienvenido, ${loginUsers[acc]}`);
    
    })
  })
  .catch((error) => {
    console.error(new Error("Acceso incorrecto"));
  });
