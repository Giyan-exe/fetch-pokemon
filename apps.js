const fetchBtn = document.querySelector(".fetch-btn");
const searchInput = document.querySelector(".search-input");


//Initially I tested .then and .catch and changed it to a function that uses try and catch because the function is being called easier
async function fetchPokemon(name) {
    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`); //it captures pokemon in this API once you enter a pokemon's name
        
         if(!response.ok) {
            throw new Error(`Pokemon not found`); //it shows error in the console if the pokemon can't be found 
    }
        const data = await response.json();
            let resultContainer = document.querySelector(".result");
            
            if(resultContainer) {
                resultContainer.innerHTML = "";
            } else {
                resultContainer = document.createElement("div");
                resultContainer.setAttribute("class", "result");
                resultContainer.style.display = "flex";

                document.body.appendChild(resultContainer);
            }
               
            const pokemonContainer = document.createElement("div");
                pokemonContainer.setAttribute("class", "pokemon-container");

                resultContainer.appendChild(pokemonContainer);

            const pokemonImg = document.createElement("img");
                pokemonImg.setAttribute("height", "325px");
                pokemonImg.setAttribute("width", "300px");
                pokemonImg.setAttribute("src", data.sprites.front_default);

                pokemonContainer.appendChild(pokemonImg);

            const pokemonName = document.createElement("p");
                pokemonName.setAttribute("class", "name-type");
                pokemonName.textContent = data.name.charAt(0).toUpperCase() + data.name.slice(1);

                pokemonContainer.appendChild(pokemonName);
            
            const linebreak = document.createElement("br");
                pokemonContainer.appendChild(linebreak);

            const pokemonType = document.createElement("p");
                pokemonType.setAttribute("class", "name-type");
                pokemonType.textContent = data.types.map(typeInfo => typeInfo.type.name).join("/");
                
                pokemonContainer.appendChild(pokemonType);
            
    }
        catch(error) {
            console.error('Error', error);
            alert("Pokemon not found");
    }
}

//This is where the function is called, when you clicked the button the event will be triggered
fetchBtn.addEventListener('click', function() {
    const pokemonSearch = searchInput.value.trim().toLowerCase();
     if(pokemonSearch){
        fetchPokemon(pokemonSearch);
        searchInput.value = "";     
     } else {
        console.error(`Error Pokemon not found`);
     }
    
});

