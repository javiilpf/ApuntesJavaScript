# Manual de promesas en javascript

## Estados de las promesas

> - Pendiente **(Pending)** : Es el estado inicial de una promesa que está en proceso.
> - Cumplida **(Fullfiled)**: La promesa se resuelve favorablemente y me devuelve un valor.
> - Rechazada **(Rejected)**: La promesa no resuelve y se devuelve un error.

### Creación de promesas

```javascript
    const miPromesa = new Promise((resolve, reject) => {
        //aquí el código que es asíncrono.
        if(){
            resolve(lo que quiero devolver)
        }else{
            reject(new Error("Error de acceso a la web"));
        }
        });
```

### Uso o consumo de las promesas

```javascript
    miPromesa
        .then((data)==>{
            console.log("La promesa ha sido resuelta", data)
        })
        .catch(error=={
            console.log("Error, promesa rechazada", error)
        })
        .finally()
```
