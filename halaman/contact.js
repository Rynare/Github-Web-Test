class contact {
    constructor() {
        this.sauce = document.getElementsByClassName('contact')[0]
        this.isi = `
        <div class="contact_wrapper">
    <div class="black-bg">
        <a href="https://api.whatsapp.com/send?phone=6283847978026&text=NetNot" target="_blank">
            <div class="logo-com">
                <i class="fa-brands fa-whatsapp"></i><span class="text-social">Whatsapp</span>
            </div>
        </a>
        <a href="https://www.facebook.com/M.FahimDavidBachtiar/" target="_blank">
            <div class="logo-com">
                <i class="fa-brands fa-facebook-f"></i><span class="text-social">Facebook</span>
            </div>
        </a>
        <a href="https://instagram.com/" target="_blank">
            <div class="logo-com">
                <i class=" fa-brands fa-instagram igbro"></i><span class="text-social">Instagram</span>
            </div>
        </a>
    </div>
</div>
        `

    }
    init() {
        this.sauce.innerHTML = this.isi
    }
}