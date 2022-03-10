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
let benNode = document.querySelector('.benefits');
let moreNodes = benNode.querySelectorAll('.benefit__p--more');
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
		'Just for you',
		'Our app lets you customize your order and track an estimated pickup time. Make sure to save your favorites so they’re all ready for your next order.')],
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

let removeCard = () =>{
   benNode.removeChild(coverN);
}

let coverN, closeN;
for(const i in moreNodes) {
	moreNodes[i].onclick = function(e) {
		let benefit = benefits[i];
		let str = `<div class="cover">
						<div class="card">
							<img src="./assets/img/benefit/${benefit[0].avatar}">
							<i class="fas fa-times"></i>
							<h4>${benefit[0].title}</h4>
							<p>${benefit[0].content}</p>
							<div class="card--btn">
							   <div class="card--btn__navi">
							   	<i class="fas fa-chevron-left" style="display: none;"></i>
							   </div>
							   <div class="card--btn__cirles">
							      ${'<div class="card--btn__cirle"></div>'.repeat(benefit.length)}
							   </div>
							   <div class="card--btn__navi">
							   	<i class="fas fa-chevron-right" style="display: ${(benefit.length > 1) ? 'inline-block' : 'none'};"></i>
							   </div>
							</div>
						</div>
					</div>`;
		benNode.insertAdjacentHTML('beforeend', str);
		coverN = benNode.querySelector('.cover');
		closeN = coverN.querySelector('i');
		coverN.onclick = function(e) {
		   switch(e.target){
		      case closeN: removeCard();
		                   break;
		      case coverN: removeCard();
		                   break;
		   }
		}
		let cirlesN = document.querySelectorAll('.card--btn__cirle');
		let [...cardbtnList] = cirlesN;
		let curCardI = 0;
		cardbtnList[0].style.backgroundColor = '#00754A';
		cardbtnList.forEach( (cardbtn) => {
			cardbtn.onclick = function(e) {
				let j = cardbtnList.findIndex( cardbtnN => cardbtnN === e.target);
				if(j == curCardI) return 0;
				let cardChilds = [...benNode.querySelector('.card').childNodes];
				let cardList = cardChilds.reduce( (childs, cur, i) => (i % 2 != 0) ? [...childs, cur] : childs, []);
		      cardList[0].src = `./assets/img/benefit/${benefit[j].avatar}`;
		      cardList[2].textContent = `${benefit[j].title}`;
		      cardList[3].textContent = `${benefit[j].content}`;
		      cardbtnList[curCardI].style.backgroundColor = '#fff';
		      cardbtnList[j].style.backgroundColor = '#00754A';
		      curCardI = j;
				let naviNs = document.querySelectorAll('.card--btn__navi>i');
				switch(curCardI){
					case 0: naviNs[0].style.display = 'none';
							  naviNs[1].style.display = 'inline-block';
							  break;
					case benefit.length - 1: naviNs[0].style.display = 'inline-block';
													 naviNs[1].style.display = 'none';
													 break;
					default: naviNs[0].style.display = 'inline-block';
								 naviNs[1].style.display = 'inline-block';
								 break;
				}
				// naviNs.forEach((naviN) =>{
				// 	naviN
				// });
			};
		});
	}
}
