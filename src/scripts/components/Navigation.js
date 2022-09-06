import { trigger } from '../helpers/Event'

let navMobile = document.querySelector('.NavMobile')

if (navMobile) {
	let navMobileOpener = document.querySelector('.Burger')

	navMobile.addEventListener('open', (e) => {
		navMobileOpener.classList.add('is-open')
		navMobile.classList.add('is-open')
	})

	navMobile.addEventListener('close', (e) => {
		navMobileOpener.classList.remove('is-open')
		navMobile.classList.remove('is-open')
	})

	navMobileOpener.addEventListener('click', e => {
		if (navMobile.classList.contains('is-open')) {
			trigger(navMobile, 'close')
		} else {
			trigger(navMobile, 'open')
		}
	})

	// event outer click
	document.body.addEventListener('click', e => {
		if (
			navMobile.classList.contains('is-open') &&
			!e.target.closest('.NavMobile') &&
			!e.target.closest('.Burger') &&
			!e.target.classList.contains('NavMobileOpener')
		){
			trigger(navMobile, 'close')
		}
	})
}
