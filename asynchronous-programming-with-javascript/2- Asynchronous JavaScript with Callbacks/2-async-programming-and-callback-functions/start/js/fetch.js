const astrosUrl = "http://api.open-notify.org/astros.json";
const wikiUrl = "https://en.wikipedia.org/api/rest_v1/page/summary/";
const peopleList = document.getElementById('people');
const btn = document.querySelector('button');



function getProfiles(json) {
  const profiles = json.people.map( person => {
    const craft = person.craft;
    return fetch(wikiUrl + person.name) 
            .then(response => response.json)
            .then( profile => {
                return {...profile, craft}
            })
            .catch( err => console.log("Error catching wiki"));
  }); 
  return Promise.all(profiles);
}

function generateHTML(data) {
  data.forEach(person => {
    if ( person.thumbnail != undefined){ //Skips person if thumbnail.source comes back as undefined. 
      const section = document.createElement('section');
      peopleList.appendChild(section);
      section.innerHTML = `
      <img src=${person.thumbnail.source}>
      <span>${person.craft}</span>
      <h2>${person.title}</h2>
      <p>${person.description}</p>
      <p>${person.extract}</p>
      `;
    }
  });
}

btn.addEventListener('click', (event) => {
  event.target.textContent = "Loading..."
  fetch(astrosUrl)
    .then(response => response.json())
    .then(getProfiles)
    .then(generateHTML)
    .catch( error => {
      peopleList.innerHTML= "<h3>Something Went Wrong...</h3>";
      console.log(err);
    })
    .finally(() => event.target.remove());
});