//Read the file synchronously using the fs.readFileSync method.
//Handle errors if the file doesn't exist.
//Parse the CSV content to extract the students and their respective fields.
//Filter out empty lines in the CSV file.
//Group students by their fields and count them.
//Log the results in the required format.

const fs = require('fs');

//Read file synchronously

const countStudents = (path) => {
    try {
        //Read the file synchronously
        const data = fs.readFileSync(path, 'utf8');
        // Split the data by new lines and remove empty lines
        const lines = data.split('\n').filter((line) => line.trim() !== '');

        if (lines.lengt <=1) {
            console.log('No students found in the database.');
            return;
        }

        const headers = lines[0].split(',');
        const student = lines.slice(1);

        const fields = {};
    }
}