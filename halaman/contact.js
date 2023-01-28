class Contact {
    constructor() {
        this.whatsapp = "6283847978026";
        this.facebook = "https://www.facebook.com/M.FahimDavidBachtiar/";
        this.instagram = "https://instagram.com/";
    }

    displaySocialMedia() {
        let contactHTML = `
            <div class="contact_wrapper">
                <div class = "black-bg">
                    <a href="https://api.whatsapp.com/send?phone=${this.whatsapp}&text=NetNot" target="_blank">
                        <div class="logo-com"><i class="fa-brands fa-whatsapp"></i><span class="text-social">Whatsapp</span></div>
                    </a>
                    <a href="${this.facebook}" target="_blank">
                        <div class="logo-com"><i class="fa-brands fa-facebook-f"></i><span class="text-social">Facebook</span></div>
                    </a>
                    <a href="${this.instagram}" target="_blank">
                        <div class="logo-com"><i class=" fa-brands fa-instagram igbro"></i><span class="text-social">Instagram</span></div>
                    </a>
                </div>
            </div>

        `;
        return contactHTML;
    }
}

