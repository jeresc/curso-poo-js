// function videoPlay(id) {
//   const urlSecreta = 'https://soysecretisimo.com'
//   console.log('Se esta reproduciendo: ' + urlSecreta)
// }
// function videoStop(id) {
//   const urlSecreta = 'https://soysecretisimo.com'
//   console.log('Se pauso: ' + urlSecreta)
// }

// export class PlatziClass {
//   constructor({
//     name,
//     videoID
//   }) {
//     this.name = name;
//     this.videoID = videoID;
//   }

//   reproducir() {
//     videoPlay(this.videoID);
//   }
//   pausar() {
//     videoStop(this.videoID);
//   }
// }

class Comment {
  constructor({
    content,
    studentName,
    studentRole = 'estudiante',
  }) {
    this.content = content,
    this.studentName = studentName,
    this.studentRole = studentRole;
    this.likes = 0;
  }

  publicar() {
    console.log(`
    ${this.studentName} (${this.studentRole})
    ${this.likes} likes
    ${this.content}
    `)
  }
}

class Course {
  #name

  constructor({
    name,
    classes = [],
    isFree = false,
    lang = 'spanish',
  }) {
    this.#name = name;
    this.classes = classes;
    this.isFree = isFree;
    this.lang = lang;
  }

  get name() {
    return this.#name;
  }

  set name(newName) {
    newName === "Curso Malito de Programacion Basica"
      ? console.error('¿?.. ni lo intentes')
      : this.#name = newName
  }
}

class LearningPath {
  constructor({
    name,
    courses = [],
  }) {
    this.name = name;
    this.courses = courses
  }
}


const cursoProgBasica = new Course({
  name: "Curso de Programacion Basica",
  isFree: true,
})
const cursoDefinitivoHTML = new Course({
  name: "Curso Definitivo de HTML y CSS",
})
const cursoPractivoHTML = new Course({
  name: "Curso Practico de HTML y CSS",
  lang: 'english',
})

// cursoDefinitivoHTML.name = "Curso Malito de Programacion Basica"

const webDev = new LearningPath({
  name: 'Escuela Desarrollo Web',
  courses : [
    cursoProgBasica,
    cursoDefinitivoHTML,
    cursoPractivoHTML
  ]
})

const gameDev = new LearningPath({
  name: 'Escuela de Videojuegos',
  courses: [
    'Curso de Unreal Engine',
    'Curso de Unity 3D',
    'Curso de Introduccion a la Produccion de Videojuegos'
  ]
})

const dataCience= new LearningPath({
  name: 'Escuela de Data Science',
  courses: [
    'Curso de DataViz',
    'Curso de Data BUsiness',
  ]
})

class Student {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    }
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }
  publicarComentario(commentContent) {
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
    })
    comment.publicar();
  }
}

class FreeStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    newCourse.isFree
      ? this.approvedCourses.push(newCourse)
      : console.warn(`Lo siento ${this.name}, solo puedes tomar cursos gratuitos`)
  }
}

class BasicStudent extends Student {
  constructor(props) {
    super(props);
  }
  approveCourse(newCourse) {
    newCourse.lang !== 'english'
      ? this.approvedCourses.push(newCourse)
      : console.warn(`Lo siento ${this.name}, no puedes tomar cursos en ingles`)
  }
}

class ExpertStudent extends Student {
  constructor(props) {
    super(props);
  }
  approveCourse(newCourse) {
    this.approvedCourses.push(newCourse)
  }
}

class Teacher extends Student {
  constructor(props) {
    super(props);
  }
  approveCourse(newCourse) {
    this.approvedCourses.push(newCourse)
  }

  publicarComentario(commentContent) {
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
      studentRole: 'profesor'
    })
    comment.publicar();
  }
}

const juandc = new FreeStudent({
  name: 'JuanDC',
  username: 'juandc',
  email: 'juandc@platzi.com',
  twitter: 'fjuandc',
  learningPaths: [webDev, gameDev]
})

const miguelito = new BasicStudent({
  name: 'Miguelito',
  username: 'miguelitofeliz',
  email: 'miguelito@platzi.com',
  miguelito: 'miguelito_feliz',
  learningPaths: [webDev, dataCience]
})

const freddy = new Teacher({
  name: 'Freedy',
  username: 'freddier',
  email: 'freddier@platzi.com',
  instagram: 'freddier'
})

// console.log(juandc)
// console.log(miguelito)

// Ejercicio

// Usando el set de la propiedad name valida siempre que se le quiera asignar un valor lo siguiente:

// Que sea de tipo string.
// Si es string convierte la primera letra de cada palabra del nombre en mayúsculas
// Si no es un string no se cambia el valor de la propiedad name.

// class Course {
//   constructor({
//     name,
//     classes = [],
//   }) {
//     this.name = name;
//     this.classes = classes;
//   }

//   get name() {
//     return this._name;
//   }

//   set name(nuevoNombrecito) {
//     typeof(nuevoNombrecito) == 'string' && nuevoNombrecito.trim() !== ''
//       ? this._name = nuevoNombrecito.split(' ').map(text => text.charAt(0).toUpperCase() + text.slice(1)).join(' ').trim()
//       : this._name
//   }
// }

// const miCurso = new Course({
//   name: 'Curso Lol',
// })
// miCurso.name = 'curso nuevo title'
// miCurso.name = ''
// console.log(miCurso.name)
// miCurso.name = 23232