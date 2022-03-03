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
	let newI = [...priceNs].findIndex( priceN => priceN === e.target);
	priceNs[curI].style.borderColor = '#fff';
	priceNs[newI].style.borderColor = '#00754A';
	dicript[curI].style.display = 'none';
	dicript[newI].style.display = 'flex';
	curI = newI;
}
//learn more benefit 
let moreNodes = document.querySelectorAll('.benefit__p--more');
let card = function(avatar, title, content) {
	this.avatar = avatar;
	this.title = title;
	this.content = content;
}

let benefits = [
	[new card(
		'1A.jpg',
		'Free food, drinks & more',
		'Redeem your Stars for favorites like a handcrafted cold brew, protein box or even a coffee tumbler.'
	),
	new card(
		'1B.webp',
		'Complimentary birthday treat',
		'Every year on your birthday get a free drink or food item of your choice.'),
	new card(
		'1C.webp',
		'Brewed coffee & tea refills on us',
		'More Caffè Verona® Blend, please. We’re happy to refill your hot cup while you’re in the store. Just ask.')],
	[new card(
		'2A.jpg',
		'Tap, go.',
		'Select your menu items in the app along with your store location. Then tell the barista your name when you swing by the pickup area to grab your order.'),
	new card(
		'2B.webp',
		'Just for you',)],
	[new card(
		'3A.webp',
		'Bonus Star challenges',
		'Rack up the Stars with regular opportunities to get rewarded for what you love.'),
	new card(
		'3B.webp',
		'Double Star Days',
		'Watch for those special days where you’ll earn twice the Stars on almost everything.'),
	new card(
		'3C.webp',
		'Member-only games',
		'Play for a chance to win exclusive prizes, free food and drinks, and more.')],
];




for(const curI in moreNodes) {
	moreNodes[curI].onclick = e => {
		let benNode = document.querySelector('.benefits');
		
		let thisCard = benefits[curI][0];
		benNode.insertAdjacentHTML('afterend',
			`<div class="card">
				<img src="./assets/img/benefit/${thisCard.avatar}" alt="">
				<h4>${thisCard.title}</h4>
				<p>${thisCard.content}</p>
			</div>`)
		let cardN = document.querySelector('.card');
		cardN.style = Object.assign(cardN.style, {
			color: "red"
		});
		cardN.style.color = 'red'
		console.log(cardN.style.color);
	}
}
