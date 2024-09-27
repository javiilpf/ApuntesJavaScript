export const products=[
    {
        name: "HP150 teclado",
        price: 15,
        image:"https://m.media-amazon.com/images/I/51ipk2"
    },
    {
        name: "Ratón Gaming",
        price: 29,
        image:"https://m.media-amazon.com/images/I/61qN9d08hgL._AC_SX425_.jpg"
    },
    {
        name: "pantalla gawfolk",
        price: 129,
        image: "https://m.media-amazon.com/images/I/71whcT4n8nL._AC_SX425_.jpg"
    }
];

export const calTotalPrice=(products)=>{
    return products.reduce((acc, product)=>acc+product.price, 0);
}

export const productsIva = (products, iva) => {
    // products.map((product)=>{
    //     const priceIva=product.price + iva;
    //     product.priceIva=priveIva;
    //     return product
    // });
    products.map((product)=>({...product, priceIva: product.price*iva}));
}
