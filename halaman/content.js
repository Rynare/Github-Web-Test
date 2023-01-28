class Content {
    constructor() {
        this.html = `
            <div class='anime_container'>
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
            </div>
        `;
    }

    render(source) {
        return source.innerHTML = this.html;
    }
}
