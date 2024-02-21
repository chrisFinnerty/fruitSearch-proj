const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	suggestions.innerHTML = '';

	let results = [];
	
	const lowerCaseStr = str.toLowerCase();

	for (let name of fruit) {
		if (name.toLowerCase().includes(lowerCaseStr)) {
			results.push(name);
			const newLi = document.createElement('li');
			let boldName = '';
			let index = name.toLowerCase().indexOf(lowerCaseStr);
			let endIndex = index + lowerCaseStr.length;

			for (let i = 0; i < name.length; i++) {
				if (i >= index && i < endIndex) {
					boldName += '<b>' + name[i] + '</b>';
				}
				else {
					boldName += name[i];
				}
			}
			newLi.innerHTML = boldName;
			suggestions.append(newLi);
		}
	}

	if (results.length === 0) {
		const newLi = document.createElement('li');
		newLi.innerText = 'No results found';
		suggestions.append(newLi);
		suggestions.removeEventListener('click', useSuggestion);
	}
	
	return results;
}

function searchHandler(e) {
	const searchTerm = e.target.value.trim();

	if (searchTerm.length > 0) {
		search(searchTerm);
	}
	else {
		suggestions.innerHTML = '';
	}
}

function useSuggestion(e) {
	const suggestedSearch = e.target.innerText;
	
	input.value = suggestedSearch;
	suggestions.innerHTML = '';
}

input.addEventListener('keyup', searchHandler); //event listener for key strokes in the search bar (input)
suggestions.addEventListener('click', useSuggestion); //event listener to insert the innerText of the suggestion into the value of the search bar (input)