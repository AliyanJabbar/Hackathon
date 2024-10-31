//Getting Elements by ID
//    for education
var edu = document.getElementById("edu");
var eduContent = document.getElementById("edu-content");
//    for Skills
var skills = document.getElementById("skill");
var skillsContent = document.getElementById("skills-content");
//    for Experience
var exp = document.getElementById("exp");
var expContent = document.getElementById("exp-content");
//inner HTML for edu
if (!eduContent) {
    eduContent = document.createElement("div");
    eduContent.id = "edu-content";
    eduContent.innerHTML = "\n    <h3 class=\"newHead\">My Education</h3>\n    <ul>\n    <li><strong>Completed</strong> SSC Part(1&2).</br> 2022-2024</li>\n    <li><strong>Studying</strong> at (AGSC)Adamjee Govt Science College Karachi. </br> 2024-Onwards</li>\n    </ul>\n";
}
//inner HTML for skills
if (!skillsContent) {
    skillsContent = document.createElement("div");
    skillsContent.id = "skills-content";
    skillsContent.innerHTML = "\n        <h3 class=\"newHead\">My Skills</h3>\n        \n    <div id= \"allSkills\">\n        <div id=\"html\">\n        <div class=\"htmlSkill\">\n          <span> HTML <i class=\"fab fa-html5\"></i> </span>\n          <span class=\"text-md font-bold text-rose-900\"> 90% </span>\n        </div>\n        <div class=\"htmlSkillBar\">\n          <div class=\"htmlSkillBarLength\"></div>\n        </div>\n      </div>\n\n        <div id=\"css\">\n        <div class=\"cssSkill\">\n          <span> CSS <i class=\"fab fa-css3\"></i> </span>\n          <span> 75% </span>\n        </div>\n        <div class=\"cssSkillBar\">\n          <div class=\"cssSkillBarLength\"></div>\n        </div>\n      </div>\n\n        <div id=\"js\">\n        <div class=\"jsSkill\">\n          <span> JavaScript <i class=\"fab fa-js\"></i> </span>\n          <span> 80% </span>\n        </div>\n        <div class=\"jsSkillBar\">\n          <div class=\"jsSkillBarLength\"></div>\n        </div>\n      </div>\n\n        <div id=\"ts\">\n        <div class=\"tsSkill\">\n          <span> TypeScript <i class=\"fab fa-js\"></i> </span>\n          <span> 90% </span>\n        </div>\n        <div class=\"tsSkillBar\">\n          <div class=\"tsSkillBarLength\"></div>\n        </div>\n      </div>\n\n        <div id=\"nextjS\">\n        <div class=\"nextjsSkill\">\n          <span> Next.JS <img src=\"https://cdn.worldvectorlogo.com/logos/next-js.svg\" alt=\"Next.js Logo\" style=\"width: 20px; height: 20px;\"> </span>\n          <span> 80% </span>\n        </div>\n        <div class=\"nextjsSkillBar\">\n          <div class=\"nextjsSkillBarLength\"></div>\n        </div>\n      </div>\n\n        <div id=\"reactjs\">\n        <div class=\"reactjsSkill\">\n          <span> React.JS <i class=\"fab fa-react\"></i> </span>\n          <span> 75% </span>\n        </div>\n        <div class=\"reactjsSkillBar\">\n          <div class=\"reactjsSkillBarLength\"></div>\n        </div>\n      </div>\n\n        <div id=\"tailwind\">\n        <div class=\"tailwindSkill\">\n          <span> Tailwind <img src=\"https://cdn.worldvectorlogo.com/logos/tailwindcss.svg\" alt=\"Tailwind CSS Logo\" style=\"width: 20px; height: 20px; filter: brightness(0) saturate(100%);\">\n          </span>\n          <span> 90% </span>\n        </div>\n        <div class=\"tailwindSkillBar\">\n          <div class=\"tailwindSkillBarLength\"></div>\n        </div>\n      </div>\n     </div>  \n          ";
}
//inner HTML for Experience
if (!expContent) {
    expContent = document.createElement("div");
    expContent.id = "exp-content";
    expContent.innerHTML = "\n            <h3 class=\"newHead\">My Experience</h3>\n            <ul>\n            <li>HTML, CSS & Javascript (3Years)</li>\n            <li>Currently Enrolled in GIAIC Program and Learning New Skills.</li>\n            </ul>\n            ";
}
//functionality for toggling button
function toggleButton(content) {
    if (content) {
        content.style.display =
            (content === null || content === void 0 ? void 0 : content.style.display) === "none" ? "block" : "none";
        var infoDiv = document.getElementById("Info");
        infoDiv === null || infoDiv === void 0 ? void 0 : infoDiv.appendChild(content);
    }
}
//applying functionality
edu === null || edu === void 0 ? void 0 : edu.addEventListener("click", function () {
    toggleButton(eduContent);
});
skills === null || skills === void 0 ? void 0 : skills.addEventListener("click", function () {
    toggleButton(skillsContent);
});
exp === null || exp === void 0 ? void 0 : exp.addEventListener("click", function () {
    toggleButton(expContent);
});
