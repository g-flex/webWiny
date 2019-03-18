const $ = (selector) => document.querySelector(selector);
let currentCarouselPage = 0;

$('.carousel__window').style.left=0;
$('.crumb-0').style='height: 7px; background-color: #2b0116;';
function clickPrevious(){
	if(currentCarouselPage == 0){
		$('.carousel__window').style.left='-200vw';
		$('.crumb-2').style='height: 7px; background-color: #2b0116;';
		$('.crumb-0').style='';
		$('.crumb-1').style='';
		currentCarouselPage = 2;
	} else if(currentCarouselPage == 1){
		$('.carousel__window').style.left=0;
		$('.crumb-2').style='';
		$('.crumb-0').style='height: 7px; background-color: #2b0116;';
		$('.crumb-1').style='';
		currentCarouselPage = 0;
	} else if(currentCarouselPage == 2){
		$('.carousel__window').style.left='-100vw';
		$('.crumb-2').style='';
		$('.crumb-0').style='';
		$('.crumb-1').style='height: 7px; background-color: #2b0116;';
		currentCarouselPage = 1;
	}
}
function clickNext(){
	if(currentCarouselPage == 0){
		$('.carousel__window').style.left='-100vw';
		$('.crumb-2').style='';
		$('.crumb-0').style='';
		$('.crumb-1').style='height: 7px; background-color: #2b0116;';
		currentCarouselPage = 1;
	} else if(currentCarouselPage == 1){
		$('.carousel__window').style.left='-200vw';
		$('.crumb-2').style='height: 7px; background-color: #2b0116;';
		$('.crumb-0').style='';
		$('.crumb-1').style='';
		currentCarouselPage = 2;
	} else if(currentCarouselPage == 2){
		$('.carousel__window').style.left=0;
		$('.crumb-2').style='';
		$('.crumb-0').style='height: 7px; background-color: #2b0116;';
		$('.crumb-1').style='';
		currentCarouselPage = 0;
	}
}
$('.crumb-0').addEventListener('click', function(){
	if(currentCarouselPage == 1){
		clickPrevious();
	} else if(currentCarouselPage == 2){
		clickNext();
	}
	currentCarouselPage = 0;
});
$('.crumb-1').addEventListener('click', function(){
	if(currentCarouselPage == 2){
		clickPrevious();
	} else if(currentCarouselPage == 0){
		clickNext();
	}
	currentCarouselPage = 1;
});
$('.crumb-2').addEventListener('click', function(){
	if(currentCarouselPage == 0){
		clickPrevious();
	} else if(currentCarouselPage == 1){
		clickNext();
	}
	currentCarouselPage = 2;
});

document.onkeydown = function(e) {
	e = e || window.event;
	switch(e.which || e.keyCode) {
		case 37: clickPrevious();
		break;
		case 39: clickNext();
		break;
		default: return;
	}
	e.preventDefault();
}

$('.previous').addEventListener('click', clickPrevious);
$('.next').addEventListener('click', clickNext);



let offset = 0;
let call;
function scroll() {
    if ((offset - document.documentElement.scrollTop) > 15) {
        document.documentElement.scrollTop += 15
    }
    else if ((offset - document.documentElement.scrollTop) < -15) {
        document.documentElement.scrollTop -= 15
    }
    else {
        clearInterval(call)
    }
}

$('.nav__menu ul').addEventListener("click", reply_click);

function reply_click() {
	event.preventDefault();
	call = setInterval(scroll, 10);
	target = event.srcElement.dataset.scroll;

	let roundedOffset = Math.round($('.'+target).offsetTop/10)*10;
	offset = roundedOffset - 80;

}