const readGrades = require("./read-grades");
const saveGrades = require("./save-grades");

function updateGrade(name, newGrade) 
{
    const grades = readGrades();
    const student = grades.find( s => s.name === name);
    if (!student)
    {
        console.log("Student Not Found!");
        return;
    }
    student.grade = newGrade;
    saveGrades(grades);
    console.log("Grade Updated successfully!");
}

module.exports = updateGrade;