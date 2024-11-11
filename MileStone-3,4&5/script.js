"use strict";
var _a, _b, _c, _d, _e;
window.addEventListener('load', () => {
    const hash = window.location.hash;
    if (hash.startsWith('#resume=')) {
        const encodedContent = hash.replace('#resume=', '');
        const decodedContent = atob(encodedContent);
        // Clearing the entire body content
        document.body.innerHTML = '';
        // Creating a clean container for the resume
        const resumeContainer = document.createElement('div');
        resumeContainer.id = 'resumeContainer';
        resumeContainer.innerHTML = decodedContent;
        // Adding necessary styles
        const styleLink = document.createElement('link');
        styleLink.rel = 'stylesheet';
        styleLink.href = 'styleForGeneratedResume.css';
        document.head.appendChild(styleLink);
        // Adding material icons
        const iconLink = document.createElement('link');
        iconLink.rel = 'stylesheet';
        iconLink.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
        document.head.appendChild(iconLink);
        // Adding the resume to the body
        document.body.appendChild(resumeContainer);
    }
});
document.addEventListener('click', (e) => {
    var _a, _b, _c, _d, _e;
    const target = e.target;
    // Handling Copy Resume Link
    if (target.id === 'ResumeLink') {
        const username = document.getElementById("fname").value;
        // Cloning the resume content
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = ((_a = document.getElementById('generatedResume')) === null || _a === void 0 ? void 0 : _a.innerHTML) || '';
        // Converting image to base64
        const imageElement = tempDiv.querySelector('.profile-img img');
        const canvas = document.createElement('canvas');
        canvas.width = 180;
        canvas.height = 180;
        const ctx = canvas.getContext('2d');
        ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(imageElement, 0, 0, 180, 180);
        const base64Image = canvas.toDataURL('image/png');
        // Replaceing image src with base64 data
        imageElement.src = base64Image;
        // Removing the resume-actions div containing buttons
        const actionsDiv = tempDiv.querySelector('.resume-actions');
        actionsDiv === null || actionsDiv === void 0 ? void 0 : actionsDiv.remove();
        // Removing contenteditable attributes
        const editableElements = tempDiv.querySelectorAll('[contenteditable]');
        editableElements.forEach(el => el.removeAttribute('contenteditable'));
        // Converting the resume content to base64
        const resumeContent = btoa(tempDiv.innerHTML);
        // Creating a shareable URL with the base64 content as a hash parameter
        const shareableLink = `${window.location.origin}${window.location.pathname}#resume=${resumeContent}`;
        navigator.clipboard.writeText(shareableLink)
            .then(() => alert("Shareable Resume Link copied to clipboard!"))
            .catch((err) => {
            console.error("Failed To Copy URL: ", err);
            alert("Failed To Copy Resume Link!");
        });
    }
    // Download button functionality
    if (target.id === 'DownloadBtn') {
        // Getting all CSS content
        const mainStyles = ((_b = document.querySelector('link[href*="style.css"]')) === null || _b === void 0 ? void 0 : _b.getAttribute('href')) || '';
        const formStyles = ((_c = document.querySelector('link[href*="formStyle.css"]')) === null || _c === void 0 ? void 0 : _c.getAttribute('href')) || '';
        const resumeStyles = ((_d = document.querySelector('link[href*="styleForGeneratedResume.css"]')) === null || _d === void 0 ? void 0 : _d.getAttribute('href')) || '';
        // Getting the image and convert to base64 with fixed dimensions
        const imageElement = document.querySelector('#generatedResume .profile-img img');
        const canvas = document.createElement('canvas');
        // Setting fixed dimensions for the image
        canvas.width = 180; // Match the CSS width
        canvas.height = 180; // Match the CSS height
        const ctx = canvas.getContext('2d');
        ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(imageElement, 0, 0, 180, 180); // Specify dimensions in drawImage
        const base64Image = canvas.toDataURL('image/png');
        // Cloneing and modifying the resume content
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = ((_e = document.getElementById('generatedResume')) === null || _e === void 0 ? void 0 : _e.innerHTML) || '';
        // Removing the resume-actions div containing buttons
        const actionsDiv = tempDiv.querySelector('.resume-actions');
        actionsDiv === null || actionsDiv === void 0 ? void 0 : actionsDiv.remove();
        // Removing contenteditable attributes
        const editableElements = tempDiv.querySelectorAll('[contenteditable]');
        editableElements.forEach(el => el.removeAttribute('contenteditable'));
        // Replaceing image src with base64 data
        const resumeContent = tempDiv.innerHTML.replace(imageElement.src, base64Image);
        // Fetching and combine all CSS files
        Promise.all([
            fetch(mainStyles).then(response => response.text()),
            fetch(formStyles).then(response => response.text()),
            fetch(resumeStyles).then(response => response.text())
        ]).then(styles => {
            const combinedStyles = styles.join('\n');
            const fullHTML = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>My Resume</title>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
            <style>
              :root {
                --form-color: #ff9900;
                --first-main-color: orange;
                --second-main-color: rgb(42, 42, 42);
              }
              ${combinedStyles}
            </style>
        </head>
        <body>
            <div id="generatedResume">
                ${resumeContent}
            </div>
        </body>
        </html>
      `;
            const blob = new Blob([fullHTML], { type: 'text/html' });
            const url = window.URL.createObjectURL(blob);
            const downloadLink = document.createElement('a');
            downloadLink.href = url;
            downloadLink.download = 'my-resume.html';
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
            window.URL.revokeObjectURL(url);
        });
    }
});
// Adding Education Entry
(_a = document.getElementById("add-education")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
    const container = document.getElementById("education-container");
    const newEducation = document.createElement("div");
    newEducation.className = "education-entry";
    newEducation.innerHTML = `
  <label for="Title-edu">Title:</label><br />
  <input type="text" class="Title-edu" placeholder="Your Institute and Degree Here..." required />
  <hr />
  <label for="Description-edu">Description:</label><br />
      <input type="text" class="Description-edu" placeholder="Shortly Describe What you've learned" required />
      <br />
      <hr />
      <label for="date-edu">Date:</label><br />
      <input type="text" class="date-edu" placeholder="1999-2014" required />
      <button type="button" class="remove-btn" onclick="this.parentElement.remove()">Remove</button>
  `;
    container === null || container === void 0 ? void 0 : container.appendChild(newEducation);
});
// Adding Experience Entry
(_b = document.getElementById("add-experience")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
    const container = document.getElementById("experience-container");
    const newExperience = document.createElement("div");
    newExperience.className = "experience-entry";
    newExperience.innerHTML = `
      <label for="Title-exp">Job Title:</label><br />
      <input type="text" class="Title-exp" placeholder="Code Alpha" required />
      <hr />
      <label for="Description-exp">Description:</label><br />
      <input type="text" class="Description-exp" placeholder="Shortly Describe Your Role there" required />
      <hr />
      <label for="Date-exp">Date:</label><br />
      <input type="text" class="Date-exp" placeholder="1999-2014" required />
      <button type="button" class="remove-btn" onclick="this.parentElement.remove()">Remove</button>
  `;
    container === null || container === void 0 ? void 0 : container.appendChild(newExperience);
});
// Adding Service Entry
(_c = document.getElementById("add-service")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => {
    const container = document.getElementById("services-container");
    const newService = document.createElement("div");
    newService.className = "service-entry";
    newService.innerHTML = `
      <input type="text" class="services" placeholder="Your Service" required />
      <button type="button" class="remove-btn" onclick="this.parentElement.remove()">Remove</button>
  `;
    container === null || container === void 0 ? void 0 : container.appendChild(newService);
});
// Adding Skill Entry
(_d = document.getElementById("add-skill")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", () => {
    const container = document.getElementById("skills-container");
    const newSkill = document.createElement("div");
    newSkill.className = "skill-entry";
    newSkill.innerHTML = `
      <input type="text" class="skills" placeholder="Your Skill" required />
      <button type="button" class="remove-btn" onclick="this.parentElement.remove()">Remove</button>
  `;
    container === null || container === void 0 ? void 0 : container.appendChild(newSkill);
});
//adding event listener to Generate Resume with Button
(_e = document.querySelector("#genRes")) === null || _e === void 0 ? void 0 : _e.addEventListener("click", (e) => {
    var _a;
    e.preventDefault();
    // checking if resume already exists
    let resume = document.getElementById("generatedResume");
    if (resume) {
        resume.innerHTML = generateResumeHTML();
        alert("Resume Updated Successfully!");
        return;
    }
    // Checking if all required fields are filled
    const requiredFields = [
        "fname",
        "lname",
        "prof",
        "email",
        "number",
        "userImage",
        "about",
        "Title-edu",
        "Description-edu",
        "date-edu",
        "Title-exp",
        "Description-exp",
        "Date-exp",
        "service",
        "Skill",
    ];
    const emptyFields = requiredFields.filter((field) => document.getElementById(field).value.trim() === "");
    if (emptyFields.length > 0) {
        alert("Please fill all required fields before generating the resume.");
        return;
    }
    else {
        alert("Resume Has Been Generated Successfully! Scroll Down To View");
        //creating new div for generated-resume
        const newResume = document.createElement("div");
        newResume.innerHTML = generateResumeHTML();
        newResume.id = "generatedResume";
        // appending generated resume to the resume container
        (_a = document.getElementById("resumeContainer")) === null || _a === void 0 ? void 0 : _a.appendChild(newResume);
    }
    //making a function to generate resume
    function generateResumeHTML() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        // Collecting all form's data
        // Collect Personal Information
        const personalInfo = {
            firstName: document.getElementById("fname").value,
            lastName: document.getElementById("lname").value,
            profession: document.getElementById("prof").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("number").value,
            image: document.getElementById("userImage"),
            about: document.getElementById("about").value,
        };
        //collecting Education section
        const educationEntries = {
            title: ((_a = document.getElementById("Title-edu")) === null || _a === void 0 ? void 0 : _a.value) || "",
            description: ((_b = document.getElementById("Description-edu")) === null || _b === void 0 ? void 0 : _b.value) || "",
            date: ((_c = document.getElementById("date-edu")) === null || _c === void 0 ? void 0 : _c.value) || "",
        };
        // Add any additional entries if they exist
        const additionalEntries = Array.from(document.getElementsByClassName("education-entry"))
            .slice(1)
            .map((entry) => {
            var _a, _b, _c;
            return ({
                title: ((_a = entry.querySelector(".Title-edu")) === null || _a === void 0 ? void 0 : _a.value) || "",
                description: ((_b = entry.querySelector(".Description-edu")) === null || _b === void 0 ? void 0 : _b.value) || "",
                date: ((_c = entry.querySelector(".date-edu")) === null || _c === void 0 ? void 0 : _c.value) || "",
            });
        });
        // Combining all entries
        const allEducationEntries = [educationEntries, ...additionalEntries];
        //for adding education entries
        const educationHTML = allEducationEntries
            .map((edu) => `
      <div class="box-2">
        <p class="p3">${edu.date} <span>${edu.title}</span></p>
        <p class="p2">${edu.description}</p>
      </div>
    `)
            .join("");
        // Collecting Experience entries
        const experienceEntries = {
            title: ((_d = document.getElementById("Title-exp")) === null || _d === void 0 ? void 0 : _d.value) || "",
            description: ((_e = document.getElementById("Description-exp")) === null || _e === void 0 ? void 0 : _e.value) || "",
            date: ((_f = document.getElementById("Date-exp")) === null || _f === void 0 ? void 0 : _f.value) || "",
        };
        // for adding entries if more than one
        const additionalExpEntries = Array.from(document.getElementsByClassName("experience-entry"))
            .slice(1)
            .map((entry) => {
            var _a, _b, _c;
            return ({
                title: ((_a = entry.querySelector(".Title-exp")) === null || _a === void 0 ? void 0 : _a.value) || "",
                description: ((_b = entry.querySelector(".Description-exp")) === null || _b === void 0 ? void 0 : _b.value) || "",
                date: ((_c = entry.querySelector(".Date-exp")) === null || _c === void 0 ? void 0 : _c.value) || "",
            });
        });
        // Combineing all entries
        const allExperienceEntries = [experienceEntries, ...additionalExpEntries];
        // for the html of the experience entries
        const experienceHTML = allExperienceEntries
            .map((exp) => `
      <div class="box-2">
        <p class="p3">${exp.date} <span>${exp.title}</span></p>
        <p class="p2">${exp.description}</p>
      </div>
    `)
            .join("");
        // collecting service
        const services = {
            service: ((_g = document.getElementById("service")) === null || _g === void 0 ? void 0 : _g.value) || "",
        };
        // for adding additional service entries if exist
        const additionalServices = Array.from(document.getElementsByClassName("service-entry"))
            .slice(1)
            .map((entry) => {
            var _a;
            return ({
                service: ((_a = entry.querySelector(".services")) === null || _a === void 0 ? void 0 : _a.value) || "",
            });
        });
        // Combine all services
        const allServices = [services, ...additionalServices];
        // adding services
        const serviceHtml = allServices
            .map((item) => `
      <div class="service">
        <p class="p1">${item.service}</p>
      </div> `)
            .join("");
        // Collect skills similar to services
        const skills = [
            {
                skill: ((_h = document.getElementById("Skill")) === null || _h === void 0 ? void 0 : _h.value) || "",
            },
        ];
        // Add additional skill entries
        const additionalSkills = Array.from(document.getElementsByClassName("skill-entry"))
            .slice(1)
            .map((entry) => {
            var _a;
            return ({
                skill: ((_a = entry.querySelector(".skills")) === null || _a === void 0 ? void 0 : _a.value) || "",
            });
        });
        // Combine all skills
        const allSkills = [...skills, ...additionalSkills];
        // Generate skills HTML
        const skillsHTML = allSkills
            .map((item) => `
  <div class="p1">
    ${item.skill}
    <div class="skills-container">
      <div class="skill skill-${allSkills.indexOf(item)}"></div>
    </div>
  </div>`)
            .join("");
        // creating image url for user provided image
        let imageURL = "";
        if (personalInfo.image.files) {
            imageURL = URL.createObjectURL(personalInfo.image.files[0]); //now we can use it in src of image attribute
        }
        // Generating resume HTML to append
        return `
    <div class="main">
      <div class="left">
        <br />
        <div class="profile-img">
          <img src="${imageURL}" alt="profile-img" />
        </div>
        <!-- contact -->
        <div class="box-1 contenteditable="true"">
        <div class="heading" contenteditable="true">
            <p>CONTACT</p>
          </div>
          <p class="p1" contenteditable="true">
            <i class="material-icons icons1">call</i>${personalInfo.phone}
          </p>
          <p class="p1" contenteditable="true">
            <i class="material-icons icons1">email</i>${personalInfo.email}
          </p>
          </div>
          <br />
          <!-- services -->
          <div class="box-1" contenteditable="true">
          <div class="heading" contenteditable="true">
            <p>SERVICES</p>
          </div>
          ${serviceHtml}
        </div>
        <br />
        <!-- skills -->
        <div class="box-1" contenteditable="true">
          <div class="heading" contenteditable="true">
            <p>SKILLS</p>
            </div>
            ${skillsHTML}
        </div>
      </div>

      <div class="right">
        <!-- name & prefession -->
        <div class="name-div" contenteditable="true">
          <h1 contenteditable="true">${personalInfo.firstName} <span contenteditable="true">${personalInfo.lastName}</span></h1>
          <p contenteditable="true">${personalInfo.profession}</p>
        </div>
        <!-- about me -->
        <div class="box-2" contenteditable="true">
        <h2>ABOUT <span>ME</span> <i class="material-icons icons-3">perm_identity</i></h2>
        <p class="p2">
        ${personalInfo.about}
          </p>
        </div>
        <!-- education -->
        <div class="box-2" contenteditable="true">
          <h2>
            MY <span>EDUCATION</span><i class="material-icons icons-3">border_color</i>
          </h2>
          ${educationHTML}
        </div>
        <!-- experience -->
        <div class="box-2" contenteditable="true">
          <h2>MY <span>EXPERIENCE</span><i class="material-icons icons-3">folder</i></h2>
          ${experienceHTML}
        </div>
        <div class="resume-actions">
      <button id="ResumeLink" class="resume-btn">Copy Resume Link</button>
      <button id="DownloadBtn" class="resume-btn">Download Resume</button>
    </div>
      </div>
    </div>
    `;
    }
});
