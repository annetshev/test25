document.addEventListener('DOMContentLoaded', function () {
    const characterListContainer = document.getElementById('character-list');
    const characterInfoContainer = document.getElementById('character-info');
    const apiUrl = 'https://anapioficeandfire.com/api/characters';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayCharacterList(data))
        .catch(error => console.error('Помилка отримання даних:', error));

    function displayCharacterList(characters) {
        characters.forEach((character, index) => {
            const characterElement = document.createElement('div');
            characterElement.classList.add('character');
            characterElement.textContent = `character ${index + 1}`;

            characterElement.addEventListener('click', () => {
                displayCharacterInfo(character);
                setActiveCharacter(characterElement);
            });

            characterListContainer.appendChild(characterElement);
        });
    }

    function displayCharacterInfo(character) {
        const markup = `
        <h1>${character.name}</h1>
        <h2>gender: ${character.gender} culture: ${character.culture}</h2>
        <p>born: ${character.born}</p>
        <p>died: ${character.died}</p>
        <p>titles: ${character.titles.join(', ')}</p>
        <p>aliases: ${character.aliases.join(', ')}</p>
        <p>father: ${character.father}</p>
        <p>mother: ${character.mother}</p>
        <p>spouse: ${character.spouse}</p>
        <p>books: ${character.books.join(', ')}</p>
        <p>povBooks: ${character.povBooks.join(', ')}</p>
        <p>playedBy: "${character.playedBy.join(', ')}"</p>
        `;

        characterInfoContainer.innerHTML = markup;
    }

    function setActiveCharacter(selectedCharacterElement) {
        const characterElements = document.querySelectorAll('.character');
        characterElements.forEach(element => {
            element.style.backgroundColor = '#808080'; // Сірий фон для всіх персонажів
        });

        selectedCharacterElement.style.backgroundColor = '#fff'; // Білий фон для вибраного персонажа
    }
});
