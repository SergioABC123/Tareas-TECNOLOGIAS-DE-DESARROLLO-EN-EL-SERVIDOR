const fs = require('fs');
function crearLogger() {
    let nivel = 'todo';      // privado
    let output = 'consola';  

    function enviar(msg) {   // privado, aqui decides consola o archivo
        if(output === 'consola'){
            console.log(msg);
        }
        else {
            fs.appendFileSync('log.txt', msg + '\n');
        }
    }

    return {
        info: (msg) => {
            if (nivel === 'todo'){
                enviar(msg);
            }
        },
        warn: (msg) => {
            if (nivel === 'todo' || nivel === 'warn'){
                enviar(msg);
            }
        },
        error: (msg) => {
            if (nivel === 'todo' || nivel === 'warn' || nivel === 'error'){
                enviar(msg);
            }
        },
        configurar: (opciones) =>  {
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