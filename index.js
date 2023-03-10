'use strict';

  const searchField = document.querySelector('#searchField')

  fetch('https://jsonplaceholder.typicode.com/users')
      .then((resp) => resp.json())
      .then ((data) => (data.forEach(showNames)))
  
      const showNames = (items) => {
        
        searchField.innerHTML +=  `
         <p class="names">
         ${items.name}
       </p>   
       `
       }

/*
       searchField.innerHTML =  `
       <div class="names">
       <img class="movie__img" src=${movieData[0].posterUrl} alt=${movieData[0].title}>
       <h2 class="movie__title">${movieData[0].title}</h2>
       <p class="movie__year">${movieData[0].year}</p>
       <p class="movie__genre">${movieData[0].genres.join(", ")}</p>
     </div>   
     `
     */