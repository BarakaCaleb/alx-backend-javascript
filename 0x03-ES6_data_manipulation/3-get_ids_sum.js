export default function getStudentIdsSum(students) {
    return students((sum, student) => sum + student.id, 0);
}

