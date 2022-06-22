class short_article {
    constructor() {
        this.sauce = document.getElementsByClassName('short_article')[0]
        this.isi = `
        <b>
    <span class="judul">Apa Itu <span class="judul" style="font-size: 2em;">Website?</span></span><br>
    <div class="isi">
        Website adalah sekumpulan halaman web yang saling berhubungan yang umumnya berada pada peladen yang sama
        berisikan
        kumpulan informasi yang disediakan secara perorangan, kelompok, atau organisasi <span>................</span>
    </div>
    <div class="view_more_container">
        <a href="https://id.wikipedia.org/wiki/Situs_web#firstHeading" target="_blank" rel="noopener noreferrer"
            class="view_more">
            <span class="view_more-btn">View More</span>
            <i class="fa-solid fa-arrow-right" style="padding-left: 4px;"></i>
        </a>
    </div>
</b>
        `
    }

    init() {
        this.sauce.innerHTML = this.isi
    }
}