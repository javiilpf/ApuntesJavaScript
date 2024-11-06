export const users=[
    {name: 'John', age: 25},
    {name: 'Ane', age: 26},
    {name: 'Bob', age: 30},
    {name: 'Alice', age: 28},
    {name: 'Charlie', age: 29}
]

export const loginUsers={
    username1 : {password: "1234", access:[]},
    username2 : {password: "1234", access:[]},
    username3 : {password: "1234", access:[]},
    username4 : {password: "1234", access:[]}

}
// Crear una aplicación que verifique el login y 
//el paswd de un usuario usando promesas, si es 
//correcto mensaje de bienvenida y añadirá a acceso 
//dia-mes-año-hora-min cada vez que accede. Si las 
//credenciales no son correctas mensaje de error, 
//acceso incorrecto.
