/**
 * Instalar json server npm install json-server
 */

// fetch(URL,)

// http ---> invocaba((req, res)==>{
    
// })
const dataUrl="http://localhost:4000/historialPrecios";
export const insertData=async(newData)=>{
    try{
        const response = await fetch(dataUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newData)
        });
        if (!response.ok) {
            throw new Error('Error al insertar en la base de datos');
        }
        const data=await response.json();
        console.log("Producto insertado correctamente: ", data);
    }catch(error){
        console.error("Error al insertar los datos", error);
    }
}