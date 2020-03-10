import tileRenderer from "./tile-renderer.js";
import menuRenderer from "./menu-renderer.js";
import menuExpander from "./menu-expander.js";
import scrollListener from "./scroll-listener.js";
import menuItemPicker from "./menu-item-picker.js";

menuRenderer();
tileRenderer();

document.querySelector('.sidebar__expand-button-icon').addEventListener('click', menuExpander);
document.querySelector('.content__body').addEventListener('scroll', scrollListener);

document.querySelectorAll('.sidebar__menu-item-inner').forEach((item) => {
	item.addEventListener('click', menuItemPicker);
});
