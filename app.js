class Menu {
    constructor() {
        this._menu = gID('menu');
        this._nav = gID('nav');
        this._openBtn = gID('menu-open-btn');
        this._closeBtn = gID('menu-close-btn');
        
        this._openBtn.addEventListener('click', _ => this.open());
        this._closeBtn.addEventListener('click', _ => this.close());
    }

    open() {
        this._menu.classList.add('menu-open');
    }

    close() {
        this._menu.classList.add('menu-close');

        setTimeout(_ => {
            this._nav.style.transition = "none";
            this._nav.style.left = "100%";
            this._menu.classList.remove('menu-open');
            this._menu.classList.remove('menu-close');
            this._menu.offsetHeight;
            this._nav.style.left = "";
            this._nav.style.transition = "";
        }, 1010);
    }
}

let menu = new Menu();

function gID(name) {
    return document.getElementById(name);
}