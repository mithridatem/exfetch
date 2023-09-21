const pokemons = document.querySelector('#pokemons');
const tousLesPokemons = fetch('https://pokeapi.co/api/v2/pokemon')
    .then(async response=>{
        //const json = await response.json();
        const json = await response.json();
        json.results.forEach(element => {
            const pokemon = document.createElement('p');
            pokemon.textContent = element.name;
            pokemon.addEventListener('mouseover', (e)=>{
                pokemon.style.color = 'red';
            });
            pokemon.addEventListener('mouseout', (e)=>{
                pokemon.style.color = 'black';
            });
            fetch(element.url).then(async response2=>{
                const json2 = await response2.json();
                pokemon.textContent += " id : " + json2.id + " weight : " + json2.weight;
            })
            pokemons.appendChild(pokemon);
        });
    });          