// const card = document.querySelector('.container p');
// const p = document.createElement('p');
// const h2 = document.querySelector('h2');
// const input = document.createElement('input');
// const button = document.createElement('BUTTON')
// p.innerHTML = "I don't know this is just a test!"
// card.appendChild(p);


// input.type = 'text'
// input.innerHTML = 'Enter text here...';
// button.innerHTML = 'submit'
// h2.appendChild(input);
// h2.appendChild(button);

// button.addEventListener('click', () => {
//     console.log('You pushed the button!');
// });
const card = document.querySelector('.card');
const ul = document.createElement('ul');
const button = document.querySelector('.submitButton')
card.appendChild(ul);

const submitButton = document.querySelector('button');

submitButton.addEventListener('submit', (e) => {
    const li = document.createElement('li');
    li.innerHTML = button.value;
    ul.appendChild(li);

});



