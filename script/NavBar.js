class NavBar {
    constructor() {
        this.nav_tag = document.querySelectorAll("nav")

        this.home = '<a href="#home"><div class="navbar_items"><i class="fa-solid fa-house"></i></div></a>';
        this.about = '<a href="#about"><div class="navbar_items"><i class="fa-solid fa-address-card"></i></div></a>';
        this.content = '<a href="#content"><div class="navbar_items"><i class="fa-solid fa-film"></i></div></a>';
        this.contact = '<a href="#contact"><div class="navbar_items"><i class="fa-solid fa-comment-dots"></i></div></a>';
    }

    render() {
        return this.nav_tag.forEach(elem => {
            elem.innerHTML = `
                ${this.home}
                ${this.about}
                ${this.content}
                ${this.contact}
            `
        })
    }
}


