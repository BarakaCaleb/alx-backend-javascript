import readDatabase from '../utils';

function displayStudents(students) {
  let message = 'This is the list of our students';
  Object.keys(students).sort().forEach((field) => {
    message += `\nNumber of students in ${field}: ${students[field].length}. `;
    message += `List: ${students[field].join(', ')}`;
  });
  return message;
}

function displayStudentsByMajor(students, major) {
  return `List: ${students[major].join(', ')}`;
}

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2])
      .then((students) => response.send(displayStudents(students)))
      .catch(() => {
        response.status(500);
        response.send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    readDatabase(process.argv[2])
      .then((students) => {
        if (major !== 'CS' && major !== 'SWE') {
          response.status(500);
          response.send('Major parameter must be CS or SWE');
        } else {
          response.send(displayStudentsByMajor(students, major));
        }
      })
      .catch(() => {
        response.status(500);
        response.send('Cannot load the database');
      });
  }
}

module.exports = StudentsController;
export default StudentsController;
