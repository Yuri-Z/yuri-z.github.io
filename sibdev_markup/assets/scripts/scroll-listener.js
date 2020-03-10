let oldValue = -1;
export default function scrollListener(event) {
	if (oldValue < event.target.scrollTop) {
		document.querySelector('.content__header').classList.add('content__header_shortened')
	} else {
		document.querySelector('.content__header').classList.remove('content__header_shortened')
	}
	oldValue = event.target.scrollTop;
}