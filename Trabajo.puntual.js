// codigos terminados en 7
function crearClaseEmprendedor() {
  class Emprendedor {
    constructor(nombre, apellido, libros, mascotas) {
        // El constructor de la clase Emprendedor recibe nombre (string), apellido (string), libros (array de objetos), mascotas (array de strings)
        // Inicializar las propiedades del emprendedor con los valores recibidos como argumento

        // Tu código aca:
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
        

    }

    addMascota(mascota) {
      // este método debe agregar una mascota (mascota) al arreglo de mascotas del emprendedor.
      // no debe retornar nada.

      // Tu código aca:
      this.mascotas.push(mascota);
    }

    getMascotas() {
        // El método 'getMascotas' debe retornar la cantidad de mascotas que tiene el emprendedor.
        // Ej:
        // Suponiendo que el emprendedor tiene estas mascotas: ['perro', 'gato']
        // emprendedor.getMascotas() debería devolver 2

        // Tu código aca:
        return this.mascotas.length;
        
    }

    addBook(book, autor) {
        // El método 'addBook' recibe un string 'book' y un string 'autor' y debe agregar un objeto:
        // { nombre: book, autor: autor} al arreglo de libros del emprendedor.
        // No debe retornar nada.

        // Tu código aca:
        this.libros.push({nombre: book, autor: autor});

    }

    getBooks() {
        // El método 'getBooks' debe retornar un arreglo con sólo los nombres del arreglo de libros del emprendedor.
        // Ej:
        // Suponiendo que el emprendedor tiene estos libros: [{nombre: 'El señor de las moscas',autor: 'William Golding'}, {nombre: 'Fundacion', autor: 'Isaac Asimov'}]
        // emprendedor.getBooks() debería devolver ['El señor de las moscas', 'Fundacion']

        // Tu código aca:
        let libros = [];
        for (let i = 0; i < this.libros.length; i++) {
            libros.push(this.libros[i].nombre);
        }
        return libros;
    }

    getFullName() {
        // El metodo getFullName debe retornar un string con el nombre y apellido del emprendedor.
        // ej:
        // Suponiendo que el emprendedor tiene: nombre: 'Elon' y apellido: 'Musk'
        // emprendedor.getFullName() deberia devolver 'Elon Musk'

        // Tu código aca:
        return this.nombre + ' ' + this.apellido;

    }
}

return Emprendedor;
} 

const Emprendedor = crearClaseEmprendedor();

const nombre = prompt("Ingrese el nombre del emprendedor:");
const apellido = prompt("Ingrese el apellido del emprendedor:");
const libros = prompt("Ingrese los libros del emprendedor (separados por coma):").split(",");
const mascotas = prompt("Ingrese las mascotas del emprendedor (separadas por coma):").split(",");

const emprendedor = new Emprendedor(nombre, apellido, libros, mascotas);
