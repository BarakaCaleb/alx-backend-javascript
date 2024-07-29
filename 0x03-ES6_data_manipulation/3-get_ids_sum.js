export default function getStudentIdsSum(students) {
    return list.reduce((sum, student) => sum + student.id, 0);
  }

