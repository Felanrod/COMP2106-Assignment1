let screenH;
let prevH;
let mainMarginH;
const numCompensator = 23;
const header = document.querySelector('header');
const footer = document.querySelector('footer');
const mainTag = document.querySelector('main');
const bodyInitH = document.querySelector('body').offsetHeight;
const mainStyle = getComputedStyle(mainTag);
function getAllHeights(){
	screenH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
	if (screenH != prevH) {
		mainMarginH = parseInt(mainStyle.marginTop) + parseInt(mainStyle.marginBottom);
		prevH = screenH;
		if (screenH <= bodyInitH) {
			mainTag.style.height = "auto";
		} else {
			if (window.location.href === 'https://joelfmurphy.herokuapp.com/') {
				mainTag.style.height = (screenH - footer.offsetHeight - header.offsetHeight - mainMarginH - numCompensator) + "px";
			} else {
				mainTag.style.height = (screenH - footer.offsetHeight - header.offsetHeight - mainMarginH) + "px";
			}
		}
	}
}

(function() {
	prevH = -1;
	getAllHeights();
	window.onresize = getAllHeights;
})();