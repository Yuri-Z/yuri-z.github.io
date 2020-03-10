export default function menuItemPicker (event) {
	let element = event.target;
	
	if (!element.classList.contains('sidebar__menu-item-inner')) {
		element = element.parentNode;
	}
	if (!element.classList.contains('sidebar__menu-item-inner_active')) {
		if (document.querySelector('.sidebar__menu-item-inner_active')) {
			document.querySelector('.sidebar__menu-item-inner_active').classList.remove('sidebar__menu-item-inner_active');
		}
		element.classList.add('sidebar__menu-item-inner_active');
		
		document.querySelector('.content__title').innerHTML = element.children[1].innerHTML;
	}
}