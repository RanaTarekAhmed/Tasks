function hospital(patients)
{
    let treatedImmediately = [];
    let normalTreated = [];
    let missingDataList = [];
    for (let i = 0; i < patients.length; i++)
    {
        if (patients[i].hasData === false)
        {
            missingDataList.push(patients[i]);
            continue;
        }
        if (patients[i].condition === "critical") treatedImmediately.push(patients[i]);
        else normalTreated.push(patients[i]);
    }
    for (let i = 0; i < normalTreated.length-1; i++)
    {
    for (let j = 0; j < normalTreated.length-1-i; j++)
    {
        if (normalTreated[j].severity < normalTreated[j+1].severity) [normalTreated[j], normalTreated[j+1]] = [normalTreated[j+1], normalTreated[j]];
    }
    }
    return {treatedImmediately, normalTreated, missingDataList};
}



let patients = 
[
    {name:"A", severity:2, hasData:true, condition:"normal"},
    {name:"B", severity:5, hasData:true, condition:"critical"},
    {name:"C", severity:4, hasData:false, condition:"normal"},
    {name:"D", severity:3, hasData:true, condition:"normal"},
    {name:"E", severity:5, hasData:true, condition:"normal"}
];
let r = hospital(patients);
console.log(r.treatedImmediately);
console.log(r.normalTreated);
console.log(r.missingDataList);
