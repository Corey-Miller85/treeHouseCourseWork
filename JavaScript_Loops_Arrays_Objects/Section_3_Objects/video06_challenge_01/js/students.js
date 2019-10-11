var message = '';
var students = [
    { 
        name: "Sally",
        track: "iOS Development",
        achievements: "163",
        points: 1211
    },
    {
        name: "Sam",
        track: "Front End Development",
        achievements: "89",
        points: 743
    },
    {
        name: "Joe",
        track: "Web Design",
        achievements: "102",
        points: 970
    },
    {
        name: "Terry",
        track: "Full-Stack Web Development",
        achievements: "72",
        points: 640

    },
    {
        name: "Petr",
        track: "Web Design",
        achievements: "42",
        points: 320
    }
];

function print(message) {
    var divOutput = document.getElementById("output");
    divOutput.innerHTML = message;
}

// for (var i = 0; i < students.length; i += 1) {
//     for (var prop in students[i]) {
//        document.write("<h1>" + prop + ": " + students[i][prop] + "</h1>");
//     }
// }


for (var i = 0; i < students.length; i += 1) {
    student = students[i];
    message += '<h2>Student: ' + student.name + '</h2>';
    message += '<p>Track: ' + student.track + '</p>';
    message += '<p>Achievements: ' + student.achievements + '</p>';
    message += '<p>Points: ' + student.points + '</p>';
    print(message);
}


