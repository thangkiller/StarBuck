// impact between header and footer
const nav2 = document.querySelector('.header');
const footer = document.querySelector('.footer');
const bottomHeader = nav2.getBoundingClientRect().bottom;

document.onscroll = function() {
	if(footer.getBoundingClientRect().y <= bottomHeader)
		nav2.style.display = 'none';
	else nav2.style.display = 'flex';
}

//scrolling order and pay button
var movedBtn = document.getElementsByClassName('contentColumn__columns__item__description--link')[4];
movedBtn.onclick = () => {
	var target = document.querySelector('.benefit__p--more');
	target.scrollIntoView();
}
//price button
var priceNodes = document.querySelector('.seletion__header__prices');
var cur = 0;
priceNodes.onclick = (e) => {
	// var curPrice = priceNodes.querySelector(`.seletion__header__prices__item:nth-child(${cur})`);

	// curPrice.classList.add('selection__dicription--disappear');

	console.log(e)
}