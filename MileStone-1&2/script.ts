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
    <h3 class="newHead">My Education:</h3>
    <ul>
    <li><strong>Completed</strong> SSC Part(1&2).</br> 2022-2024</li>
    <li><strong>Studying</strong> at (AGSC)Adamjee Govt Science College Karachi. </br> 2024-Onwards</li>
    </ul>`;
}

//inner HTML for skills
if (!skillsContent) {
  skillsContent = document.createElement("div");
  skillsContent.id = "skills-content";
  skillsContent.innerHTML = `
        <h3 class="newHead">My Skills:</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>Next.JS</li>
          <li>React.JS</li>
          <li>Tailwind CSS</li>
          </ul>
          `;
}

//inner HTML for Experience
if (!expContent) {
  expContent = document.createElement("div");
  expContent.id = "exp-content";
  expContent.innerHTML = `
            <h3 class="newHead">My Experience:</h3>
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
edu?.addEventListener('click',()=>{ toggleButton(eduContent)})
skills?.addEventListener('click',()=>{ toggleButton(skillsContent)})
exp?.addEventListener('click',()=>{ toggleButton(expContent)})
