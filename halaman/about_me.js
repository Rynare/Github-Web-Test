class about_me {
    constructor() {
        this.sauce = document.getElementsByClassName('about_me')[0]
        this.isi = `
        <div class="about_datadiri">
    <span class="judul tengah">Who Am I</span>
    <div class="datadiri_fix" style="letter-spacing: 1px; word-spacing: 2px;">
        MyName is Fahim David Bachtiar. <br>
        I Was Born on 04 - 09 - 2003. <br>
        I live in Banyuwangi, East Java. <br>
        My Hobby is Programming for Now
    </div>
</div>
<br>
<div class="skill-container">
    <span class="judul tengah">My Skill</span>
    <div class="skill-outer">
        <div class="skill_container">
            HTML
            <div class="skill_indicator">
                <div style="background: yellow; border-radius: 50px; width: 90%; text-align: end; margin: 2px;"
                    class="skill_animate">
                    <span class="angka">90%</span>
                </div>
            </div>
        </div>
        <div class="skill_container">
            CSS
            <div class="skill_indicator">
                <div style="background: yellow; border-radius: 50px; width: 80%; text-align: end; margin: 2px;"
                    class="skill_animate">
                    <span class="angka">80%</span>
                </div>
            </div>
        </div>
        <div class="skill_container">
            JAVASCRIPT
            <div class="skill_indicator">
                <div style="background: yellow; border-radius: 50px; width: 37%; text-align: end; margin: 2px;"
                    class="skill_animate">
                    <span class="angka">37%</span>
                </div>
            </div>
        </div>
        <div class="skill_container">
            C++
            <div class="skill_indicator">
                <div style="background: yellow; border-radius: 50px; width: 75%; text-align: end; margin: 2px;"
                    class="skill_animate">
                    <span class="angka">75%</span>
                </div>
            </div>
        </div>
        <div class="skill_container">
            PYTHON
            <div class="skill_indicator">
                <div style="background: yellow; border-radius: 50px; width: 13%; text-align: end; margin: 2px;"
                    class="skill_animate">
                    <span class="angka">13%</span>
                </div>
            </div>
        </div>
    </div>
</div>
        `
    }
    init() {
        this.sauce.innerHTML = this.isi
    }
}