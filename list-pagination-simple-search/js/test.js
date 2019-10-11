const search = document.querySelector('#search-input');
const submit = document.querySelector('#submit');
const tableCells = document.querySelectorAll('td');

console.log(search);
console.log(submit);
console.log(tableCells);

const searchFunction = ((searchInput, names) => {
    console.log(searchInput);
    console.log(names);
    names.forEach((name) => {
        name.className = "";
        if (searchInput.value.length !== 0 && name.textContent.toLowerCase().includes(searchInput.value.toLowerCase())) {
            name.className = "match";
        }
    });
});

submit.addEventListener('click', (event) => {
    event.preventDefault();
    searchFunction(search,tableCells);
    console.log('shit');

});

search.addEventListener('keyup', () => {
    searchFunction(search, tableCells);

});