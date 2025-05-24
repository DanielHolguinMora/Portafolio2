    
    document.getElementById('fetchButton').addEventListener('click', () => {
    const numberInput = document.getElementById('numberInput').value;
    const numberOfPokemons = Math.max(numberInput, 3); 

    if (numberOfPokemons > 151) {
        alert('Solo hay 151 Pokémon disponibles. Se mostrarán los 151 primeros.');
    }

    const limit = Math.min(numberOfPokemons, 151); 

    const promises = [];
    for (let i = 1; i <= limit; i++) {
        promises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`));
    }

    Promise.all(promises) 

        .then(responses => {
            return Promise.all(responses.map(response => {
                if (!response.ok) {
                    throw new Error('Error en la red');
                }
                return response.json();
            }));
        })

        .then(data => {
            const dataContainer = document.getElementById('dataContainer');
            dataContainer.innerHTML = ''; 

            data.forEach(pokemon => {
                const pokemonElement = document.createElement('div');
                pokemonElement.classList.add('pokemon');
                pokemonElement.innerHTML = `<h2>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                                            </h2><img src="${pokemon.sprites.front_default}
                                            "alt="${pokemon.name}"/>  
                                            <p>Numero: ${pokemon.id}</p> 
                                            <p>Experiencia Base: ${pokemon.base_experience}</p>
                                            <p>Altura: ${pokemon.height}</p>
                                            <p>Peso: ${pokemon.weight}</p>`;
                dataContainer.appendChild(pokemonElement);
            });

            if (numberOfPokemons > 151) {
                const messageElement = document.createElement('div');
                messageElement.innerHTML = `<p>Se han mostrado todos los 151 Pokémon disponibles.</p>`;
                dataContainer.appendChild(messageElement);
            }
        })

        .catch(error => {
            console.error('Error:', error);
        });
});
