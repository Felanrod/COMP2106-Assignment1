const secondYearTab = document.querySelector('#secondYearTab');

(function() {
	if (window.location.hash.indexOf("secondYearTab") > -1) {
        alert('Look Out!');
        secondYearTab.click();
    }
})();