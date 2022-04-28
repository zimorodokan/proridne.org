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
		'dictionaryFiles': new Map([['uk', '/-/dicts/uk.txt',], ['ru', '/-/dicts/ru.txt',],]),
	},
	'Ukrainian tale': {
		'advertizing': providePageAdvertizing__Type_1,
		'alphabet menu': true,
		'list of random links': true,
		'path': '/Ukrainian folk tales/',
		'fileWithFilenames': '/-/lists/Ukrainian folk tales.txt',
	},
	'Ukrainian tales': {
		'advertizing': providePageAdvertizing__Type_1,
		'alphabet menu': true,
		'title for a list of all pages': 'Alphabetical index',
		'path': '/Ukrainian folk tales/',
		'fileWithFilenames': '/-/lists/Ukrainian folk tales.txt',
	},
	'Украинская легенда': {
		'advertizing': providePageAdvertizing__Type_1,
		'alphabet menu': true,
		'list of random links': true,
		'path': '/Украинские народные легенды/',
		'fileWithFilenames': '/-/lists/Украинские народные легенды.txt',
	},
	'Украинские легенды': {
		'advertizing': providePageAdvertizing__Type_1,
		'alphabet menu': true,
		'title for a list of all pages': 'Алфавитный указатель',
		'path': '/Украинские народные легенды/',
		'fileWithFilenames': '/-/lists/Украинские народные легенды.txt',
	},
	'Украинская сказка': {
		'advertizing': providePageAdvertizing__Type_1,
		'alphabet menu': true,
		'list of random links': true,
		'path': '/Украинские народные сказки/',
		'fileWithFilenames': '/-/lists/Украинские народные сказки.txt',
	},
	'Украинские сказки': {
		'advertizing': providePageAdvertizing__Type_1,
		'alphabet menu': true,
		'title for a list of all pages': 'Алфавитный указатель',
		'path': '/Украинские народные сказки/',
		'fileWithFilenames': '/-/lists/Украинские народные сказки.txt',
	},
	'Українська билина': {
		'advertizing': providePageAdvertizing__Type_1,
		'alphabet menu': true,
		'list of random links': true,
		'path': '/Українські билини/',
		'fileWithFilenames': '/-/lists/Українські билини.txt',
	},
	'Українські билини': {
		'advertizing': providePageAdvertizing__Type_1,
		'alphabet menu': true,
		'title for a list of all pages': 'Алфавітний покажчик',
		'path': '/Українські билини/',
		'fileWithFilenames': '/-/lists/Українські билини.txt',
	},
	'Українська казка': {
		'advertizing': providePageAdvertizing__Type_1,
		'alphabet menu': true,
		'list of random links': true,
		'path': '/Українські народні казки/',
		'fileWithFilenames': '/-/lists/Українські народні казки.txt',
	},
	'Українські казки': {
		'advertizing': providePageAdvertizing__Type_1,
		'alphabet menu': true,
		'title for a list of all pages': 'Алфавітний покажчик',
		'path': '/Українські народні казки/',
		'fileWithFilenames': '/-/lists/Українські народні казки.txt',
	},
	'Українська легенда': {
		'advertizing': providePageAdvertizing__Type_1,
		'alphabet menu': true,
		'list of random links': true,
		'path': '/Українські народні легенди/',
		'fileWithFilenames': '/-/lists/Українські народні легенди.txt',
	},
	'Українські легенди': {
		'advertizing': providePageAdvertizing__Type_1,
		'alphabet menu': true,
		'title for a list of all pages': 'Алфавітний покажчик',
		'path': '/Українські народні легенди/',
		'fileWithFilenames': '/-/lists/Українські народні легенди.txt',
	},
	'Український міф': {
		'advertizing': providePageAdvertizing__Type_1,
		'alphabet menu': true,
		'list of random links': true,
		'path': '/Українська міфологія/',
		'fileWithFilenames': '/-/lists/Українська міфологія.txt',
	},
	'Українська міфологія': {
		'advertizing': providePageAdvertizing__Type_1,
		'alphabet menu': true,
		'title for a list of all pages': 'Алфавітний покажчик',
		'path': '/Українська міфологія/',
		'fileWithFilenames': '/-/lists/Українська міфологія.txt',
	},
	'Українське оповідання': {
		'advertizing': providePageAdvertizing__Type_1,
		'alphabet menu': true,
		'list of random links': true,
		'path': '/Українські народні оповідання/',
		'fileWithFilenames': '/-/lists/Українські народні оповідання.txt',
	},
	'Українські оповідання': {
		'advertizing': providePageAdvertizing__Type_1,
		'alphabet menu': true,
		'title for a list of all pages': 'Алфавітний покажчик',
		'path': '/Українські народні оповідання/',
		'fileWithFilenames': '/-/lists/Українські народні оповідання.txt',
	},
	'Українська пісня': {
		'advertizing': providePageAdvertizing__Type_1,
		'alphabet menu': true,
		'list of random links': true,
		'path': '/Українські народні пісні/',
		'fileWithFilenames': '/-/lists/Українські народні пісні.txt',
	},
	'Українські пісні': {
		'advertizing': providePageAdvertizing__Type_1,
		'alphabet menu': true,
		'title for a list of all pages': 'Алфавітний покажчик',
		'path': '/Українські народні пісні/',
		'fileWithFilenames': '/-/lists/Українські народні пісні.txt',
	},
};
const pageType = document.body.dataset.pageType;
const e__alphabetContent = document.querySelector('.alphabetContent');
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
	document.documentElement.addEventListener('click', event => {
		// console.log(event);
		click__pageHeaderProjectMenu__switch(event);
		click__pageHeaderAlphabetMenu__switch(event);
		click__pageHeader__shadow(event);
		click__pageHeaderAlphabetMenu__item(event);
		click__audioFigure(event);
	});
	document.documentElement.addEventListener('keydown', event => {
		// console.log(event);
		keydown__pageHeaderProjectMenu__switch(event);
		keydown__pageHeaderAlphabetMenu__switch(event);
		keydown__pageHeaderAlphabetMenu__item(event);
		keydown__audioFigure(event);
	});
}


function click__pageHeaderProjectMenu__switch(event) {
	if (event.target.classList.contains('pageHeaderProjectMenu__switch')
		|| event.target.classList.contains('pageHeaderProjectMenu__switchIcon')
		|| event.target.parentElement.classList.contains('pageHeaderProjectMenu__switchIcon'))
	{
		if (document.body.dataset.opened === 'pageHeaderProjectMenu') {
			document.body.dataset.opened = '';
		}
		else {
			document.body.dataset.opened = 'pageHeaderProjectMenu';
		}
	}
}


function keydown__pageHeaderProjectMenu__switch(event) {
	if ((event.key === ' ' || event.key === 'Enter') && event.target.classList.contains('pageHeaderProjectMenu__switch')) {
		if (document.body.dataset.opened === 'pageHeaderProjectMenu') {
			document.body.dataset.opened = '';
		}
		else {
			document.body.dataset.opened = 'pageHeaderProjectMenu';
		}
	}
}


function click__pageHeaderAlphabetMenu__switch(event) {
	if (event.target.classList.contains('pageHeaderAlphabetMenu__switch')) {
		if (document.body.dataset.opened === 'pageHeaderAlphabetMenu') {
			document.body.dataset.opened = '';
		}
		else {
			document.body.dataset.opened = 'pageHeaderAlphabetMenu';
		}
	}
}


function keydown__pageHeaderAlphabetMenu__switch(event) {
	if ((event.key === ' ' || event.key === 'Enter') && event.target.classList.contains('pageHeaderAlphabetMenu__switch')) {
		if (document.body.dataset.opened === 'pageHeaderAlphabetMenu') {
			document.body.dataset.opened = '';
		}
		else {
			document.body.dataset.opened = 'pageHeaderAlphabetMenu';
		}
	}
}


function click__pageHeaderAlphabetMenu__item(event) {
	if (event.target.classList.contains('pageHeaderAlphabetMenu__item')) {
		let letter = event.target.innerText;
		if (event.target.parentElement.dataset.dataRole === 'files') {
			showFilesByLetter(letter);
		}
		else if (event.target.parentElement.dataset.dataRole === 'dictionary') {
			showDictionaryByLetter(letter);
		}
		document.body.dataset.opened = 'alphabetContent';
	}
}


function keydown__pageHeaderAlphabetMenu__item(event) {
	if ((event.key === ' ' || event.key === 'Enter') && event.target.classList.contains('pageHeaderAlphabetMenu__item')) {
		let letter = event.target.innerText;
		if (event.target.parentElement.dataset.dataRole === 'files') {
			showFilesByLetter(letter);
		}
		else if (event.target.parentElement.dataset.dataRole === 'dictionary') {
			showDictionaryByLetter(letter);
		}
		document.body.dataset.opened = 'alphabetContent';
	}
}


function click__pageHeader__shadow(event) {
	if (event.target.classList.contains('pageHeader__shadow')) {
		document.body.dataset.opened = '';
	}
}


function click__audioFigure(event) {
	// console.log(`${scriptName} function: click__audioFigure ${[...arguments,]}`);
	// console.log(event);
	if (event.target.classList.contains('audio--notActivated')) {
		event.target.classList.remove('audio--notActivated');
	}
}


function keydown__audioFigure(event) {
	// console.log(`${scriptName} function: click__audioFigure ${[...arguments,]}`);
	// console.log(event);
	if ((event.key === ' ' || event.key === 'Enter') && event.target.classList.contains('audio--notActivated')) {
		event.preventDefault();
		event.target.classList.remove('audio--notActivated');
	}
}


function getRandomInt(value) {
	// console.log(`${scriptName} function: getRandomInt`);
	return Math.floor(Math.random() * Math.floor(value));
}


function createAlphabetMenuOfFiles() {
	// console.log(`${scriptName} function: createAlphabetMenuOfFiles`);
	const e__pageHeaderAlphabetMenu = document.querySelector('.pageHeaderAlphabetMenu');
	if (e__pageHeaderAlphabetMenu) {
		let e__div = document.createElement('div');
		e__div.className = 'pageHeaderAlphabetMenu__items';
		e__div.dataset.dataRole = 'files';
		let alphabet = new Set([
			'А', 'Б', 'В', 'Г', 'Ґ', 'Д', 'Е', 'Є', 'Ж', 'З', 'И', 'І', 'Ї', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ю', 'Я',
			'Ы', 'Э', 'Ё',
			'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
		]);
		let alphabetMenuLetters = new Set();
		let letters = new Set();
		let localData = JSON.parse(localStorage.getItem(pageTypes[pageType].fileWithFilenames));
		let filenames = localData.data;
		filenames.forEach(filename => {
			letters.add(filename[0]);
		});
		letters.forEach(letter => {
			if (alphabet.has(letter)) {
				alphabetMenuLetters.add(letter);
			}
		});
		// console.log(alphabetMenuLetters);
		alphabetMenuLetters.forEach(letter => {
			e__div.insertAdjacentHTML('beforeend',
				`<span tabindex="0" role="button" class="pageHeaderAlphabetMenu__item">${letter}</span>`
			);
		});
		e__pageHeaderAlphabetMenu.appendChild(e__div);
		e__pageHeaderAlphabetMenu.classList.add('pageHeaderAlphabetMenu--exist');
	}
}


function showFilesByLetter(letter) {
	let localData = JSON.parse(localStorage.getItem(pageTypes[pageType].fileWithFilenames));
	let filenames = localData.data;
	let e__ul = document.createElement('ul');
	e__ul.className = 'alphabetWorks';
	filenames.forEach(filename => {
		if (filename[0] === letter) {
			e__ul.insertAdjacentHTML('beforeend',
				`<li class="alphabetWorks__work"><a class="alphabetWorks__workLink" href="${pageTypes[pageType].path}${filename}.html">${filename}</a></li>`
			);
		}
	});
	// console.log(e__ul);
	e__alphabetContent.innerHTML = '';
	e__alphabetContent.appendChild(e__ul);
}


function appendDictionary(event) {
	// console.log(`${scriptName} function: appendDictionary ${[...arguments,]}`);
	event.preventDefault();
	const e__summary = event.target;
	e__summary.removeEventListener('click', appendDictionary);
	const lang = e__summary.getAttribute('lang');
	const localeStorageKey = pageTypes[pageType].dictionaryFiles.get(lang);
	const localData = JSON.parse(localStorage.getItem(localeStorageKey));
	const items = localData.data;
	const e__details = e__summary.parentElement;
	const e__ul = document.createElement('ul');
	e__ul.className = 'dictionary';
	items.forEach(item => {
		let [term, definition] = item.split('\t');
		e__ul.insertAdjacentHTML('beforeend',
			`<li class="dictionary__item"><span class="dictionary__itemTerm">${term}</span> — <span class="dictionary__itemDefinition">${definition}</span></li>`
		);
	});
	e__details.appendChild(e__ul);
	e__details.setAttribute('open', '');
	let startElementIndex = findLastVisibleElementIndex(e__ul);
	const customListOfAllFilesAdvertizingBlocks = insertAdvertizing(e__ul, startElementIndex, 'afterend', 100, 50);
	activateCustomAdvertizingBlocks(customListOfAllFilesAdvertizingBlocks);
}


function createAlphabetMenuOfDictionaries() {
	// console.log(`${scriptName} function: createAlphabetMenuOfDictionaries ${[...arguments,]}`);
	const e__pageHeaderAlphabetMenu = document.querySelector('.pageHeaderAlphabetMenu');
	if (e__pageHeaderAlphabetMenu) {
		let e__div = document.createElement('div');
		e__div.className = 'pageHeaderAlphabetMenu__items';
		e__div.dataset.dataRole = 'dictionary';
		let alphabet = new Set([
			'А', 'Б', 'В', 'Г', 'Ґ', 'Д', 'Е', 'Є', 'Ж', 'З', 'И', 'І', 'Ї', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ю', 'Я',
			'Ы', 'Э', 'Ё',
			'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
			'’',
		]);
		let alphabetMenuLetters = new Set();
		let letters = new Set();
		pageTypes[pageType].dictionaryFiles.forEach(localStorageKey => {
			// console.log(localStorageKey);
			let localData = JSON.parse(localStorage.getItem(localStorageKey));
			let items = localData.data;
			items.forEach(item => {
				letters.add(item[0]);
			});
		});
		letters.forEach(letter => {
			if (alphabet.has(letter)) {
				alphabetMenuLetters.add(letter);
			}
		});
		alphabetMenuLetters.forEach(letter => {
			e__div.insertAdjacentHTML('beforeend',
				`<span tabindex="0" role="button" class="pageHeaderAlphabetMenu__item">${letter}</span>`
			);
		});
		e__pageHeaderAlphabetMenu.appendChild(e__div);
		e__pageHeaderAlphabetMenu.classList.add('pageHeaderAlphabetMenu--exist');
	}
}


function showDictionaryByLetter(letter) {
	// console.log(`${scriptName} function: showDictionaryByLetter ${[...arguments,]}`);
	let e__ul = document.createElement('ul');
	e__ul.className = 'alphabetDictionary';
	pageTypes[pageType].dictionaryFiles.forEach((localStorageKey, lang) => {
		let localData = JSON.parse(localStorage.getItem(localStorageKey));
		let items = localData.data;
		items.forEach(item => {
			let [term, definition] = item.split('\t');
			if (term[0] === letter) {
				e__ul.insertAdjacentHTML('beforeend',
					`<li class="alphabetDictionary__item" lang="${lang}"><span class="alphabetDictionary__itemTerm">${term}</span> — <span class="dictionary__itemDefinition">${definition}</span></li>`
				);
			}
		});
	});
	e__alphabetContent.innerHTML = '';
	e__alphabetContent.appendChild(e__ul);
}


function createListOfRandomLinks() {
	// console.log(`${scriptName} function: createListOfRandomLinks`);
	let randomFilenames = new Set();
	let localData = JSON.parse(localStorage.getItem(pageTypes[pageType].fileWithFilenames));
	let filenames = localData.data;
	const e__mainFooter = document.querySelector('.mainFooter');
	const e__ul = document.createElement('ul');
	e__ul.className = 'mainFooterRandomWorks';

	while (randomFilenames.size < 10) {
		let itemValue = filenames[getRandomInt(filenames.length)];
		if (typeof itemValue === 'string' && itemValue !== '' && itemValue !== currentPageFileName) {
			randomFilenames.add(itemValue);

		}
	}

	randomFilenames.forEach(filename => {
		e__ul.insertAdjacentHTML('beforeend', `<li class="mainFooterRandomWorks__work"><a class="mainFooterRandomWorks__workLink" href="${pageTypes[pageType].path}${filename}.html">${filename}</a></li>`);
	});

	if (e__mainFooter) {
		e__mainFooter.appendChild(e__ul);
	}
}


function createPlaceForListOfAllFiles() {
	// console.log(`${scriptName} function: createPlaceForListOfAllFiles`);
	const e__articleMain = document.querySelector('.articleMain');
	// const e__articleMainFooter = document.querySelector('.articleMain > .article__footer');
	const e__details = document.createElement('details');
	e__details.className = 'article__details';
	const e__summary = document.createElement('summary');
	e__summary.addEventListener('click', appendListOfAllFiles);
	e__summary.className = 'article__summary';
	e__summary.innerText = pageTypes[pageType]['title for a list of all pages'] || 'Алфавітний покажчик';
	e__details.appendChild(e__summary);
	e__articleMain.appendChild(e__details);
	// e__articleMain.insertBefore(e__details, e__articleMainFooter);
}


function appendListOfAllFiles(event) {
	// console.log(`${scriptName} function: appendListOfAllFiles`);
	event.preventDefault();
	const e__summary = event.target;
	e__summary.removeEventListener('click', appendListOfAllFiles);
	const e__details = e__summary.parentElement;
	const e__ul = document.createElement('ul');
	e__ul.className = 'article__listOfLinks';
	const localData = JSON.parse(localStorage.getItem(pageTypes[pageType].fileWithFilenames));
	const filenames = localData.data;
	filenames.forEach(filename => {
		e__ul.insertAdjacentHTML('beforeend', `<li><a href="${pageTypes[pageType].path}${filename}.html">${filename}</a></li>`);
	});
	e__details.appendChild(e__ul);
	e__details.setAttribute('open', '');
	let startElementIndex = findLastVisibleElementIndex(e__ul);
	const customListOfAllFilesAdvertizingBlocks = insertAdvertizing(e__ul, startElementIndex, 'afterend', 100, 50);
	activateCustomAdvertizingBlocks(customListOfAllFilesAdvertizingBlocks);
}


async function fetchDataToLocalStorage(key) {
	// console.log(`${scriptName} async function: fetchDataToLocalStorage`);
	let serverData = {};
	return await fetch(key, { 'method': 'GET', 'cache': 'reload', })
		.then(response => {
			// console.log(response);
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
			// console.log(serverData.data);
			try {
				localStorage.setItem(key, JSON.stringify(serverData));
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
		let localData = JSON.parse(localStorage.getItem(key));
		return await fetch(key, { 'method': 'HEAD', 'cache': 'no-store', })
			.then(async response => {
				// console.log(response);
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				// console.log(response.headers.get('Last-Modified'));
				if (localData['Last-Modified'] !== response.headers.get('Last-Modified')) {
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
				// console.log('result', result);
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
	// console.log(storageStatus);
}


function fillPage() {
	// console.log(`${scriptName} function: fillPage`);
	if (storageStatus.fileWithFilenames) {
		if (pageTypes[pageType]['list of random links']) {
			createListOfRandomLinks();
		}
		if (pageTypes[pageType]['alphabet menu']) {
			createAlphabetMenuOfFiles();
		}
		if (pageTypes[pageType]['title for a list of all pages']) {
			createPlaceForListOfAllFiles();
		}
	}
	if (storageStatus.dictionaryFiles) {
		if (pageTypes[pageType].dictionaryFiles) {
			const ee__summary = document.querySelectorAll('summary');
			for (let e__summary of ee__summary) {
				e__summary.addEventListener('click', appendDictionary);
			}
			createAlphabetMenuOfDictionaries();
		}
	}
}


// Advertizing
function providePageAdvertizing() {
	// console.log(`${scriptName} function: provideAdvertizing`);
	pageTypes[pageType].advertizing();
}


function addEventsForAdvertizing() {
	document.documentElement.addEventListener('keydown', activatePageAdvertizing);
	document.documentElement.addEventListener('mousedown', activatePageAdvertizing);
	document.documentElement.addEventListener('mousemove', activatePageAdvertizing);
	document.documentElement.addEventListener('scroll', activatePageAdvertizing);
	document.documentElement.addEventListener('touchstart', activatePageAdvertizing);
}


function removeEventsForAdvertizing() {
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
		// if (windowHeight >= 640) {
		// 	provideMainTopAdvertizing();
		// }
	}
	else if (windowWidth >= 1024) {
		provideRightInfoBlockAdvertizing();
		provideLEftInfoBlockAdvertizing();
		provideArticleAdvertizing__Type_1();
	}
	provideMainAdvertizingBlocks();
}


// function provideMainTopAdvertizing() {
// 	console.log(`${scriptName} function: provideMainTopAdvertizing`);
// 	const e__googleAdsMainTop = document.querySelector('.googleAdsMainTop');
// 	if (e__googleAdsMainTop) {
// 		customPageAdvertizingBlocks += insertAdvertizingBlock(e__googleAdsMainTop, 'afterbegin');
// 	}
// }


function providePageAdvertizing__Type_2() {
	console.log(`${scriptName} function: providePageAdvertizing__Type_2`);
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
	console.log(`${scriptName} function: provideArticleAdvertizing__Type_2`);
	const booksCatalogue = document.querySelector('.booksCatalogue');
	let childElementCount = booksCatalogue.childElementCount;
	let startElementIndex = findFirstInvisibleElementIndex(booksCatalogue);
	if (startElementIndex !== false) {
		if (windowWidth < 1024) {
			for (let index = startElementIndex; index < childElementCount; index+=7) {
				customPageAdvertizingBlocks += insertAdvertizingBlock(booksCatalogue.children[index], 'beforebegin');
				childElementCount += 1;
			}
		}
		else if (windowWidth >= 1024) {
			// const e__main = document.querySelector('main');
			if (windowWidth >= 1536) {
				for (let index = startElementIndex; index < childElementCount; index+=10) {
					customPageAdvertizingBlocks += insertAdvertizingBlock(booksCatalogue.children[index], 'beforebegin');
					childElementCount += 1;
				}
			}
			else {
				for (let index = startElementIndex; index < childElementCount; index+=7) {
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
	return false;
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
	console.log('customAdvertizingBlocks', number);
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
