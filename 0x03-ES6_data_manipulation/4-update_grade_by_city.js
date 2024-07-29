export default fucntion updateStudentGradeByCity(students, city, newGrades) {
    if (!Array.isArray(students) || typeof city !== 'string' || !Array.isArray(newGrades)) {
        return [];
    }
    return students
        .filter(students => student.location === city)
        .map(student => {
            const gradeObj = newGrades.find(grade => grade.studentId === student.id);
            const grade = gradeObj ? gradeObj.grade : 'N/A';
            return { ...student, grade}
        });
}

