const search = document.querySelector('#search-input');
const submit = document.querySelector('#submit');​​
const tableCells = document.querySelectorAll('td');​

console.log(search);
console.log(submit);
console.log(tableCells);​​

function searchFunction(searchInput, names) {
  console.log(searchInput);
  console.log(names);
  names.forEach((name) => {
    name.className = "";
    if (searchInput.value.length !== 0 && name.textContent.toLowerCase().includes(searchInput.value.toLowerCase())) {
      name.className = "match";
    }
  });
};

submit.addEventListener('click', (event) => {
  event.preventDefault();​
  searchFunction(search, tableCells);

  console.log('Submit button is functional!');
});​
search.addEventListener('keyup', () => {
  ​
  searchFunction(search, tableCells);​
  console.log('Keyup event on the Search input is functional!');
});

names.forEach(name) {
  
}