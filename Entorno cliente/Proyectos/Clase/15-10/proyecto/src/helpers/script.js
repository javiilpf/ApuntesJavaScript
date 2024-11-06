
// solo se puede exportar una por defecto (default en vez de const)

//Promes de la obtención de los usuarios.

export const obtenerUsuarios=(users) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=> {
            !Array.isArray(users) || users.length ===0
            ?reject(new Error("No hay usuarios"))
            : resolve(users);
        }, 3000);
    });
};

export const verificarLogin=(findUsername, findPassword, dataLogin) => {
    console.log ("Validando ...");
    return new Promise((resolve, reject)=>{
        // aquí valido la contraseña y password.
        
        setTimeout(()=> {
            dataLogin[findUsername] === findPassword?
            resolve({dataLogin[findUsername], findUsername}):
            reject(new Error("Usuario o contraseña incorrecta"))
        }, 3000);    
    })
    
}