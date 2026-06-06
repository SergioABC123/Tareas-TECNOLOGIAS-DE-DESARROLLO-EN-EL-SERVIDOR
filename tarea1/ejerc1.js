const personas =
[
  { id: 1, name: "Ana", roles: ["admin", "editor"] }, 
  { id: 2, name: "Luis", roles: ["editor"] },          
  { id: 1, name: "Ana", roles: ["viewer"] }                
]

function normalizar(array){
    let personitas= {}; // creo los objetillos
    array.forEach ((user)=> { // recorro a el arreglo de personas orig y el indice se llamará user
        if(personitas[user.id]){ // vemos si ya tenemos a un objeto con el mismo id del indice en el que estamos
            let roles2= personitas[user.id].roles 
            roles2.push(...user.roles);
            personitas[user.id].roles = [...new Set(personitas[user.id].roles)]; 
            // roles2 afecta directamente a los roles dentro de personitas
            // entonces para evitar los repetidos, me ayudo del new set 
            // roles2= personitas[user.id].roles
        }
        else{
            personitas[user.id]= {...user} // agregamos el objeto con su llave unica que sería su id
        }
    })
    
    return console.log(personitas)
}

normalizar(personas);
