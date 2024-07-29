export default function getListStudentIds(students) {
    // Check if the passed argument is an array
    if (!Array.isArray(students)) {
        return [];
    }
    // Utilise map to extract the ids from the student objects
    return students.map(student => student.id);
}


