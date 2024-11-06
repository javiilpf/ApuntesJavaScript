import { deleteMultipleProducts, filterProducts } from "./helpers/script";

const init= async()=>{
  // console.log("------------Ejercicio 1------------")
  // const dataUser=await(fetchUserData());
  // console.log(dataUser);

  // console.log("------------Ejercicio 2------------")
  // const fetchPostUrl=fetchPostWithError();
  // console.log(fetchPostUrl);
  
  // console.log("------------Ejercicio 3------------")
  // const añadir={ 
  //   "id": 3, 
  //   "nombre": "Producto 3", 
  //   "stock": 500, 
  //   "precio": 30.99, 
  //   "categoriaId": 3
  // };
  
  //const añadiendo= await addProduct(añadir);




  //const get=await getProductos();

  // const updatear1={ 
  //   "nombre": "Producto 1_repe", 
  //   "stock": 200, 
  //   "precio": 10.99, 
  //   "categoriaId": 1
  // }
  // const updatear= await updateProduct(updatear1, 1);

  //const borrar=await deleteProducts(1);

  // const cat=
  // {
  //   "id": "3",
  //   "nombre": "pescado",
    
  // }
  // const productandComents= promesa(cat);
//   try{
//     const productsIds=[1,2];
//     const results=await deleteMultipleProducts(productsIds);
//     console.log("Eliminación completada ", results);

//   }catch(error){
//     console.error("Error en la eliminación de productos ", error)
//   }

try{


  const filtros={
    precioMin: 100,
    precioMax: 250,
    stockMin: 5,
    stockMax: 150,
  };
  const results =await filterProducts(filtros);
  console.log(results);

}catch(error){
  console.error(error);
}
 }


init();
