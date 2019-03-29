const $ = (selector) => document.querySelector(selector);

var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
};
let steps = document.querySelectorAll('.step');
steps.forEach((step)=>{
	window.addEventListener('scroll', function (event) {
		if (isInViewport($('.step-1'))) {
			step.querySelector('p').style.marginLeft='20px';
			step.querySelector('img').style.marginLeft=0;
		}
	}, false);
});

window.addEventListener('scroll', function (event) {
	if (isInViewport($('.step-1'))) {
		$('.illustration img').style.transform='scale(1)';
		$('.illustration p').style.right='50px';
	}
}, false);

document.addEventListener("DOMContentLoaded", () => {
	console.log('loaded');
	$('#banner').play();
});