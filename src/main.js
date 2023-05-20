const natinat = {
  name: 'Natalia',
  age: '20',
  cursosAprobados: [
    "Curso Definitivo de HTML y CSS",
    "Curso Practico de HTML y CSS",
  ],
  aprobarCurso(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso)
  }
};

// Hacer que Natalia apruebe otro curso
natinat.cursosAprobados.push('Curso de Responsive Design')
natinat.name = 'Nath';
natinat.age += 1;
natinat.aprobarCurso('Curso Basico de POO con JavaScript')

function Student(name, age, cursosAprobados) {
  this.name = name;
  this.age = age;
  this.cursosAprobados = cursosAprobados;

  // this.aprobarCurso = function (nuevoCurso) {
  //   this.cursosAprobados.push(nuevoCurso);
  // }
}

Student.prototype.aprobarCurso = function (nuevoCurso) {
  this.cursosAprobados.push(nuevoCurso);
}

const jeresc = new Student(
  'Jeremias',
  18,
  [
    'Curso de Introduccion a la Produccion de Videojuegos',
    'Curso de Responsive Design'
  ]
)

jeresc.aprobarCurso('Curso de Unreal Engine')

// Prototipos con la sintaxis de Class

class Teacher {
  constructor(name, edad, cursosInstruidos) {
    this.name = name;
    this.edad = edad;
    this.cursosInstruidos = cursosInstruidos;
  }

  intruirCurso(nuevoCurso) {
    this.cursosInstruidos.push(nuevoCurso);
  }
}

const juandc = new Teacher(
  'Juan',
  24,
  [
    'Curso Basico de POO con JS',
    'Curso Intermedio de POO con JS',
    'Curso de ReactJS'
  ]
)

juandc.intruirCurso('Curso Basico de JS')
juandc.intruirCurso('Curso Practico de JS') 