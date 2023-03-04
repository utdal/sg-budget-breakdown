function open_faq(element) {
    element = element.parentElement.parentElement.parentElement;
    element.querySelector('#faq-contents').classList.remove("hidden");
    element.querySelector('#faq-open').classList.add("hidden");
    element.querySelector('#faq-close').classList.remove("hidden");
}

function close_faq(element) {
    element = element.parentElement.parentElement.parentElement;
    element.querySelector('#faq-contents').classList.add("hidden");
    element.querySelector('#faq-open').classList.remove("hidden");
    element.querySelector('#faq-close').classList.add("hidden");
}
function open_nav() {
    document.getElementById("navbar-nav").classList.remove("hidden");
    document.getElementById("navbar-open").classList.add("hidden");
    document.getElementById("navbar-close").classList.remove("hidden");
}

function close_nav() {
    document.getElementById("navbar-nav").classList.add("hidden");
    document.getElementById("navbar-open").classList.remove("hidden");
    document.getElementById("navbar-close").classList.add("hidden");
}

window.open_nav = open_nav;
window.close_nav = close_nav;
