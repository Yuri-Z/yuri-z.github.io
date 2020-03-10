let menuItemsDefault = [
	{icon: "icon-tile",     title: "Каталог",       isActive: false},
	{icon: "icon-pulse",	title: "Здовроье",      isActive: false},
	{icon: "icon-heart",	title: "Красота",       isActive: false},
	{icon: "icon-cat", 	    title: "Развлечения",   isActive: true },
	{icon: "icon-truck",    title: "Авто",          isActive: false},
];

export default function menuRenderer(items = menuItemsDefault) {
	let index, result = "";
	for (index in items) {
		if (items.hasOwnProperty(index)) {
			result +=   '<div class="sidebar__menu-item">' +
							`<div class="sidebar__menu-item-inner${items[index].isActive ? ' sidebar__menu-item-inner_active' : ''}">` +
								`<i class="sidebar__menu-item-icon ${items[index].icon}"></i>` +
								`<span class="sidebar__menu-item-title">${items[index].title}</span>` +
							'</div>' +
						'</div>'
		}
	}
	document.querySelector('.sidebar__menu').innerHTML = result;
}