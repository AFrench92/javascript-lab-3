let submissions = [
    {
        name: "Jane",
        score: 95,
        date: "2020-01-24",
        passed: true,
    },
    {
        name: "Joe",
        score: 77,
        date: "2018-05-14",
        passed: true,
    },
    {
        name: "Jack",
        score: 59,
        date: "2019-07-05",
        passed: false,
    },
    {
        name: "Jill",
        score: 88,
        date: "2020-04-22",
        passed: true,
    }
];

console.log(submissions);

// //2
 const addSubmission = (array, newName, newScore, newDate) => {
     const newObject = {
         name: newName, 
         score: newScore,
         date: newDate,
         passed: (newScore >= 60) ? true:false
     };
     array.push(newObject);
 };

addSubmission(submissions, "Tony", 61, "2020-10-20")

console.log(submissions);

// //3
const deleteSubmissionByIndex = (array, index) => {
    array.splice(index, 1);
};

deleteSubmissionByIndex(submissions, 2);

console.log(submissions);

// //4
const deleteSubmissionByName = (array, name) => {
    let toDelete = array.findIndex((names) => {
        return names.name === name;
    });
    array.splice(toDelete, 1);
}

deleteSubmissionByName(submissions, "Joe")

console.log(submissions);


// //5
const editSubmission = (array, index, score) => {
    array[index].score = score;
    array[index].passed = (score >= 60) ? true:false;
    return array;
};

console.log(editSubmission(submissions, 0, 45));

// //6
const findSubmissionByName = (array, name) => {
    return array.find((submission) => {
        return submission.name === name;
    });
};

 console.log(findSubmissionByName(submissions, "Tony"));

// //7
 const findLowestScore = (array) => {
    let lowestScore = array[0];
    array.forEach((submission)=>{
        if(submission.score < lowestScore.score){
            lowestScore = submission;
        };
    });
    console.log(lowestScore);
 };

findLowestScore(submissions)

// //8
const findAverageScore = (array) => {
    let sum = 0;
    for(i = 0; i < array.length; i++){
        sum += array[i].score;
    };
    let average = sum / (array.length)
    console.log(average);
};

findAverageScore(submissions);

// //9
const filterPassing = (array) => {
    let passingGrades = array.filter((submission)=>{
        return submission.passed;
    });
    console.log(passingGrades);
}

filterPassing(submissions)

// //10
const filter90AndAbove = (array) => {
    let above90 = array.filter((submission)=>{
        return submission.score >= 90;
    });
    console.log(above90);
}

filter90AndAbove(submissions)