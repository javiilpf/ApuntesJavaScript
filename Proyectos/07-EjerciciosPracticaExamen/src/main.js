import { fetchPostWithError, fetchUserData } from "./helpers/script";

const init= async()=>{
  console.log("------------Ejercicio 1------------")
  const dataUser=await(fetchUserData());
  console.log(dataUser);

  console.log("------------Ejercicio 2------------")
  const fetchPostUrl=fetchPostWithError();
  console.log(fetchPostUrl);
  
  console.log("------------Ejercicio 3------------")
  
}

init();
