const fruits = ['apple', 'pear', 'cherry'];
for(var i= 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

fruits.forEach(() => {
});


function loggy(word){
    console.log(word);
}