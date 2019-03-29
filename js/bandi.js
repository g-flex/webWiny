const $ = (selector) => document.querySelector(selector);

let offset = 500;
let call;
function scroll() {
    if ((offset - document.documentElement.scrollTop) > 20) {
        document.documentElement.scrollTop += 20
    } else if ((offset - document.documentElement.scrollTop) < -20) {
        document.documentElement.scrollTop -= 20
    } else {
        clearInterval(call)
    }
};

$('#scopri-bando').addEventListener("click", reply_click);

function reply_click() {
    event.preventDefault();
    call = setInterval(scroll, 10);
}
var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
};
window.addEventListener('scroll', function (event) {
	if (isInViewport($('.info-bando-1>h3'))) {
		document.querySelectorAll('.info-bando').forEach((info)=>{
			info.classList.remove('margin-opacity-out');
		});
	}
}, false);