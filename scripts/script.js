var stickyDiv = document.querySelector(".sticky-div");
var engagementWrapper = stickyDiv.parentElement
var initialStickyPosition = stickyDiv.getBoundingClientRect().top - engagementWrapper.getBoundingClientRect().top;

window.onscroll = function () {
    const scrollY = window.scrollY;
    if (scrollY > initialStickyPosition) {
        stickyDiv.style.position = "fixed";
        stickyDiv.style.top = $('nav').height() + $('.tab-container').height() + "px";
        stickyDiv.style.width = "-webkit-fill-available";
        stickyDiv.style.paddingRight = "16px";

        // Set a fixed width for the stickyDiv
        // stickyDiv.style.width = stickyDiv.offsetWidth + "px";
    } else {
        stickyDiv.style.position = "relative";
        stickyDiv.style.top = "initial";
        stickyDiv.style.width = "auto"; // Reset the width when not fixed
        stickyDiv.style.paddingRight = "0";
    }
}


$(document).ready(function () {
    M.AutoInit();
});

