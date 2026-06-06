function crearContador(){
    let contador= 0;

    return{
        incrementar: () => contador++,
        disminuir: () => contador--,
        reset: () => contador= 0,
        obtenerCuenta: () => contador
    }
}

const c = crearContador();

console.log(c.obtenerCuenta()); // 0
c.incrementar();
c.incrementar();
c.incrementar();
c.disminuir();
console.log(c.obtenerCuenta()); // 2
c.reset();
console.log(c.obtenerCuenta()); // 0

