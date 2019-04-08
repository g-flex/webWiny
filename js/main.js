const $ = (selector) => document.querySelector(selector);

let offsetCosa = 750;
let call;
function scroll(offset) {
    if ((offset - document.documentElement.scrollTop) > 20) {
        document.documentElement.scrollTop += 20
    } else if ((offset - document.documentElement.scrollTop) < -20) {
        document.documentElement.scrollTop -= 20
    } else {
        clearInterval(call)
    }
};

$('#cosa-e-winy').addEventListener("click", function(){reply_click(offsetCosa)});
$('.current-page').addEventListener("click", function(){reply_click(0)});

function reply_click(offset) {
    event.preventDefault();
	call = setInterval(
		function(){scroll(offset)}, 10
	);
}

var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
};

document.addEventListener("DOMContentLoaded", () => {
    //console.log('loaded');
    setTimeout(function(){
        $('.loading-img').classList.add('d-none');
        $('#banner').play();
    }, 3500);
});

$('.ultima-vincitrice > span').addEventListener('click', function(){
    window.location.replace('etichette.html');
});

$('.creativo > span:nth-of-type(1)').addEventListener('click', function(){
    $('.overlay').classList.remove('not-popped');
    console.log('clicked');
});
$('.creativo > span:nth-of-type(2)').addEventListener('click', function(){
    $('.overlay').classList.remove('not-popped');
    console.log('clicked');
});
$('.produttore > span:nth-of-type(1)').addEventListener('click', function(){
    $('.overlay').classList.remove('not-popped');
    console.log('clicked');
});
$('.produttore > span:nth-of-type(2)').addEventListener('click', function(){
    $('.overlay').classList.remove('not-popped');
    console.log('clicked');
});

$('.popup img').addEventListener('click', function(){
    $('.overlay').classList.add('not-popped');
    console.log('clicked');
});

