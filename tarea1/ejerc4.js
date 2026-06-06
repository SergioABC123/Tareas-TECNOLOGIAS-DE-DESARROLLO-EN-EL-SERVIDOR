const arreglo1= [];
for (let i = 0; i < 10000; i++) {
    arreglo1.push(i);
}
const arreglo2= [];
for (let i = 0; i < 100000; i++) {
    arreglo2.push(i);
}
const arreglo3= [];
for (let i = 0; i < 1000000; i++) {
    arreglo3.push(i);
}

function filterYmap(arreglo){
    const resultado= arreglo.filter(i => i%2 === 0).map(i => i*2);
}

function reduce0(arreglo){
    const resultado= arreglo.reduce((acc, n) => {
        if (n % 2 === 0) acc.push(n * 2);
            return acc;
    }, []);
}

function for0(arreglo){
    const resultado = [];
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] % 2 === 0) {
            resultado.push(arreglo[i] * 2);
        }
    }
}

function medir(funcion, arreglo){
    const inicio = Date.now();
    funcion(arreglo)
    const fin = Date.now();
    console.log(fin - inicio, 'ms');
}

medir(filterYmap, arreglo3);
medir(reduce0, arreglo3);
medir(for0, arreglo3);

