const usuarios = [
  { id: 1, nombre: "Ana López",    correo: "ana@gmail.com",     edad: 23 },
  { id: 2, nombre: "Carlos Ruiz",  correo: "carlos@hotmail.com", edad: 31 },
  { id: 3, nombre: "María Torres", correo: "maria@gmail.com",   edad: 27 },
  { id: 4, nombre: "Luis Pérez",   correo: "luis@yahoo.com",    edad: 19 },
  { id: 5, nombre: "Sofía Gómez",  correo: "sofia@gmail.com",   edad: 25 },
];

const correoABuscar = "maria@gmail.com";

// Ciclo for ----------------------------------------------------------------------
function buscarConCiclo(arreglo, correo) {
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i].correo === correo) {
      return arreglo[i];
    }
  }
  return null; // No encontrado
}

const resultadoCiclo = buscarConCiclo(usuarios, correoABuscar);
console.log("for");
console.log(resultadoCiclo);

// metodo find ----------------------------------------------------------------------
function buscarConFind(arreglo, correo) {
  return arreglo.find(usuario => usuario.correo === correo);
}

const resultadoFind = buscarConFind(usuarios, correoABuscar);
console.log("\nfind");
console.log(resultadoFind);

// indice ----------------------------------------------------------------------
function construirIndice(arreglo, campo) {
  const indice = {};
  for (const elemento of arreglo) {
    indice[elemento[campo]] = elemento;
  }
  return indice;
}

const indicePorCorreo = construirIndice(usuarios, "correo");

function buscarConIndice(indice, correo) {
  return indice[correo];
}

const resultadoIndice = buscarConIndice(indicePorCorreo, correoABuscar);
console.log("\nÍndice");
console.log(resultadoIndice);


/*
  DIFERENCIAS ENTRE LOS TRES ENFOQUES: (mejoría de redaccion por IA)

  1. Ciclo for:
     - Recorre el arreglo elemento por elemento.
     - Su complejidad o costo des de O(n) por busqueda.
     - Es facil de entender (funcionamiento).

  2. Método find():
     - Su complejidad O(n) por cada busqueda.
     - Es código más corto y legible.

  3. índice:
     - Se construye una estructura auxiliar UNA sola vez, donde
       el correo es la llave para acceder directo al usuario.
     - Su complejidad  O(n) al construir el índice, pero O(1) en cada búsqueda.
     - Extremadamente rápido si se hacen muchas búsquedas.
     - Usa más memoria, y tiene un costo inicial de construcción.

  MI RECOMENDACIÓN:

  - Para búsquedas simples o de una sola vez → usar find().
    Es la opción más limpia y legible sin sacrificar nada.

  - Para múltiples búsquedas sobre el mismo arreglo → usar el índice.
    Si voy a buscar 100 correos distintos en el mismo arreglo,
    el índice construido una vez me ahorra recorrer el arreglo 100 veces.

  El ciclo for lo reservaría solo cuando necesito lógica más compleja
  dentro de la iteración que find() no permite fácilmente.

*/