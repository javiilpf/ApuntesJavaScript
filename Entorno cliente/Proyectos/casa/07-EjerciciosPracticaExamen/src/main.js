import { addProduct, getProductos, updateProduct } from "./helpers/script";

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

  const updatear1={ 
    "nombre": "Producto 1_repe", 
    "stock": 200, 
    "precio": 10.99, 
    "categoriaId": 1
  }
  const updatear= await updateProduct(updatear1, 1);
}

init();
