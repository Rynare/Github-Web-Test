class AboutMe {
    constructor() {
        this.name = "Fahim David Bachtiar";
        this.dob = "04-09-2003";
        this.location = "Banyuwangi, East Java";
        this.hobby = "Programming";
        this.skills = {
            HTML: "90%",
            CSS: "80%",
            JAVASCRIPT: "37%",
            C: "75%",
            PYTHON: "13%"
        }
    }

    displayAboutMe() {
        let aboutMeHTML = `
        <div class="about_datadiri">
            <span class="judul tengah">Who Am I</span>
                <div class="datadiri_fix" style="letter-spacing: 1px; word-spacing: 2px;">
                    MyName is ${this.name}. <br>
                    I Was Born on ${this.dob}. <br>
                    I live in ${this.location}. <br>
                    My Hobby is ${this.hobby} for Now
                </div>
            </div>
        <br>`;

        let skillsHTML = `
            <div class="skill-container">
                <span class="judul tengah">My Skill</span>
            <div class="skill-outer">`;

        for (let skill in this.skills) {
            skillsHTML += `
                <div class="skill_container">
                    ${skill}
                    <div class="skill_indicator">
                        <div style="background: yellow; border-radius: 50px; width: ${this.skills[skill]}; text-align: end; margin: 2px;"
                            class="skill_animate">
                            <span class="angka">${this.skills[skill]}</span>
                        </div>
                    </div>
                </div>`;
        }

        skillsHTML += `</div></div>`;

        return aboutMeHTML + skillsHTML;
    }

}
