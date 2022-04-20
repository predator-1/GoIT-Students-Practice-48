//Напишіть функції для роботи з колекцією навчальних курсів courses:

//addCourse(name) - додає курс до кінця колекції
//removeCourse(name) - видаляє курс із колекції
//updateCourse(oldName, newName) – змінює ім'я на нове

const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

addCourse('Express');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
addCourse('CSS'); // 'У вас уже есть такой курс'

removeCourse('React');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
removeCourse('Vue'); // 'Курс с таким имененем не найден'

updateCourse('Express', 'NestJS');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']

function addCourse(course) {
  const courseIndex = courses.indexOf(course);
  if (courseIndex > -1) {
    console.log('course exists');
  } else {
    courses.push(course);
  }
}

function removeCourse(course) {
  const courseIndex = courses.indexOf(course);
  if (courseIndex > -1) {
    courses.splice(courseIndex, 1);
  } else {
    console.log('course do not found');
  }
}

function updateCourse(courseOld, courseNew) {
  const courseIndex = courses.indexOf(courseOld);
  if (courseIndex > -1) {
    courses[courseIndex] = courseNew;
  } else {
    console.log('course do not found');
  }
}
