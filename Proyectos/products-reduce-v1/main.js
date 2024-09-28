// ----------------- Importaciones librerias ----
import "./styles/tailwind.css";

// ----------------- Importaciones propias ------
import {products} from './public/helpers/products.js'
import {callTotalPrice, productIVA} from './helpers/scripts.js'

// ----------------- Definición de variables ----
const appDiv = document.getElementById('app');

// ----------------- Inicio de ejecución --------
appDiv.innerHTML = `${products.map((product) => 
    `<div class="bg-white rounded-lg shadow-md p-6 transformation duration-300 hover:scale-105 hover:shadow-xl">
        <div class="w-full h-40 mb-4 overflow-hidden">
            <img class="w-full h-full object-contain" src="${product.image}" alt="${product.name}"/>
        </div>
        <h2 class="text-lg font-bold mb-2">${product.name}</h2>
        <h2>${product.price}</h2>
    </div>`).join('')}`;
