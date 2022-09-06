const svg = './images/icons.min.svg'

fetch(svg)
	.then(response => response.text())
	.then(text => {
		let container = document.createElement('div')
		container.classList.add('IconsSprite')
		container.innerHTML = text;
		document.body.appendChild(container)
	})
	.catch((err) => {
		console.log( 'svg file not found:', svg)
	})
