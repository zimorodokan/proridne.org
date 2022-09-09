'use strict';

const scriptName = 'proridne__main';
const pagePathName = window.location.pathname;
const currentPageFileName = decodeURI(pagePathName.substring(pagePathName.lastIndexOf('/') + 1, pagePathName.lastIndexOf('.html')));
const pageTypes = {
	'Головна': {
		'advertizing': providePageAdvertizing__Type_1,
	},
	'Аудіоказка': {
		'advertizing': providePageAdvertizing__Type_1,
	},
	'Аудіоказки': {
		'advertizing': providePageAdvertizing__Type_1,
	},
	'Аудіоказки тематичні': {
		'advertizing': providePageAdvertizing__Type_1,
	},
	'Книга': {
		'advertizing': providePageAdvertizing__Type_1,
	},
	'Книга Валерій Войтович «Молитва до Дажбога» Розділ': {
		'advertizing': providePageAdvertizing__Type_1,
	},
	'Книга Іван Березовський ☼ Казки про тварин': {
		'advertizing': providePageAdvertizing__Type_1,
		'alphabet menu': true,
		'alphabet menu header': 'Казки про тварин на ',
		'title for a list of all pages': 'Алфавітний покажчик',
		'path': '/Українські народні казки/',
		'fileWithFilenames': '/-/lists/Книга Іван Березовський ☼ Казки про тварин.txt',
	},
	'Книга Іван Котляревський «Енеїда» Розділ': {
		'advertizing': providePageAdvertizing__Type_1,
	},
	'Книга Іван Франко «Лис Микита» Розділ': {
		'advertizing': providePageAdvertizing__Type_1,
	},
	'Книга Ірина Кімакович «Фольклорний анекдот як жанр» Розділ': {
		'advertizing': providePageAdvertizing__Type_1,
	},
	'Книга Микола Зінчук «Чарівні казки» Казка': {
		'advertizing': providePageAdvertizing__Type_1,
		'list of random links': true,
		'path': '/Український фольклор Книги/Микола Зінчук ☼ Чарівні казки/',
		'fileWithFilenames': '/-/lists/Книга Микола Зінчук ☼ Чарівні казки.txt',
	},
	'Книга Михайло Москаленко «Українські замовляння» Розділ': {
		'advertizing': providePageAdvertizing__Type_1,
	},
	'Книги': {
		'advertizing': providePageAdvertizing__Type_2,
	},
	'Словник': {
		'advertizing': providePageAdvertizing__Type_1,
		'alphabet menu header': 'Слова на ',
		'dictionaryFiles': new Map([['uk', '/-/dicts/uk.txt',], ['ru', '/-/dicts/ru.txt',],]),
	},
	'Ukrainian tale': {
		'advertizing': providePageAdvertizing__Type_1,
		'alphabet menu': true,
		'alphabet menu header': 'Ukrainian fairy tales starting with the letter ',
		'list of random links': true,
		'path': '/Ukrainian folk tales/',
		'fileWithFilenames': '/-/lists/Ukrainian folk tales.txt',
	},
	'Ukrainian tales': {
		'advertizing': providePageAdvertizing__Type_1,
		'alphabet menu': true,
		'alphabet menu header': 'Ukrainian fairy tales starting with the letter ',
		'title for a list of all pages': 'Alphabetical index',
		'path': '/Ukrainian folk tales/',
		'fileWithFilenames': '/-/lists/Ukrainian folk tales.txt',
	},
	'Украинская легенда': {
		'advertizing': providePageAdvertizing__Type_1,
		'alphabet menu': true,
		'alphabet menu header': 'Украинские легенды на ',
		'list of random links': true,
		'path': '/Украинские народные легенды/',
		'fileWithFilenames': '/-/lists/Украинские народные легенды.txt',
	},
	'Украинские легенды': {
		'advertizing': providePageAdvertizing__Type_1,
		'alphabet menu': true,
		'alphabet menu header': 'Украинские легенды на ',
		'title for a list of all pages': 'Алфавитный указатель',
		'path': '/Украинские народные легенды/',
		'fileWithFilenames': '/-/lists/Украинские народные легенды.txt',
	},
	'Украинская сказка': {
		'advertizing': providePageAdvertizing__Type_1,
		'alphabet menu': true,
		'alphabet menu header': 'Украинские сказки на ',
		'list of random links': true,
		'path': '/Украинские народные сказки/',
		'fileWithFilenames': '/-/lists/Украинские народные сказки.txt',
	},
	'Украинские сказки': {
		'advertizing': providePageAdvertizing__Type_1,
		'alphabet menu': true,
		'alphabet menu header': 'Украинские сказки на ',
		'title for a list of all pages': 'Алфавитный указатель',
		'path': '/Украинские народные сказки/',
		'fileWithFilenames': '/-/lists/Украинские народные сказки.txt',
	},
	'Українська билина': {
		'advertizing': providePageAdvertizing__Type_1,
		'alphabet menu': true,
		'alphabet menu header': 'Українські билини на ',
		'list of random links': true,
		'path': '/Українські билини/',
		'fileWithFilenames': '/-/lists/Українські билини.txt',
	},
	'Українські билини': {
		'advertizing': providePageAdvertizing__Type_1,
		'alphabet menu': true,
		'alphabet menu header': 'Українські билини на ',
		'title for a list of all pages': 'Алфавітний покажчик',
		'path': '/Українські билини/',
		'fileWithFilenames': '/-/lists/Українські билини.txt',
	},
	'Українська казка': {
		'advertizing': providePageAdvertizing__Type_1,
		'alphabet menu': true,
		'alphabet menu header': 'Українські казки на ',
		'list of random links': true,
		'path': '/Українські народні казки/',
		'fileWithFilenames': '/-/lists/Українські народні казки.txt',
	},
	'Українські казки': {
		'advertizing': providePageAdvertizing__Type_1,
		'alphabet menu': true,
		'alphabet menu header': 'Українські казки на ',
		'title for a list of all pages': 'Алфавітний покажчик',
		'path': '/Українські народні казки/',
		'fileWithFilenames': '/-/lists/Українські народні казки.txt',
	},
	'Українська легенда': {
		'advertizing': providePageAdvertizing__Type_1,
		'alphabet menu': true,
		'alphabet menu header': 'Українські легенди на ',
		'list of random links': true,
		'path': '/Українські народні легенди/',
		'fileWithFilenames': '/-/lists/Українські народні легенди.txt',
	},
	'Українські легенди': {
		'advertizing': providePageAdvertizing__Type_1,
		'alphabet menu': true,
		'alphabet menu header': 'Українські легенди на ',
		'title for a list of all pages': 'Алфавітний покажчик',
		'path': '/Українські народні легенди/',
		'fileWithFilenames': '/-/lists/Українські народні легенди.txt',
	},
	'Український міф': {
		'advertizing': providePageAdvertizing__Type_1,
		'alphabet menu': true,
		'alphabet menu header': 'Українські міфи на ',
		'list of random links': true,
		'path': '/Українська міфологія/',
		'fileWithFilenames': '/-/lists/Українська міфологія.txt',
	},
	'Українська міфологія': {
		'advertizing': providePageAdvertizing__Type_1,
		'alphabet menu': true,
		'alphabet menu header': 'Українські міфи на ',
		'title for a list of all pages': 'Алфавітний покажчик',
		'path': '/Українська міфологія/',
		'fileWithFilenames': '/-/lists/Українська міфологія.txt',
	},
	'Українське оповідання': {
		'advertizing': providePageAdvertizing__Type_1,
		'alphabet menu': true,
		'alphabet menu header': 'Українські оповідання на ',
		'list of random links': true,
		'path': '/Українські народні оповідання/',
		'fileWithFilenames': '/-/lists/Українські народні оповідання.txt',
	},
	'Українські оповідання': {
		'advertizing': providePageAdvertizing__Type_1,
		'alphabet menu': true,
		'alphabet menu header': 'Українські оповідання на ',
		'title for a list of all pages': 'Алфавітний покажчик',
		'path': '/Українські народні оповідання/',
		'fileWithFilenames': '/-/lists/Українські народні оповідання.txt',
	},
	'Українська пісня': {
		'advertizing': providePageAdvertizing__Type_1,
		'alphabet menu': true,
		'alphabet menu header': 'Українські пісні на ',
		'list of random links': true,
		'path': '/Українські народні пісні/',
		'fileWithFilenames': '/-/lists/Українські народні пісні.txt',
	},
	'Українські пісні': {
		'advertizing': providePageAdvertizing__Type_1,
		'alphabet menu': true,
		'alphabet menu header': 'Українські пісні на ',
		'title for a list of all pages': 'Алфавітний покажчик',
		'path': '/Українські народні пісні/',
		'fileWithFilenames': '/-/lists/Українські народні пісні.txt',
	},
};
const pageType = document.body.dataset.pageType;
const e__pageHeaderAlphabetMenu__switch = document.querySelector('.pageHeaderAlphabetMenu__switch');
const e__alphabetContentItems = document.querySelector('.alphabetContentItems');
const e__alphabetContentHeader = document.querySelector('.alphabetContentHeader');
const e__alphabetContentClose = document.querySelector('.alphabetContentClose');
let alphabetContentCurrentLetter ='';

const storageStatus = {
	'fileWithFilenames': false,
	'dictionaryFiles': false,
};

const googleAdsenseScriptUrl = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7496597077303394';
const googleAdsenseScriptLoadDelay = 0;
let customPageAdvertizingBlocks = 0;
// let customListOfAllFilesAdvertizingBlocks = 0;


const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;
// console.log('windowHeight', windowHeight, 'windowWidth', windowWidth);


function addEvents() {
	// console.log(`${scriptName} function: addEvents`);

	const e__pageHeaderProjectMenu__switch = document.querySelector('.pageHeaderProjectMenu__switch');
	if (e__pageHeaderProjectMenu__switch) {
		e__pageHeaderProjectMenu__switch.addEventListener('click', click__pageHeaderProjectMenu__switch);
	}

	const e__pageHeaderAlphabetMenu__switch = document.querySelector('.pageHeaderAlphabetMenu__switch');
	if (e__pageHeaderAlphabetMenu__switch) {
		e__pageHeaderAlphabetMenu__switch.addEventListener('click', click__pageHeaderAlphabetMenu__switch);
	}

	const e__pageHeader__shadow = document.querySelector('.pageHeader__shadow');
	if (e__pageHeader__shadow) {
		e__pageHeader__shadow.addEventListener('click', click__pageHeader__shadow);
	}

	const e__pageHeaderAlphabetMenu__items = document.querySelector('.pageHeaderAlphabetMenu__items');
	if (e__pageHeaderAlphabetMenu__items) {
		e__pageHeaderAlphabetMenu__items.addEventListener('click', click__pageHeaderAlphabetMenu__item);
	}

	if (e__alphabetContentClose) {
		e__alphabetContentClose.addEventListener('click', event =>{
			click__alphabetContentClose(event);
		});
	}


	document.documentElement.addEventListener('click', event => {
		// console.log(event);
		click__audioFigure(event);
	});

	document.documentElement.addEventListener('keydown', event => {
		keydown__audioFigure(event);
	});
}


function click__pageHeaderProjectMenu__switch() {
	// console.log(`${scriptName} function: click__pageHeaderProjectMenu__switch`);

	if (document.body.dataset.opened === 'pageHeaderProjectMenu') {
		document.body.dataset.opened = '';
	}
	else {
		document.body.dataset.opened = 'pageHeaderProjectMenu';
	}
}


function click__pageHeaderAlphabetMenu__switch() {
	// console.log(`${scriptName} function: click__pageHeaderAlphabetMenu__switch`);

	if (document.body.dataset.opened === 'pageHeaderAlphabetMenu') {
		document.body.dataset.opened = '';
	}
	else {
		document.body.dataset.opened = 'pageHeaderAlphabetMenu';
	}
}


function click__pageHeaderAlphabetMenu__item(event) {
	// console.log(`${scriptName} function: click__pageHeaderAlphabetMenu__item`);

	if (event.target.classList
		&& event.target.classList.contains('pageHeaderAlphabetMenu__item')
	) {
		let letter = event.target.innerText;
		if (event.target.parentElement.dataset.dataRole === 'files') {
			showFilesByLetter(letter);
		}
		else if (event.target.parentElement.dataset.dataRole === 'dictionary') {
			showDictionariesByLetter(letter);
		}
	}
}


function click__pageHeader__shadow() {
	// console.log(`${scriptName} function: click__pageHeader__shadow`);

	document.body.dataset.opened = '';
}


function click__alphabetContentClose(event) {
	// console.log(`${scriptName} function: click__alphabetContentClose`);

	if (event.currentTarget === e__alphabetContentClose) {
		const contentType = document.body.dataset.opened;
		switch (contentType) {
			case 'alphabetContent':
				document.body.dataset.opened = 'pageHeaderAlphabetMenu';
				e__pageHeaderAlphabetMenu__switch.focus();
					break;
			case 'allContent':
				document.body.dataset.opened = '';
				break;
			default:
				document.body.dataset.opened = '';
				break;
		}
	}
}


function click__audioFigure(event) {
	// console.log(`${scriptName} function: click__audioFigure`);

	if (event.target.classList
		&& event.target.classList.contains('audio--notActivated')
	) {
		event.target.classList.remove('audio--notActivated');
	}
}


function keydown__audioFigure(event) {
	// console.log(`${scriptName} function: click__audioFigure`);

	if ((event.key === ' ' || event.key === 'Enter')
		&& event.target.classList
		&& event.target.classList.contains('audio--notActivated')
	) {
		event.preventDefault();
		event.target.classList.remove('audio--notActivated');
	}
}


function getRandomInt(value) {
	// console.log(`${scriptName} function: getRandomInt`);

	return Math.floor(Math.random() * Math.floor(value));
}


function provideFilesList(event) {
	// console.log(`${scriptName} function: provideFilesList`);

	event.preventDefault();
	const el = event.target;
	el.removeEventListener('click', provideFilesList);
	const localeStorageKey = pageTypes[pageType].fileWithFilenames;
	const filenames = JSON.parse(localStorage.getItem(localeStorageKey + ' — data'));
	const path = pageTypes[pageType].path;

	let innerHTML = '';

	filenames.forEach(filename => {
		innerHTML += `<p class="alphabetContentItem"><a class="alphabetContentItemLink" href="${path}${filename}.html">${filename}</a></p>`;
	});

	el.addEventListener('click', () => {
		event.preventDefault();
		showFilesList(innerHTML);
	});

	showFilesList(innerHTML);
}


function showFilesList(innerHTML)	{
	// console.log(`${scriptName} function: showFilesList`);

	if (alphabetContentCurrentLetter !== 'all') {
		alphabetContentCurrentLetter = 'all';
		e__alphabetContentItems.innerHTML = innerHTML;
		e__alphabetContentHeader.innerHTML = `${pageTypes[pageType]['title for a list of all pages']}`;
		document.body.dataset.opened = 'allContent';
		e__alphabetContentClose.focus();
		provideFileListAdvertizing();
	}
	else {
		document.body.dataset.opened = 'allContent';
		e__alphabetContentClose.focus();
	}
}


function provideFilesAlphabetMenu() {
	// console.log(`${scriptName} function: provideFilesAlphabetMenu`);

	const e__pageHeaderAlphabetMenu = document.querySelector('.pageHeaderAlphabetMenu');
	const pageTypeDataLastCreatedTime = JSON.parse(localStorage.getItem(pageTypes[pageType].fileWithFilenames));
	const alphabetMenuLastCreatedTime = JSON.parse(localStorage.getItem(pageTypes[pageType].fileWithFilenames + ' — alphabetMenuLastCreatedTime'));
	let alphabetMenuLetters;

	if (e__pageHeaderAlphabetMenu) {

		if (pageTypeDataLastCreatedTime !== alphabetMenuLastCreatedTime) {
			alphabetMenuLetters = findFilesAlphabetMenuLetters();
		}
		else {
			alphabetMenuLetters = getFilesAlphabetMenuLetters();
		}

		let e__div = createFilesAlphabetMenu(alphabetMenuLetters);
		e__pageHeaderAlphabetMenu.appendChild(e__div);
		e__pageHeaderAlphabetMenu.classList.add('pageHeaderAlphabetMenu--exist');
	}
}


function findFilesAlphabetMenuLetters() {
	// console.log(`${scriptName} function: findFilesAlphabetMenuLetters`);

	const pageTypeDataLastCreatedTime = JSON.parse(localStorage.getItem(pageTypes[pageType].fileWithFilenames));
	const alphabet = new Set([
		'А', 'Б', 'В', 'Г', 'Ґ', 'Д', 'Е', 'Є', 'Ж', 'З', 'И', 'І', 'Ї', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ю', 'Я',
		'Ы', 'Э', 'Ё',
		'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
	]);
	const filenames = JSON.parse(localStorage.getItem(pageTypes[pageType].fileWithFilenames + ' — data'));
	let alphabetMenuLetters = [];
	let letters = new Set();
	let separatedFilenames = {};

	filenames.forEach(filename => {
		let firstLetter = filename[0];
		letters.add(filename[0]);
		if (!separatedFilenames[firstLetter]) {
			separatedFilenames[firstLetter] = [];
		}
		separatedFilenames[firstLetter].push(filename);
	});

	letters.forEach(letter => {
		if (alphabet.has(letter)) {
			alphabetMenuLetters.push(letter);
		}
	});

	for (const letter in separatedFilenames) {
		if (separatedFilenames.hasOwnProperty(letter)) {
			let key = pageTypes[pageType].fileWithFilenames + ' — ' + letter;
			let value = JSON.stringify(separatedFilenames[letter]);
			localStorage.setItem(key, value);
			}
	}

	let key = pageTypes[pageType].fileWithFilenames + ' — alphabetMenuLetters';
	let value = JSON.stringify(alphabetMenuLetters);
	localStorage.setItem(key, value);

	key = pageTypes[pageType].fileWithFilenames + ' — alphabetMenuLastCreatedTime';
	value = JSON.stringify(pageTypeDataLastCreatedTime);
	localStorage.setItem(key, value);

	return alphabetMenuLetters;
}


function getFilesAlphabetMenuLetters() {
	// console.log(`${scriptName} function: getFilesAlphabetMenuLetters`);

	return JSON.parse(localStorage.getItem(pageTypes[pageType].fileWithFilenames + ' — alphabetMenuLetters'));
}


function createFilesAlphabetMenu(alphabetMenuLetters) {
	// console.log(`${scriptName} function: createFilesAlphabetMenu`);

	let e__div = document.createElement('div');
	let innerHTML = "";

	e__div.className = 'pageHeaderAlphabetMenu__items';
	e__div.setAttribute('tabindex', "-1");
	e__div.dataset.dataRole = 'files';

	alphabetMenuLetters.forEach(letter => {
		innerHTML += `<button type="button" class="pageHeaderAlphabetMenu__item" tabindex="0">${letter}</button>`;
	});

	e__div.innerHTML = innerHTML;

	return e__div;
}


function showFilesByLetter(letter) {
	// console.log(`${scriptName} function: showFilesByLetter`);

	if (alphabetContentCurrentLetter !== letter) {
		let filenames = JSON.parse(localStorage.getItem(pageTypes[pageType].fileWithFilenames + ' — ' + letter));
		let innerHTML = '';
		const path = pageTypes[pageType].path;
		filenames.forEach(filename => {
			innerHTML += `<p class="alphabetContentItem"><a class="alphabetContentItemLink" href="${path}${filename}.html">${filename}</a></p>`;
		});
		e__alphabetContentItems.innerHTML = innerHTML;
		e__alphabetContentHeader.innerHTML = `${pageTypes[pageType]['alphabet menu header']}${letter}`;
		alphabetContentCurrentLetter = letter;
		document.body.dataset.opened = 'alphabetContent';
		e__alphabetContentClose.focus();
		provideFileListAdvertizing();
	}
	else {
		document.body.dataset.opened = 'alphabetContent';
		e__alphabetContentClose.focus();
	}
}


function provideDictionaryContent(event) {
	// console.log(`${scriptName} function: provideDictionaryContent`);

	event.preventDefault();
	const el = event.target;
	el.removeEventListener('click', provideDictionaryContent);
	const lang = el.getAttribute('lang');
	const localeStorageKey = pageTypes[pageType].dictionaryFiles.get(lang);
	const items = JSON.parse(localStorage.getItem(localeStorageKey + ' — data'));

	let innerHTML = '';

	items.forEach(item => {
		let [term, definition] = item.split('\t');
		innerHTML += `<p class="alphabetDictionary__item"><span class="alphabetDictionary__itemTerm">${term}</span> — <span class="alphabetDictionary__itemDefinition">${definition}</span></p>`;
	});

	el.addEventListener('click', () => {
		event.preventDefault();
		showDictionaryContent(innerHTML, lang);
	});

	showDictionaryContent(innerHTML, lang);
}


function showDictionaryContent(innerHTML, lang) {
	// console.log(`${scriptName} function: showDictionaryContent`);

	if (alphabetContentCurrentLetter !== lang) {
		e__alphabetContentItems.innerHTML = innerHTML;
		let alphabetContentHeader = '';
		switch (lang) {
			case 'uk':
				alphabetContentHeader = 'Словник діалектних та маловживаних слів';
				break;
			case 'ru':
				alphabetContentHeader = 'Словарь к украинским сказкам и легендам';
				break;
			default:
				break;
		}
		e__alphabetContentHeader.innerHTML = alphabetContentHeader;
		alphabetContentCurrentLetter = lang;
		// console.log(lang);
		document.body.dataset.opened = 'allContent';
		e__alphabetContentClose.focus();
		provideDictionaryItemsAdvertizing();
	}
	else {
		document.body.dataset.opened = 'allContent';
		e__alphabetContentClose.focus();
	}
}


function provideDictionariesAlphabetMenu() {
	// console.log(`${scriptName} function: provideDictionariesAlphabetMenu`);

	const e__pageHeaderAlphabetMenu = document.querySelector('.pageHeaderAlphabetMenu');
	let alphabetMenuLetters = new Set();

	if (e__pageHeaderAlphabetMenu) {
		pageTypes[pageType].dictionaryFiles.forEach((localStorageKey) => {
			const pageTypeDataLastCreatedTime = JSON.parse(localStorage.getItem(localStorageKey));
			const alphabetMenuLastCreatedTime = JSON.parse(localStorage.getItem(localStorageKey + ' — alphabetMenuLastCreatedTime'));

			if (pageTypeDataLastCreatedTime !== alphabetMenuLastCreatedTime) {
				findDictionariesAlphabetMenuLetters(localStorageKey);
			}
			const a = getDictionariesAlphabetMenuLetters(localStorageKey);
			a.forEach(letter =>alphabetMenuLetters.add(letter));
		});

		let e__div = createDictionariesAlphabetMenu(alphabetMenuLetters);
		e__pageHeaderAlphabetMenu.appendChild(e__div);
		e__pageHeaderAlphabetMenu.classList.add('pageHeaderAlphabetMenu--exist');
	}
}


function findDictionariesAlphabetMenuLetters(localStorageKey) {
	// console.log(`${scriptName} function: findDictionariesAlphabetMenuLetters`);

	const pageTypeDataLastCreatedTime = JSON.parse(localStorage.getItem(localStorageKey));
	const alphabet = new Set([
		'А', 'Б', 'В', 'Г', 'Ґ', 'Д', 'Е', 'Є', 'Ж', 'З', 'И', 'І', 'Ї', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ю', 'Я',
		'Ы', 'Э', 'Ё',
		'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
		'’',
	]);
	const items = JSON.parse(localStorage.getItem(localStorageKey + ' — data'));
	let alphabetMenuLetters = [];
	let letters = new Set();
	let separatedFilenames = {};

	items.forEach(filename => {
		let firstLetter = filename[0];
		letters.add(filename[0]);
		if (!separatedFilenames[firstLetter]) {
			separatedFilenames[firstLetter] = [];
		}
		separatedFilenames[firstLetter].push(filename);
	});

	letters.forEach(letter => {
		if (alphabet.has(letter)) {
			alphabetMenuLetters.push(letter);
		}
	});

	for (const letter in separatedFilenames) {
		if (separatedFilenames.hasOwnProperty(letter)) {
			let key = localStorageKey + ' — ' + letter;
			let value = JSON.stringify(separatedFilenames[letter]);
			localStorage.setItem(key, value);
			}
	}

	let key = localStorageKey + ' — alphabetMenuLetters';
	let value = JSON.stringify(alphabetMenuLetters);
	localStorage.setItem(key, value);

	key = localStorageKey + ' — alphabetMenuLastCreatedTime';
	value = JSON.stringify(pageTypeDataLastCreatedTime);
	localStorage.setItem(key, value);

	return alphabetMenuLetters;
}


function getDictionariesAlphabetMenuLetters(localStorageKey) {
	// console.log(`${scriptName} function: getDictionariesAlphabetMenuLetters`);

	return JSON.parse(localStorage.getItem(localStorageKey + ' — alphabetMenuLetters'));
}


function createDictionariesAlphabetMenu(alphabetMenuLetters) {
	// console.log(`${scriptName} function: createDictionariesAlphabetMenu`);

	let e__div = document.createElement('div');
	let innerHTML = "";

	e__div.className = 'pageHeaderAlphabetMenu__items';
	e__div.setAttribute('tabindex', "-1");
	e__div.dataset.dataRole = 'dictionary';

	alphabetMenuLetters.forEach(letter => {
		innerHTML += `<button type="button" class="pageHeaderAlphabetMenu__item" tabindex="0">${letter}</button>`;
	});

	e__div.innerHTML = innerHTML;

	return e__div;
}


function showDictionariesByLetter(letter) {
	// console.log(`${scriptName} function: showDictionaryByLetter`);

	if (alphabetContentCurrentLetter !== letter) {
		let innerHTML = '';

		pageTypes[pageType].dictionaryFiles.forEach((localStorageKey, lang) => {
			let alphabetMenuLetters = JSON.parse(localStorage.getItem(localStorageKey + ' — alphabetMenuLetters'));
			if (alphabetMenuLetters.includes(letter)) {
				let items = JSON.parse(localStorage.getItem(localStorageKey + ' — ' + letter));
				items.forEach(item => {
					let [term, definition] = item.split('\t');
					if (term[0] === letter) {
						innerHTML += `<p class="alphabetDictionary__item" lang="${lang}"><span class="alphabetDictionary__itemTerm">${term}</span> — <span class="dictionary__itemDefinition">${definition}</span></p>`;
					}
				});
			}
		});

		 e__alphabetContentItems.innerHTML = innerHTML;
		 e__alphabetContentHeader.innerHTML = `${pageTypes[pageType]['alphabet menu header']}${letter}`;
		 alphabetContentCurrentLetter = letter;
		 document.body.dataset.opened = 'alphabetContent';
		 e__alphabetContentClose.focus();
		 provideDictionaryItemsAdvertizing();
	}
	else {
		document.body.dataset.opened = 'allContent';
		e__alphabetContentClose.focus();
	}
}


function createListOfRandomLinks() {
	// console.log(`${scriptName} function: createListOfRandomLinks`);

	let randomFilenames = new Set();
	let filenames = JSON.parse(localStorage.getItem(pageTypes[pageType].fileWithFilenames + ' — data'));
	const e__mainFooter = document.querySelector('.mainFooter');
	const e__div = document.createElement('div');
	e__div.className = 'mainFooterRandomWorks';
	let innerHTML = '';

	while (randomFilenames.size < 10) {
		let itemValue = filenames[getRandomInt(filenames.length)];
		if (typeof itemValue === 'string'
			&& itemValue !== ''
			&& itemValue !== currentPageFileName
		) {
			randomFilenames.add(itemValue);
		}
	}

	randomFilenames.forEach(filename => {
		innerHTML += `<p class="mainFooterRandomWorks__work"><a class="mainFooterRandomWorks__workLink" href="${pageTypes[pageType].path}${filename}.html">${filename}</a></p>`;
	});

	if (e__mainFooter) {
		e__div.innerHTML = innerHTML;
		e__mainFooter.appendChild(e__div);
	}
}


async function fetchDataToLocalStorage(key) {
	// console.log(`${scriptName} async function: fetchDataToLocalStorage`);

	let serverData = {};
	return await fetch(key, { 'method': 'GET', 'cache': 'reload', })
		.then(response => {
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			serverData['Last-Modified'] = response.headers.get('Last-Modified');
			return response.text();
		})
		.then(text => {
			serverData.data = text.split('\n');
			serverData.data.splice(-1);
			serverData.data.sort((a, b) => a.localeCompare(b, 'uk'));
			try {
				localStorage.setItem(key, JSON.stringify(serverData['Last-Modified']));
				localStorage.setItem(key + ' — data', JSON.stringify(serverData.data));
				return true;
			}
			catch (localStorageError) {
				console.error(localStorageError);
				return false;
			}
		})
		.catch(error => {
			console.error('There has been a problem with your fetch operation:', error);
			return false;
		});
}


async function checkStorageKeyData(key) {
	// console.log(`${scriptName} async function: checkStorageKeyData`);

	if (localStorage.getItem(key)) {
		let dataLastCreatedTime = JSON.parse(localStorage.getItem(key));
		return await fetch(key, { 'method': 'HEAD', 'cache': 'no-store', })
			.then(async response => {
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				if (dataLastCreatedTime !== response.headers.get('Last-Modified')) {
					return await fetchDataToLocalStorage(key);
				}
				else {
					return true;
				}
			})
			.catch(error => {
				console.error('There has been a problem with your fetch operation:', error);
				return false;
			});
	}
	else {
		return await fetchDataToLocalStorage(key);
	}
}


async function processPageData() {
	// console.log(`${scriptName} async function: processPageData`);

	if (fetch && localStorage && pageType in pageTypes) {
		if (pageTypes[pageType].fileWithFilenames) {
			storageStatus.fileWithFilenames = await checkStorageKeyData(pageTypes[pageType].fileWithFilenames);
		}
		if (pageTypes[pageType].dictionaryFiles) {
			for (let item of pageTypes[pageType].dictionaryFiles) {
				let result = await checkStorageKeyData(item[1]);
				if (!result) {
					storageStatus.dictionaryFiles = false;
					break;
				}
				else {
					storageStatus.dictionaryFiles = true;
				}
			}
		}
	}
}


function fillPage() {
	// console.log(`${scriptName} function: fillPage`);

	if (storageStatus.fileWithFilenames) {
		if (pageTypes[pageType]['list of random links']) {
			createListOfRandomLinks();
		}
		if (pageTypes[pageType]['alphabet menu']) {
			provideFilesAlphabetMenu();
		}
		if (pageTypes[pageType]['title for a list of all pages']) {
			let e = document.querySelector('.allContentContainerHeader');
			if (e) {
				e.addEventListener('click', provideFilesList);
			}
		}
	}
	if (storageStatus.dictionaryFiles) {
		if (pageTypes[pageType].dictionaryFiles) {
			const ee__allContentContainerHeader = document.querySelectorAll('.allContentContainerHeader');
			for (let e of ee__allContentContainerHeader) {
				e.addEventListener('click', provideDictionaryContent);
			}
			provideDictionariesAlphabetMenu();
		}
	}
}


// Advertizing
function providePageAdvertizing() {
	// console.log(`${scriptName} function: provideAdvertizing`);

	pageTypes[pageType].advertizing();
}


function addEventsForAdvertizing() {
	// console.log(`${scriptName} function: addEventsForAdvertizing`);

	document.documentElement.addEventListener('keydown', activatePageAdvertizing);
	document.documentElement.addEventListener('mousedown', activatePageAdvertizing);
	document.documentElement.addEventListener('mousemove', activatePageAdvertizing);
	document.documentElement.addEventListener('scroll', activatePageAdvertizing);
	document.documentElement.addEventListener('touchstart', activatePageAdvertizing);
}


function removeEventsForAdvertizing() {
	// console.log(`${scriptName} function: removeEventsForAdvertizing`);

	document.documentElement.removeEventListener('keydown', activatePageAdvertizing);
	document.documentElement.removeEventListener('mousedown', activatePageAdvertizing);
	document.documentElement.removeEventListener('mousemove', activatePageAdvertizing);
	document.documentElement.removeEventListener('scroll', activatePageAdvertizing);
	document.documentElement.removeEventListener('touchstart', activatePageAdvertizing);
}


function providePageAdvertizing__Type_1() {
	// console.log(`${scriptName} function: providePageAdvertizing__Type_1`);

	if (windowWidth < 1024) {
		provideArticleAdvertizing__Type_1();
	}
	else if (windowWidth >= 1024) {
		provideRightInfoBlockAdvertizing();
		provideLEftInfoBlockAdvertizing();
		provideArticleAdvertizing__Type_1();
	}
	provideMainAdvertizingBlocks();
}


function providePageAdvertizing__Type_2() {
	// console.log(`${scriptName} function: providePageAdvertizing__Type_2`);

	if (windowWidth < 1024) {
		provideArticleAdvertizing__Type_2();
	}
	else if (windowWidth >= 1024) {
		provideRightInfoBlockAdvertizing();
		provideLEftInfoBlockAdvertizing();
		provideArticleAdvertizing__Type_2();
	}
}


function provideArticleAdvertizing__Type_1() {
	// console.log(`${scriptName} function: provideArticleAdvertizing__Type_1`);

	let articles = document.querySelectorAll('main article');
	for (let article of articles) {
		let startElementIndex = findFirstInvisibleElementIndex(article);
		if (startElementIndex !== false) {
			customPageAdvertizingBlocks += insertAdvertizing(article, startElementIndex, 'beforebegin', 10, 10);
		}
	}
}


function provideArticleAdvertizing__Type_2() {
	// console.log(`${scriptName} function: provideArticleAdvertizing__Type_2`);

	const booksCatalogue = document.querySelector('.booksCatalogue');
	let childElementCount = booksCatalogue.childElementCount;
	let startElementIndex = findFirstInvisibleElementIndex(booksCatalogue);
	if (startElementIndex !== false) {
		if (windowWidth < 1024) {
			for (let index = startElementIndex; index < childElementCount; index += 7) {
				customPageAdvertizingBlocks += insertAdvertizingBlock(booksCatalogue.children[index], 'beforebegin');
				childElementCount += 1;
			}
		}
		else if (windowWidth >= 1024) {
			if (windowWidth >= 1536) {
				for (let index = startElementIndex; index < childElementCount; index += 10) {
					customPageAdvertizingBlocks += insertAdvertizingBlock(booksCatalogue.children[index], 'beforebegin');
					childElementCount += 1;
				}
			}
			else {
				for (let index = startElementIndex; index < childElementCount; index += 7) {
					customPageAdvertizingBlocks += insertAdvertizingBlock(booksCatalogue.children[index], 'beforebegin');
					childElementCount += 1;
				}
			}
		}
	}

}


function provideLEftInfoBlockAdvertizing() {
	// console.log(`${scriptName} function: provideLEftInfoBlockAdvertizing`);

	if (windowWidth >= 1280) {
		const leftInfoBlock = document.querySelector('.leftInfoBlock');
		if (leftInfoBlock) {
			customPageAdvertizingBlocks += insertAdvertizingBlock(leftInfoBlock, 'afterbegin');
			customPageAdvertizingBlocks += insertAdvertizingBlock(leftInfoBlock, 'afterbegin');
		}
	}
}


function provideRightInfoBlockAdvertizing() {
	// console.log(`${scriptName} function: provideRightInfoBlockAdvertizing`);

	if (windowWidth >= 1024) {
		const rightInfoBlock = document.querySelector('.rightInfoBlock');
		if (rightInfoBlock) {
			customPageAdvertizingBlocks += insertAdvertizingBlock(rightInfoBlock, 'afterbegin');
			customPageAdvertizingBlocks += insertAdvertizingBlock(rightInfoBlock, 'afterbegin');
		}
	}
}


function provideMainAdvertizingBlocks() {
	// console.log(`${scriptName} function: insertMainAdvertizingBlocks`);

	let e__main = document.querySelector('main');
	let startElementIndex = findLastVisibleElementIndex(e__main);
	if (startElementIndex !== false) {
		customPageAdvertizingBlocks += insertAdvertizing(e__main, startElementIndex, 'afterend', 2, 10);
	}
}


function provideFileListAdvertizing() {
	// console.log(`${scriptName} function: provideFileListAdvertizing`);

	let startElementIndex = findLastVisibleElementIndex(e__alphabetContentItems);
	const customListOfAllFilesAdvertizingBlocks = insertAdvertizing(e__alphabetContentItems, startElementIndex, 'afterend', 50, 20);
	activateCustomAdvertizingBlocks(customListOfAllFilesAdvertizingBlocks);
}


function provideDictionaryItemsAdvertizing() {
	// console.log(`${scriptName} function: provideDictionaryItemsAdvertizing`);

	let startElementIndex = findLastVisibleElementIndex(e__alphabetContentItems);
	const customListOfAllFilesAdvertizingBlocks = insertAdvertizing(e__alphabetContentItems, startElementIndex, 'afterend', 40, 20);
	activateCustomAdvertizingBlocks(customListOfAllFilesAdvertizingBlocks);
}


function findFirstInvisibleElementIndex(parent) {
	// console.log(`${scriptName} function: findFirstInvisibleElementIndex`);

	const childElementCount = parent.childElementCount;
	for (let e__index = 0; e__index < childElementCount; e__index++) {
		if (parent.children[e__index].offsetTop > windowHeight) {
			return e__index;
		}
	}
	return false;
}


function findLastVisibleElementIndex(parent) {
	// console.log(`${scriptName} function: findStartElementIndex`);

	const childElementCount = parent.childElementCount;
	for (let e__index = 0; e__index < childElementCount; e__index++) {
		const e = parent.children[e__index];
		if (e.offsetTop + e.offsetHeight > windowHeight) {
			return e__index;
		}
	}
	return childElementCount - 1;
}


function insertAdvertizing(parentElement, startElementIndex, position, step, maxAdvertizingBlocks) {
	// console.log(`${scriptName} function: insertAdvertizing`, arguments);

	let childElementCount = parentElement.childElementCount;
	let blocks = 0;
	for (let index = startElementIndex; index < childElementCount && blocks < maxAdvertizingBlocks; index = index + step + 1) {
		insertAdvertizingBlock(parentElement.children[index], position);
		childElementCount++;
		blocks++;
	}
	return blocks;
}


function insertAdvertizingBlock(element, position) {
	// console.log(`${scriptName} function: insertAdvertizingBlock`, arguments);

	element.insertAdjacentHTML(position,
		`
			<div class="googleAds">
				<!-- proridne__horizontal_1 -->
				<ins class="adsbygoogle"
					style="display:block"
					data-ad-client="ca-pub-7496597077303394"
					data-ad-slot="5301946534"
					data-ad-format="auto"
					data-full-width-responsive="true"></ins>
			</div>
		`
	);
	return 1;
}


function addScriptToHead(url, onloadFunction) {
	// console.log(`${scriptName} function: addScriptToHead`);

	const e__script = document.createElement("script");
	e__script.src = url;
	e__script.crossorigin = 'anonymous';
	e__script.defer = true;

	e__script.addEventListener('load', () => {
		if (onloadFunction) {
			onloadFunction();
		}
	});

	e__script.addEventListener('error', (event) => {
		console.warn(`${scriptName}`, event.target.src, `didn't load correctly`);
	});

	document.head.appendChild(e__script);
}


function activatePageAdvertizing() {
	// console.log(`${scriptName} function: activatePageAdvertizing`);

	removeEventsForAdvertizing();
	setTimeout(
		addScriptToHead,
		googleAdsenseScriptLoadDelay,
		googleAdsenseScriptUrl,
		() => {
			activateCustomAdvertizingBlocks(customPageAdvertizingBlocks);
		}
	);
}


function activateCustomAdvertizingBlocks(number) {
	// console.log(`${scriptName} function: activateCustomAdvertizingBlocks`, arguments);
	// console.log('customAdvertizingBlocks', number);

	for (let index = 0; index < number; index++) {
		(adsbygoogle = window.adsbygoogle || []).push({});
	}
}




// console.log(`${scriptName} currentPageFileName: ${currentPageFileName}`);
// console.log(`${scriptName} pageType: ${pageType}`);
// console.log(`${scriptName} pageTypeProperties: ${pageTypes[pageType]}`);
// console.log(`${scriptName} pagePathName: ${pagePathName}`);


async function processPage() {
	// console.log(`${scriptName} async function: processPage`);

	await processPageData();
	fillPage();
	providePageAdvertizing();
	addEvents();
	addEventsForAdvertizing();
}

window.addEventListener('load', processPage);
