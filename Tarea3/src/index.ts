enum Roles{
    'admin',
    'manager',
    'cliente'
}

enum Status{
    'nuevo',
    'activo',
    'bloqueado',
    'eliminado'
}

interface User{
    id: number,
    nombre: string,
    readonly email: string,
    role: Roles,
    status: Status
}

const users: User[] = [
  {
    id: 1,
    nombre: "Juan Perez",
    email: "juan.perez@iteso.mx",
    role: Roles.admin,
    status: Status.activo
  },
  {
    id: 2,
    nombre: "María González",
    email: "maria.gonzalez@iteso.mx",
    role: Roles.manager,
    status: Status.activo
  },
  {
    id: 3,
    nombre: "Carlos Ramírez",
    email: "carlos.ramirez@iteso.mx",
    role: Roles.cliente,
    status: Status.nuevo
  },
  {
    id: 4,
    nombre: "Sofía Hernández",
    email: "sofia.hernandez@iteso.mx",
    role: Roles.admin,
    status: Status.activo
  },
  {
    id: 5,
    nombre: "Luis Torres",
    email: "luis.torres@iteso.mx",
    role: Roles.cliente,
    status: Status.bloqueado
  },
  {
    id: 6,
    nombre: "Andrea López",
    email: "andrea.lopez@iteso.mx",
    role: Roles.manager,
    status: Status.activo
  },
  {
    id: 7,
    nombre: "Diego Morales",
    email: "diego.morales@iteso.mx",
    role: Roles.cliente,
    status: Status.nuevo
  },
  {
    id: 8,
    nombre: "Valeria Ortiz",
    email: "valeria.ortiz@iteso.mx",
    role: Roles.cliente,
    status: Status.activo
  },
  {
    id: 9,
    nombre: "Roberto Jiménez",
    email: "roberto.jimenez@iteso.mx",
    role: Roles.manager,
    status: Status.eliminado
  },
  {
    id: 10,
    nombre: "Isabela Vargas",
    email: "isabela.vargas@iteso.mx",
    role: Roles.cliente,
    status: Status.activo
  },
  {
    id: 11,
    nombre: "Fernando Castillo",
    email: "fernando.castillo@iteso.mx",
    role: Roles.admin,
    status: Status.activo
  },
  {
    id: 12,
    nombre: "Camila Reyes",
    email: "camila.reyes@iteso.mx",
    role: Roles.cliente,
    status: Status.bloqueado
  },
  {
    id: 13,
    nombre: "Alejandro Mendoza",
    email: "alejandro.mendoza@iteso.mx",
    role: Roles.manager,
    status: Status.activo
  },
  {
    id: 14,
    nombre: "Daniela Flores",
    email: "daniela.flores@iteso.mx",
    role: Roles.cliente,
    status: Status.nuevo
  },
  {
    id: 15,
    nombre: "Rodrigo Aguilar",
    email: "rodrigo.aguilar@iteso.mx",
    role: Roles.cliente,
    status: Status.eliminado
  }
];

function findUserById (idisillo: number): User | undefined{ // devolvemos a alguien o undefines si no hay
    return users.find(alguien => alguien.id === idisillo);
}

function findUserByName (nombresillo: string): User[]{ // devolvemos a los usuarios que
    return users.filter(alguien => alguien.nombre.includes(nombresillo)); // usamos filter para usar el includes
}

function findUserByEmail (emailsillo: string): User[]{
    return users.filter(alguien => alguien.email.includes(emailsillo));
}

function findUserByRole (rolsillo: Roles): User[]{
    return users.filter(alguien => alguien.role === rolsillo);
}

function findUserByStatus (statusillo: Status): User[]{
    return users.filter(alguien => alguien.status === statusillo);
}

console.log("Usuario con id 1: ");
console.log(findUserById(1));
console.log("Usuarios con nombre Juan: ");
console.log(findUserByName("Juan"));
console.log("Usuarios con email con Juan: ");
console.log(findUserByEmail("juan"));
console.log("Usuarios con rol de admin: ");
console.log(findUserByRole(Roles.admin));
console.log("Usuarios con status activo: ");
console.log(findUserByStatus(Status.activo));

