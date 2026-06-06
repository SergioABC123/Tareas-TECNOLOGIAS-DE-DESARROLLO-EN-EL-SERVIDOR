const fs = require('fs');
function crearLogger() {
    let nivel = 'todo';      
    let output = 'consola';  

    function enviar(msg) {   // recibimos el mensaje 
        if(output === 'consola'){ // si queremos que lo muestre en consola
            console.log(msg);
        }
        else {
            fs.appendFileSync('log.txt', msg + '\n');
        }
    }

    return {
        info: (msg) => {
            if (nivel === 'todo'){ // validamos si podemos enviar el mensaje a la funcion
                enviar(msg);
            }
        },
        warn: (msg) => {
            if (nivel === 'todo' || nivel === 'warn'){ // validamos si podemos enviar el mensaje a la funcion
                enviar(msg);
            }
        },
        error: (msg) => {
            if (nivel === 'todo' || nivel === 'warn' || nivel === 'error'){ // validamos si podemos enviar el mensaje a la funcion
                enviar(msg);
            }
        },
        configurar: (opciones) =>  { // configuramos para definir el nivel y donde queremos que nos muestre el mensaje
            if (opciones.output) 
                output = opciones.output;
            if (opciones.nivel) 
                nivel = opciones.nivel;
        } 
    }
}

const logger = crearLogger();

logger.info("mensaje de info");      // debe aparecer
logger.warn("mensaje de warn");      // debe aparecer
logger.error("mensaje de error");    // debe aparecer

logger.configurar({ nivel: 'error' });

logger.info("esto no debe aparecer");   // silencio
logger.warn("esto tampoco");            // silencio
logger.error("esto sí");               // debe aparecer