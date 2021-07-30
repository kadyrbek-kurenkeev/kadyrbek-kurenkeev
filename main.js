// задание 1

function Task(number,exercise,day){
    this.number = number;
    this.exercise = exercise;
    this.day = day; 
}


// задание 2

var task = [

    new Task(9,"walking",3),
    new Task(7,"eating",6),
    new Task(3,"watching",5),
    new Task(10,"working",2),
    new Task(5,"playing",2),
    new Task(1,"relax",1),
   
];

for (const note of task) {
    console.log(note);
}


// задание 3

var totalExercise = task.map(function(task){
    return task.exercise;
});

console.log(totalExercise);

// задание 4

var filterDay = task.filter(function(task){
    return task.day > 2;
}).map(function(task){
    return task.day;
});

console.log(filterDay);
// задание 5

var max = task.reduce(function(max,current){
return current.number>max.number?current:max;
}

);

console.log(max);