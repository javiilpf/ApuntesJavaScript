

// documet 
//   .getElementsById("app")

import { fetchAllCharacterAsync } from "./helpers/script";

//   .addEventListener("click", fetchAllCharacterAsync);
document
  .getElementById("fetching-characters-async")
  .addEventListener("click", fetchAllCharacterAsync);