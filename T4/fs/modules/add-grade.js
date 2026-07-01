const readGrades = require("./read-grades");
const saveGrades = require("./save-grades");

function addGrade(name, subject, grade) 
{
    const grades = readGrades();
    const student = {
        id: grades.length + 1,
        name,
        subject,
        grade
    };
    grades.push(student);
    saveGrades(grades);
    console.log("Grade Added Successfully!");
}

module.exports = addGrade;
