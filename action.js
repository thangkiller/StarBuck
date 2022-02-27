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
var parents = document.querySelector('.seletion__header__prices');
let priceNs = parents.querySelectorAll('.seletion__header__prices__item');
var curI = 0;
priceNs[0].style.borderColor = '#00754A';
parents.onclick = (e) => {
	const dicript = document.querySelectorAll('.selection__dicription');
	let newI;
	for(var i in priceNs) {
		if(priceNs[i] === e.target) newI = i;
	}
	priceNs[curI].style.borderColor = '#fff';
	priceNs[newI].style.borderColor = '#00754A';
	dicript[curI].style.display = 'none';
	dicript[newI].style.display = 'flex';
	curI = newI;
}