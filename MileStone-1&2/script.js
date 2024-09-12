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
    eduContent.innerHTML = "\n    <h3 class=\"newHead\">My Education:</h3>\n    <ul>\n    <li><strong>Completed</strong> SSC Part(1&2).</br> 2022-2024</li>\n    <li><strong>Studying</strong> at (AGSC)Adamjee Govt Science College Karachi. </br> 2024-Onwards</li>\n    </ul>";
}
//inner HTML for skills
if (!skillsContent) {
    skillsContent = document.createElement("div");
    skillsContent.id = "skills-content";
    skillsContent.innerHTML = "\n        <h3 class=\"newHead\">My Skills:</h3>\n        <ul>\n          <li>HTML</li>\n          <li>CSS</li>\n          <li>JavaScript</li>\n          <li>TypeScript</li>\n          <li>Next.JS</li>\n          <li>React.JS</li>\n          <li>Tailwind CSS</li>\n          </ul>\n          ";
}
//inner HTML for Experience
if (!expContent) {
    expContent = document.createElement("div");
    expContent.id = "exp-content";
    expContent.innerHTML = "\n            <h3 class=\"newHead\">My Experience:</h3>\n            <ul>\n            <li>HTML, CSS & Javascript (3Years)</li>\n            <li>Currently Enrolled in GIAIC Program and Learning New Skills.</li>\n            </ul>\n            ";
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
edu === null || edu === void 0 ? void 0 : edu.addEventListener('click', function () { toggleButton(eduContent); });
skills === null || skills === void 0 ? void 0 : skills.addEventListener('click', function () { toggleButton(skillsContent); });
exp === null || exp === void 0 ? void 0 : exp.addEventListener('click', function () { toggleButton(expContent); });
