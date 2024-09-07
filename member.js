function skillsMember() {}
skillsMember.prototype = new skills();
skillsMember.prototype.constructor = skillsMember;
skillsMember.prototype.init = function() {
    this.skills = {
        "skill1": {
            "skill": "Java",
            "level": "Intermediate"
        },
        "skill2": {
            "skill": "C++",
            "level": "Advanced"
        },
        "skill3": {
            "skill": "JavaScript",
            "level": "Intermediate"
        },
        "skill4": {
            "skill": "HTML",
            "level": "Intermediate"
        },
        "skill5": {
            "skill": "CSS",
            "level": "Intermediate"
        }
    };
    this.displaySkills();
};
skillsMember.prototype.displaySkills = function() {
    var skillList = document.getElementById("skills");
    var skills = this.skills;
    for (var skill in skills) {
        var listItem = document.createElement("li");
        listItem.innerHTML = skills[skill].skill + " - " + skills[skill].level;
        skillList.appendChild(listItem);
    }
};