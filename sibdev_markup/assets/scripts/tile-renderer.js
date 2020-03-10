let itemsDefault = [
	{title: "Пробка на Мира", 	description: "Вечер для двоих", num: "-50%", label: "Скидка"},
	{title: "КИНО И НЕМЦЫ", description: "Бесплатный бокал пива", num: "ВАРВАР", label: "ПРОМОКОД"},
	{title: "valery cakes", description: "Торт", num: "30%", label: "скидка"},
	{title: "sushi sell", description: "Набор “Праздник”", num: "45%", label: "скидка"},
	{title: "mangosteen", description: "Фрукт в подарок", num: "J130", label: "купон"},
	{title: "теленок табака", description: "Стейк “Мачете”", num: "20%", label: "скидка"},
	{title: "fire food", description: "Вторая шаурма в подарок", num: "ОГОНЬ", label: "промокод"},
	{title: "aroma cremeria", description: "Джелато “Пармезан”", num: "20%", label: "Скидка"},
	{title: "пробка на мира", description: "Вечер для двоих", num: "J130", label: "КУПОН"},
	{title: "Кино и немцы", description: "Бесплатный бокал пива", num: "ВАРВАР", label: "ПРОМОКОД"},
	{title: "VALERY CAKES", description: "Торт", num: "30%", label: "скидка"},
	{title: "sushi sell", description: "Набор “Праздник”", num: "45%", label: "скидка"},
	
	{title: "Пробка на Мира", 	description: "Вечер для двоих", num: "-50%", label: "Скидка"},
	{title: "КИНО И НЕМЦЫ", description: "Бесплатный бокал пива", num: "ВАРВАР", label: "ПРОМОКОД"},
	{title: "valery cakes", description: "Торт", num: "30%", label: "скидка"},
	{title: "sushi sell", description: "Набор “Праздник”", num: "45%", label: "скидка"},
	{title: "mangosteen", description: "Фрукт в подарок", num: "J130", label: "купон"},
	{title: "теленок табака", description: "Стейк “Мачете”", num: "20%", label: "скидка"},
	{title: "fire food", description: "Вторая шаурма в подарок", num: "ОГОНЬ", label: "промокод"},
	{title: "aroma cremeria", description: "Джелато “Пармезан”", num: "20%", label: "Скидка"},
	{title: "пробка на мира", description: "Вечер для двоих", num: "J130", label: "КУПОН"},
	{title: "Кино и немцы", description: "Бесплатный бокал пива", num: "ВАРВАР", label: "ПРОМОКОД"},
	{title: "VALERY CAKES", description: "Торт", num: "30%", label: "скидка"},
	{title: "sushi sell", description: "Набор “Праздник”", num: "45%", label: "скидка"}
];

export default function tileRenderer(items = itemsDefault) {
	let index, result = "";
	for (index in items) {
		if (items.hasOwnProperty(index)) {
			result +=   '<div class="tile" tabindex="-1">' +
							'<div class="tile__text">' +
								'<div class="tile__top">' +
									`<div class="tile__title">${items[index].title}</div>` +
									`<div class="tile__description">${items[index].description}</div>` +
								'</div>' +
								'<div class="tile__bottom">' +
									`<div class="tile__num">${items[index].num}</div>` +
									`<div class="tile__label">${items[index].label}</div>` +
								'</div>' +
							'</div>' +
							`<img class="tile__image" src="assets/images/image ${(parseInt(index)%12)+1}.png" alt="">` +
							'<img class="tile__stroke" src="assets/images/tile-stroke.png" alt="">' +
							'<div class="tile__background">' +
								'<img class="tile__background-image" src="assets/images/tile-background.png" alt="">' +
								'<div class="tile__shadow tile__shadow_upper"></div>' +
								'<div class="tile__shadow tile__shadow_lower"></div>' +
							'</div>' +
						'</div>'
		}
	}
	document.querySelector('.content__tiles').innerHTML = result;
}