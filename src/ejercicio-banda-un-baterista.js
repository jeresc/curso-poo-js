class Banda {
  constructor({
    nombre,
    generos = [],
  }) {
    this.nombre = nombre;
    this.generos = generos;
    this.integrantes = [];
  }
  agregarIntegrante(integranteNuevo) {
    // Tu código aquí 👈
    this.integrantes.every(i => i.instrumento != 'Bateria')
    ? this.integrantes.push(integranteNuevo)
    : console.log('No se permite mas de un baterista')
  }
}

//Crear clase Integrante
class Integrante {
  // Tu código aquí 👈
  constructor({
    nombre,
    instrumento
  }) {
    this.nombre = nombre;
    this.instrumento = instrumento
  }
}

const miBanda = new Banda({
  nombre: 'Banda Epica',
  generos: 'Rock & Roll'
})

const baterista01 = new Integrante({
  nombre: 'Daniel',
  instrumento: 'Bateria'
})

const baterista02 = new Integrante({
  nombre: 'Juan',
  instrumento: 'Bateria'
})

miBanda.agregarIntegrante(baterista01)
miBanda.agregarIntegrante(baterista02)

console.log(miBanda)