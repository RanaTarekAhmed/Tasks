const addGrade = require("./modules/add-grade");
const readGrades = require("./modules/read-grades");
const deleteGrade = require("./modules/delete-grade");
const updateGrade = require("./modules/update-grade");


addGrade("Tarek", "Math", 95);
addGrade("Rana", "Physics", 88);
addGrade("Ahmed", "English", 91);
console.log(readGrades());
updateGrade("Rana", 100);
console.log(readGrades());
deleteGrade("Tarek");
console.log(readGrades());
