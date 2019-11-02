let screenH;
let prevH;
let mainMarginH;
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
			mainTag.style.height = (screenH - footer.offsetHeight - header.offsetHeight - mainMarginH) + "px";
		}
	}
}

(function() {
	prevH = -1;
	getAllHeights();
	window.onresize = getAllHeights;
})();