class content {
    constructor() {
        this.sauce = document.getElementsByClassName('content')[0]
        this.isi = `
        <div class="anime_image fade">
            <a href="https://otakudesu.tube/anime/spy-family-sub-indo/" target="_blank">
                <img src="./source/anime/spy_x_family.jpg" alt="" width="100%" class="img-round" id="anime-img">
            </a>
        </div>
        <div class="anime_image fade">
            <a href="https://otakudesu.tube/anime/tate-yuusha-nariagari-s2-subtitle-indonesia/" target="_blank">
                <img src="./source/anime/Tate_s2.jpg" alt="" width="100%" class="img-round" id="anime-img">
            </a>
        </div>
        <div class="anime_image fade">
            <a href="https://otakudesu.tube/anime/shinjou-no-dainamaou-sub-indo/" target="_blank">
                <img src="./source/anime/demon_lord_reborn.jpg" alt="" width="100%" class="img-round" id="anime-img">
            </a>
        </div>
        <i id="prev" onclick="showImage(-1)" class="fa-solid fa-chevron-left"></i>
        <i id="next" onclick="showImage(1)" class="fa-solid fa-chevron-right"></i>
        `
    }

    createElement() {
        this.elem = document.createElement('div')
        this.elem.className = 'anime_container'
        this.elem.innerHTML = this.isi
    }

    init() {
        this.createElement()
        this.sauce.appendChild(this.elem)
    }
}