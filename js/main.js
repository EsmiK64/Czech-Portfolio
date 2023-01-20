function showMenu() {
    document.getElementById("kruh").classList.add("kruh-close");
    document.getElementById("kruh").classList.remove("kruh-open");
    document.getElementById("info").classList.add("info-hide");
    document.getElementById("info").classList.remove("info");
    document.getElementById("contacts").classList.add("contacts-hide");
    document.getElementById("contacts").classList.remove("contacts");
    document.getElementById("menu").remove();
    setTimeout(() => {
        document.getElementById("menu-section").classList.remove("menu-section-style");
        document.getElementById("menu-section").classList.add("menu-show");
    }, 2000);
}

function transition(redirect) {
    document.getElementById("transition").classList.add("transition-close");
    document.getElementById("transition").classList.add("transition-open");
    setTimeout(() => {
        window.location.href = redirect;
    }, 1950);
}