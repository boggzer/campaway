window.addEventListener('load', addEventListeners);

function addEventListeners() {
    window.addEventListener('scroll', resizeNav);
    document.addEventListener('click', disableMouseEvent, true);
    document.querySelector('form.search').addEventListener('submit', noRefresh);
}

function resizeNav(event) {
    if (window.pageYOffset > (window.innerHeight * 0.2)) {
        document.querySelector('header').classList.add('minimize')
    } else {
        document.querySelector('header').classList.remove('minimize')
    }
}

function disableMouseEvent(event) {
    event.stopPropagation();
    event.preventDefault();
}

function noRefresh(event) {
    event.preventDefault();
}
