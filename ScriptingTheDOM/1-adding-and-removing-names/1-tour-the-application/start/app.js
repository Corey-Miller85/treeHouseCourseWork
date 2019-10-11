const form = document.getElementById('registrar');
const input = form.querySelector('input');
const ul = document.getElementById('invitedList')
const liFirst = document.querySelector('li');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = input.value
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li); 
    createSpan(2);
    input.value = "";



   
});

function createSpan(num) {

    for (let i = 0; i < num; i++){
        const text = input.value;
        const li = document.querySelector('li');
        const createSpan = document.createElement('span');
        createSpan.textContent =  text;
        li.appendChild(createSpan)
    }
}

// createSpan(9);