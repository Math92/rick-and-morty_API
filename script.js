function getAllCharacters(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            populateCharacterSelect(data.results);
            if (data.info.next) {
                getAllCharacters(data.info.next);
            } else {
                // Cuando se carguen todos los personajes, oculta el mensaje de carga
                document.getElementById('loadingMessage').style.display = 'none';
                // Y muestra el select
                document.getElementById('characterSelect').style.display = 'block';
            }
        })
        .catch(error => {
            console.error('Error al cargar los personajes:', error);
            document.getElementById('loadingMessage').textContent = 'Error al cargar los personajes.';
        });
}

function populateCharacterSelect(characters) {
    const select = document.getElementById('characterSelect');
    characters.forEach(character => {
        const option = document.createElement('option');
        option.value = character.id;
        option.textContent = character.name;
        select.appendChild(option);
    });
}

function displaySelectedCharacter() {
    const selectedId = document.getElementById('characterSelect').value;
    fetch(`https://rickandmortyapi.com/api/character/${selectedId}`)
        .then(response => response.json())
        .then(character => displayCharacter(character));
}

function displayCharacter(character) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Limpiar resultados anteriores

    if (character) {
        const characterDiv = document.createElement('div');
        characterDiv.className = 'character-detail';
        characterDiv.innerHTML = `
            <img src="${character.image}" alt="${character.name}" class="character-image">
            <p><strong>Nombre:</strong> ${character.name}</p>
            <p><strong>Estado:</strong> ${character.status}</p>
            <p><strong>Especie:</strong> ${character.species}</p>
            <p><strong>Género:</strong> ${character.gender}</p>
            <p><strong>Origen:</strong> ${character.origin.name}</p>
            <p><strong>Ubicación:</strong> ${character.location.name}</p>
        `;
        resultsDiv.appendChild(characterDiv);
    } else {
        resultsDiv.innerHTML = '<p>Personaje no encontrado.</p>';
    }
}




// Carga inicial de personajes cuando se carga la ventana
window.onload = function () {
    getAllCharacters('https://rickandmortyapi.com/api/character/');
};
