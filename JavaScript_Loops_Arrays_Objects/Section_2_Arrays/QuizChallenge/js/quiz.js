var answer;
var correct = 0;
var wrong = 0;
var html;
var mainArray = [
    ["How many legs does a spider have? ", "8"],
    ["Is JavaScript close to Java? ", "no"],
    ["How many cylenders does a V8 engine have? ", "8"],
    ["What color is the ocean?", "blue"],
    ["What is your favorite color?", "yellow"],
];
var correctlyAnswered = [];
var incorrectlyAnswered = [];


function print(message) {
    document.write("<p>" + message + "</p>");
}

function buildList(arr) {
    var listHTML = '<ol>';
    for (var i = 0; i < arr.length; i++) {
        listHTML += '<li>' + arr[i] + '</li>';
    }
    listHTML += '</ol>';
    return listHTML
}

//pushes the  correct and incorrect answers into the 'correct' and 'incorrect' arrays
for ( i = 0; i < mainArray.length; i++) {
    answer = prompt(mainArray[i][0]);
        if (answer === mainArray[i][1]) {
        correctlyAnswered.push(mainArray[i][0]);
        correct += 1;
        } else {
        incorrectlyAnswered.push(mainArray[i][0]);
        wrong += 1;
        }
}


//prints the correct and incorrect answers to index.html




/* print("You got " + correct + " answer(s) correct."); 
print("<strong> The answers you got correct are... </strong>");


print("<strong> The answers you got incorrect are... </strong>")
print("<ol>");
for (i = 0; i < incorrectlyAnswered.length; i++) {
    print( "<li>" + incorrectlyAnswered[i] +
        "</li>");
}
print("</ol>"); */

html = "You got " + correct + " question(s) right.";
html += '<h2> You got these questions correct: </h2>';
html += buildList(correctlyAnswered);
html += '<h2> You got these questions incorrect: </h2>';
html += buildList(incorrectlyAnswered);
print(html);
