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