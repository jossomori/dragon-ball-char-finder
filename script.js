const btn = document.getElementById('searchBtn');
const input = document.querySelector('input');
const img = document.getElementById('charImg');
const nameTag = document.getElementById('charName');
const desc = document.getElementById('desc');
const gender = document.getElementById('gender');
const race = document.getElementById('race');
const ki = document.getElementById('ki');


btn.addEventListener('click', function() {
    if (input.value.trim() === '') // para controlar que no ingresen inputs vacíos
        alert('Debes introducir el nombre de un personaje de Dragon Ball');
    else
        getCharData(input.value.trim());
});


async function getCharData(charName){
    const url = `https://dragonball-api.com/api/characters?name=${charName}`

    try {

        const response = await fetch(url);

        if (!response.ok)
            throw new Error(`Error: ${response.status}`);

        const data = await response.json();
        const character = data[0]; // la api devuelve un array

        if (character) {
            img.src = character.image;
            img.alt = `Una imagen de ${character.name}`
            nameTag.textContent = `Nombre: ${character.name}`;
            desc.textContent = `Descripción: ${character.description}`;
            gender.textContent = `Género: ${character.gender}`;
            race.textContent = `Raza: ${character.race}`;
            ki.textContent = `Ki: ${character.ki}`;
        } else
            alert('No se encontró el personaje. Asegurate de ingresar el nombre correctamente.');


    } catch (error) {
        console.log(response.status);
    }
}