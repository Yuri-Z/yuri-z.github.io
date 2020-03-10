export default function menuExpander(event) {
	let target = event.target;
	
	target.classList.toggle('icon-cross');
	target.classList.toggle('icon-bars');
	document.querySelector('.sidebar').classList.toggle('sidebar_expanded')
}