export default function updateStudentGradeByCity(list, city, newGrade) {
    return list
      .filter((obj) => obj.location === city)
      .map((student) => {
      // Create a copy of the student object
        const updatedStudent = { ...student };
  
        // Update the grade if found in newGrade
        newGrade.forEach((studentGrade) => {
          if (studentGrade.studentId === student.id) {
            updatedStudent.grade = studentGrade.grade;
          }
        });
  
        // If the grade is not found, set it to 'N/A'
        if (!Object.prototype.hasOwnProperty.call(updatedStudent, 'grade')) {
          updatedStudent.grade = 'N/A';
        }
  
        return updatedStudent;
      });
  }

  