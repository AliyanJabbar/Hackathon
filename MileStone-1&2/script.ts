//Getting Elements by ID
//    for education
const edu = document.getElementById("edu");
let eduContent = document.getElementById("edu-content");
//    for Skills
let skills = document.getElementById("skill");
let skillsContent = document.getElementById("skills-content");
//    for Experience
let exp = document.getElementById("exp");
let expContent = document.getElementById("exp-content");

//inner HTML for edu
if (!eduContent) {
  eduContent = document.createElement("div");
  eduContent.id = "edu-content";
  eduContent.innerHTML = `
    <h3 class="newHead">My Education</h3>
    <ul>
    <li><strong>Completed</strong> SSC Part(1&2).</br> 2022-2024</li>
    <li><strong>Studying</strong> at (AGSC)Adamjee Govt Science College Karachi. </br> 2024-Onwards</li>
    </ul>
`;
}

//inner HTML for skills
if (!skillsContent) {
  skillsContent = document.createElement("div");
  skillsContent.id = "skills-content";
  skillsContent.innerHTML = `
        <h3 class="newHead">My Skills</h3>
        
    <div id= "allSkills">
        <div id="html">
        <div class="htmlSkill">
          <span> HTML <i class="fab fa-html5"></i> </span>
          <span class="text-md font-bold text-rose-900"> 90% </span>
        </div>
        <div class="htmlSkillBar">
          <div class="htmlSkillBarLength"></div>
        </div>
      </div>

        <div id="css">
        <div class="cssSkill">
          <span> CSS <i class="fab fa-css3"></i> </span>
          <span> 75% </span>
        </div>
        <div class="cssSkillBar">
          <div class="cssSkillBarLength"></div>
        </div>
      </div>

        <div id="js">
        <div class="jsSkill">
          <span> JavaScript <i class="fab fa-js"></i> </span>
          <span> 80% </span>
        </div>
        <div class="jsSkillBar">
          <div class="jsSkillBarLength"></div>
        </div>
      </div>

        <div id="ts">
        <div class="tsSkill">
          <span> TypeScript <i class="fab fa-js"></i> </span>
          <span> 90% </span>
        </div>
        <div class="tsSkillBar">
          <div class="tsSkillBarLength"></div>
        </div>
      </div>

        <div id="nextjS">
        <div class="nextjsSkill">
          <span> Next.JS <img src="https://cdn.worldvectorlogo.com/logos/next-js.svg" alt="Next.js Logo" style="width: 20px; height: 20px;"> </span>
          <span> 80% </span>
        </div>
        <div class="nextjsSkillBar">
          <div class="nextjsSkillBarLength"></div>
        </div>
      </div>

        <div id="reactjs">
        <div class="reactjsSkill">
          <span> React.JS <i class="fab fa-react"></i> </span>
          <span> 75% </span>
        </div>
        <div class="reactjsSkillBar">
          <div class="reactjsSkillBarLength"></div>
        </div>
      </div>

        <div id="tailwind">
        <div class="tailwindSkill">
          <span> Tailwind <img src="https://cdn.worldvectorlogo.com/logos/tailwindcss.svg" alt="Tailwind CSS Logo" style="width: 20px; height: 20px; filter: brightness(0) saturate(100%);">
          </span>
          <span> 90% </span>
        </div>
        <div class="tailwindSkillBar">
          <div class="tailwindSkillBarLength"></div>
        </div>
      </div>
     </div>  
          `;
}

//inner HTML for Experience
if (!expContent) {
  expContent = document.createElement("div");
  expContent.id = "exp-content";
  expContent.innerHTML = `
            <h3 class="newHead">My Experience</h3>
            <ul>
            <li>HTML, CSS & Javascript (3Years)</li>
            <li>Currently Enrolled in GIAIC Program and Learning New Skills.</li>
            </ul>
            `;
}

//functionality for toggling button
function toggleButton(content: HTMLElement | null) {
  if (content) {
    content.style.display =
      content?.style.display === "none" ? "block" : "none";
    const infoDiv = document.getElementById("Info");
    infoDiv?.appendChild(content);
  }
}

//applying functionality
edu?.addEventListener("click", () => {
  toggleButton(eduContent);
});
skills?.addEventListener("click", () => {
  toggleButton(skillsContent);
});
exp?.addEventListener("click", () => {
  toggleButton(expContent);
});
