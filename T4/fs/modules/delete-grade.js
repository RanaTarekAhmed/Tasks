const readGrades = require("./read-grades");
const saveGrades = require("./save-grades");

function deleteGrade(name)
{
    const grades = readGrades();
    const deleted = grades.filter(student => student.name !== name);
    saveGrades(deleted);
    console.log("Grade Deleted successfully!");
}

module.exports = deleteGrade;