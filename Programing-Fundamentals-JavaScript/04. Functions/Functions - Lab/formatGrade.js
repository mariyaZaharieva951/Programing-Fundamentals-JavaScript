function formatGrade(grade) {

    let formatingGrade = grade.toFixed(2);
    let description;

if(grade < 3.00) {
    formatingGrade = 2;
    description = "Fail";
}else if(grade < 3.50) {
    description = "Poor";
}else if(grade < 4.50) {
    description = "Good";
}else if(grade < 5.50) {
    description = "Very good";
}else if(grade >= 5.50) {
    description = "Excellent";
}
 

console.log(`${description} (${formatingGrade})`);

}

formatGrade(6)