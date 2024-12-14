var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _a, _b, _c, _d, _e;
window.addEventListener("load", function () {
    var hash = window.location.hash;
    if (hash.startsWith("#resume=")) {
        var encodedContent = hash.replace("#resume=", "");
        var decodedContent = atob(encodedContent);
        // Clearing the entire body content
        document.body.innerHTML = "";
        // Creating a clean container for the resume
        var resumeContainer = document.createElement("div");
        resumeContainer.id = "resumeContainer";
        resumeContainer.innerHTML = decodedContent;
        // Adding necessary styles
        var styleLink = document.createElement("link");
        styleLink.rel = "stylesheet";
        styleLink.href = "styleForGeneratedResume.css";
        document.head.appendChild(styleLink);
        // Adding material icons
        var iconLink = document.createElement("link");
        iconLink.rel = "stylesheet";
        iconLink.href = "https://fonts.googleapis.com/icon?family=Material+Icons";
        document.head.appendChild(iconLink);
        // Adding the resume to the body
        document.body.appendChild(resumeContainer);
    }
});
document.addEventListener("click", function (e) {
    var _a, _b, _c, _d, _e;
    var target = e.target;
    // Handling Copy Resume Link
    if (target.id === "ResumeLink") {
        // Cloning the resume content
        var tempDiv = document.createElement("div");
        tempDiv.innerHTML =
            ((_a = document.getElementById("generatedResume")) === null || _a === void 0 ? void 0 : _a.innerHTML) || "";
        // Converting image to base64
        var imageElement = tempDiv.querySelector(".profile-img img");
        var canvas = document.createElement("canvas");
        canvas.width = 180;
        canvas.height = 180;
        var ctx = canvas.getContext("2d");
        ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(imageElement, 0, 0, 180, 180);
        var base64Image = canvas.toDataURL("image/png");
        // Replaceing image src with base64 data
        imageElement.src = base64Image;
        // Removing the resume-actions div containing buttons
        var actionsDiv = tempDiv.querySelector(".resume-actions");
        actionsDiv === null || actionsDiv === void 0 ? void 0 : actionsDiv.remove();
        // Removing contenteditable attributes
        var editableElements = tempDiv.querySelectorAll("[contenteditable]");
        editableElements.forEach(function (el) { return el.removeAttribute("contenteditable"); });
        // Converting the resume content to base64
        var resumeContent = btoa(tempDiv.innerHTML);
        // Creating a shareable URL with the base64 content as a hash parameter
        var shareableLink = "".concat(window.location.origin).concat(window.location.pathname, "#resume=").concat(resumeContent);
        target.innerText = "Processing...";
        target.disabled = true;
        navigator.clipboard
            .writeText(shareableLink)
            .then(function () { return alert("Shareable Resume Link copied to clipboard!"); })
            .catch(function (err) {
            console.error("Failed To Copy URL: ", err);
            alert("Failed To Copy Resume Link!");
        })
            .finally(function () {
            target.innerText = "Copy Resume Link";
            target.disabled = false;
        });
    }
    // Download button functionality
    if (target.id === "DownloadBtn") {
        // Getting all CSS content
        var mainStyles = ((_b = document.querySelector('link[href*="style.css"]')) === null || _b === void 0 ? void 0 : _b.getAttribute("href")) ||
            "";
        var formStyles = ((_c = document
            .querySelector('link[href*="formStyle.css"]')) === null || _c === void 0 ? void 0 : _c.getAttribute("href")) || "";
        var resumeStyles = ((_d = document
            .querySelector('link[href*="styleForGeneratedResume.css"]')) === null || _d === void 0 ? void 0 : _d.getAttribute("href")) || "";
        // Getting the image and convert to base64 with fixed dimensions
        var imageElement = document.querySelector("#generatedResume .profile-img img");
        var canvas = document.createElement("canvas");
        // Setting fixed dimensions for the image
        canvas.width = 180; // Match the CSS width
        canvas.height = 180; // Match the CSS height
        var ctx = canvas.getContext("2d");
        ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(imageElement, 0, 0, 180, 180); // Specify dimensions in drawImage
        var base64Image = canvas.toDataURL("image/png");
        // Cloneing and modifying the resume content
        var tempDiv = document.createElement("div");
        tempDiv.innerHTML =
            ((_e = document.getElementById("generatedResume")) === null || _e === void 0 ? void 0 : _e.innerHTML) || "";
        // Removing the resume-actions div containing buttons
        var actionsDiv = tempDiv.querySelector(".resume-actions");
        actionsDiv === null || actionsDiv === void 0 ? void 0 : actionsDiv.remove();
        // Removing contenteditable attributes
        var editableElements = tempDiv.querySelectorAll("[contenteditable]");
        editableElements.forEach(function (el) { return el.removeAttribute("contenteditable"); });
        // Replaceing image src with base64 data
        var resumeContent_1 = tempDiv.innerHTML.replace(imageElement.src, base64Image);
        // Fetching and combine all CSS files
        Promise.all([
            fetch(mainStyles).then(function (response) { return response.text(); }),
            fetch(formStyles).then(function (response) { return response.text(); }),
            fetch(resumeStyles).then(function (response) { return response.text(); }),
        ]).then(function (styles) {
            var combinedStyles = styles.join("\n");
            var fullHTML = "\n        <!DOCTYPE html>\n        <html>\n        <head>\n            <meta charset=\"UTF-8\">\n            <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n            <title>My Resume</title>\n            <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n            <style>\n              :root {\n                --form-color: #ff9900;\n                --first-main-color: orange;\n                --second-main-color: rgb(42, 42, 42);\n              }\n              ".concat(combinedStyles, "\n            </style>\n        </head>\n        <body>\n            <div id=\"generatedResume\">\n                ").concat(resumeContent_1, "\n            </div>\n        </body>\n        </html>\n      ");
            var blob = new Blob([fullHTML], { type: "text/html" });
            var url = window.URL.createObjectURL(blob);
            var downloadLink = document.createElement("a");
            downloadLink.href = url;
            downloadLink.download = "my-resume.html";
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
            window.URL.revokeObjectURL(url);
        });
    }
});
// Adding Education Entry
(_a = document.getElementById("add-education")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var container = document.getElementById("education-container");
    var newEducation = document.createElement("div");
    newEducation.className = "education-entry";
    newEducation.innerHTML = "\n  <label for=\"Title-edu\">Title:</label><br />\n  <input type=\"text\" class=\"Title-edu\" placeholder=\"Your Institute and Degree Here...\" required />\n  <hr />\n  <label for=\"Description-edu\">Description:</label><br />\n      <input type=\"text\" class=\"Description-edu\" placeholder=\"Shortly Describe What you've learned\" required />\n      <br />\n      <hr />\n      <label for=\"date-edu\">Date:</label><br />\n      <input type=\"text\" class=\"date-edu\" placeholder=\"1999-2014\" required />\n      <button type=\"button\" class=\"remove-btn\" onclick=\"this.parentElement.remove()\">Remove</button>\n  ";
    container === null || container === void 0 ? void 0 : container.appendChild(newEducation);
});
// Adding Experience Entry
(_b = document.getElementById("add-experience")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
    var container = document.getElementById("experience-container");
    var newExperience = document.createElement("div");
    newExperience.className = "experience-entry";
    newExperience.innerHTML = "\n      <label for=\"Title-exp\">Job Title:</label><br />\n      <input type=\"text\" class=\"Title-exp\" placeholder=\"Code Alpha\" required />\n      <hr />\n      <label for=\"Description-exp\">Description:</label><br />\n      <input type=\"text\" class=\"Description-exp\" placeholder=\"Shortly Describe Your Role there\" required />\n      <hr />\n      <label for=\"Date-exp\">Date:</label><br />\n      <input type=\"text\" class=\"Date-exp\" placeholder=\"1999-2014\" required />\n      <button type=\"button\" class=\"remove-btn\" onclick=\"this.parentElement.remove()\">Remove</button>\n  ";
    container === null || container === void 0 ? void 0 : container.appendChild(newExperience);
});
// Adding Service Entry
(_c = document.getElementById("add-service")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () {
    var container = document.getElementById("services-container");
    var newService = document.createElement("div");
    newService.className = "service-entry";
    newService.innerHTML = "\n      <input type=\"text\" class=\"services\" placeholder=\"Your Service\" required />\n      <button type=\"button\" class=\"remove-btn\" onclick=\"this.parentElement.remove()\">Remove</button>\n  ";
    container === null || container === void 0 ? void 0 : container.appendChild(newService);
});
// Adding Skill Entry
(_d = document.getElementById("add-skill")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", function () {
    var container = document.getElementById("skills-container");
    var newSkill = document.createElement("div");
    newSkill.className = "skill-entry";
    newSkill.innerHTML = "\n      <input type=\"text\" class=\"skills\" placeholder=\"Your Skill\" required />\n      <button type=\"button\" class=\"remove-btn\" onclick=\"this.parentElement.remove()\">Remove</button>\n  ";
    container === null || container === void 0 ? void 0 : container.appendChild(newSkill);
});
//adding event listener to Generate Resume with Button
(_e = document.querySelector("#genRes")) === null || _e === void 0 ? void 0 : _e.addEventListener("click", function (e) {
    var _a;
    e.preventDefault();
    // checking if resume already exists
    var resume = document.getElementById("generatedResume");
    if (resume) {
        resume.innerHTML = generateResumeHTML();
        alert("Resume Updated Successfully!");
        return;
    }
    // Checking if all required fields are filled
    var requiredFields = [
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
    var emptyFields = requiredFields.filter(function (field) {
        return document.getElementById(field).value.trim() === "";
    });
    if (emptyFields.length > 0) {
        alert("Please fill all required fields before generating the resume.");
        return;
    }
    else {
        alert("Resume Has Been Generated Successfully! Scroll Down To View");
        //creating new div for generated-resume
        var newResume = document.createElement("div");
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
        var personalInfo = {
            firstName: document.getElementById("fname").value,
            lastName: document.getElementById("lname").value,
            profession: document.getElementById("prof").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("number").value,
            image: document.getElementById("userImage"),
            about: document.getElementById("about").value,
        };
        //collecting Education section
        var educationEntries = {
            title: ((_a = document.getElementById("Title-edu")) === null || _a === void 0 ? void 0 : _a.value) || "",
            description: ((_b = document.getElementById("Description-edu")) === null || _b === void 0 ? void 0 : _b.value) || "",
            date: ((_c = document.getElementById("date-edu")) === null || _c === void 0 ? void 0 : _c.value) || "",
        };
        // Add any additional entries if they exist
        var additionalEntries = Array.from(document.getElementsByClassName("education-entry"))
            .slice(1)
            .map(function (entry) {
            var _a, _b, _c;
            return ({
                title: ((_a = entry.querySelector(".Title-edu")) === null || _a === void 0 ? void 0 : _a.value) || "",
                description: ((_b = entry.querySelector(".Description-edu")) === null || _b === void 0 ? void 0 : _b.value) || "",
                date: ((_c = entry.querySelector(".date-edu")) === null || _c === void 0 ? void 0 : _c.value) || "",
            });
        });
        // Combining all entries
        var allEducationEntries = __spreadArray([educationEntries], additionalEntries, true);
        //for adding education entries
        var educationHTML = allEducationEntries
            .map(function (edu) { return "\n      <div class=\"box-2\">\n        <p class=\"p3\">".concat(edu.date, " <span>").concat(edu.title, "</span></p>\n        <p class=\"p2\">").concat(edu.description, "</p>\n      </div>\n    "); })
            .join("");
        // Collecting Experience entries
        var experienceEntries = {
            title: ((_d = document.getElementById("Title-exp")) === null || _d === void 0 ? void 0 : _d.value) || "",
            description: ((_e = document.getElementById("Description-exp")) === null || _e === void 0 ? void 0 : _e.value) || "",
            date: ((_f = document.getElementById("Date-exp")) === null || _f === void 0 ? void 0 : _f.value) || "",
        };
        // for adding entries if more than one
        var additionalExpEntries = Array.from(document.getElementsByClassName("experience-entry"))
            .slice(1)
            .map(function (entry) {
            var _a, _b, _c;
            return ({
                title: ((_a = entry.querySelector(".Title-exp")) === null || _a === void 0 ? void 0 : _a.value) || "",
                description: ((_b = entry.querySelector(".Description-exp")) === null || _b === void 0 ? void 0 : _b.value) || "",
                date: ((_c = entry.querySelector(".Date-exp")) === null || _c === void 0 ? void 0 : _c.value) || "",
            });
        });
        // Combineing all entries
        var allExperienceEntries = __spreadArray([experienceEntries], additionalExpEntries, true);
        // for the html of the experience entries
        var experienceHTML = allExperienceEntries
            .map(function (exp) { return "\n      <div class=\"box-2\">\n        <p class=\"p3\">".concat(exp.date, " <span>").concat(exp.title, "</span></p>\n        <p class=\"p2\">").concat(exp.description, "</p>\n      </div>\n    "); })
            .join("");
        // collecting service
        var services = {
            service: ((_g = document.getElementById("service")) === null || _g === void 0 ? void 0 : _g.value) || "",
        };
        // for adding additional service entries if exist
        var additionalServices = Array.from(document.getElementsByClassName("service-entry"))
            .slice(1)
            .map(function (entry) {
            var _a;
            return ({
                service: ((_a = entry.querySelector(".services")) === null || _a === void 0 ? void 0 : _a.value) || "",
            });
        });
        // Combine all services
        var allServices = __spreadArray([services], additionalServices, true);
        // adding services
        var serviceHtml = allServices
            .map(function (item) { return "\n      <div class=\"service\">\n        <p class=\"p1\">".concat(item.service, "</p>\n      </div> "); })
            .join("");
        // Collect skills similar to services
        var skills = [
            {
                skill: ((_h = document.getElementById("Skill")) === null || _h === void 0 ? void 0 : _h.value) || "",
            },
        ];
        // Add additional skill entries
        var additionalSkills = Array.from(document.getElementsByClassName("skill-entry"))
            .slice(1)
            .map(function (entry) {
            var _a;
            return ({
                skill: ((_a = entry.querySelector(".skills")) === null || _a === void 0 ? void 0 : _a.value) || "",
            });
        });
        // Combine all skills
        var allSkills = __spreadArray(__spreadArray([], skills, true), additionalSkills, true);
        // Generate skills HTML
        var skillsHTML = allSkills
            .map(function (item) { return "\n  <div class=\"p1\">\n    ".concat(item.skill, "\n    <div class=\"skills-container\">\n      <div class=\"skill skill-").concat(allSkills.indexOf(item), "\"></div>\n    </div>\n  </div>"); })
            .join("");
        // creating image url for user provided image
        var imageURL = "";
        if (personalInfo.image.files) {
            imageURL = URL.createObjectURL(personalInfo.image.files[0]); //now we can use it in src of image attribute
        }
        // Generating resume HTML to append
        return "\n    <div class=\"main\">\n      <div class=\"left\">\n        <br />\n        <div class=\"profile-img\">\n          <img src=\"".concat(imageURL, "\" alt=\"profile-img\" />\n        </div>\n        <!-- contact -->\n        <div class=\"box-1 contenteditable=\"true\"\">\n        <div class=\"heading\" contenteditable=\"true\">\n            <p>CONTACT</p>\n          </div>\n          <p class=\"p1\" contenteditable=\"true\">\n            <i class=\"material-icons icons1\">call</i>").concat(personalInfo.phone, "\n          </p>\n          <p class=\"p1\" id=\"emailRes\" contenteditable=\"true\">\n            <i class=\"material-icons icons1\">email</i>").concat(personalInfo.email, "\n          </p>\n          </div>\n          <br />\n          <!-- services -->\n          <div class=\"box-1\" contenteditable=\"true\">\n          <div class=\"heading\" contenteditable=\"true\">\n            <p>SERVICES</p>\n          </div>\n          ").concat(serviceHtml, "\n        </div>\n        <br />\n        <!-- skills -->\n        <div class=\"box-1\" contenteditable=\"true\">\n          <div class=\"heading\" contenteditable=\"true\">\n            <p>SKILLS</p>\n            </div>\n            ").concat(skillsHTML, "\n        </div>\n      </div>\n\n      <div class=\"right\">\n        <!-- name & prefession -->\n        <div class=\"name-div\" contenteditable=\"true\">\n          <h1 contenteditable=\"true\">").concat(personalInfo.firstName, " <span contenteditable=\"true\">").concat(personalInfo.lastName, "</span></h1>\n          <p contenteditable=\"true\">").concat(personalInfo.profession, "</p>\n        </div>\n        <!-- about me -->\n        <div class=\"box-2\" contenteditable=\"true\">\n        <h2>ABOUT <span>ME</span> <i class=\"material-icons icons-3\">perm_identity</i></h2>\n        <p class=\"p2\">\n        ").concat(personalInfo.about, "\n          </p>\n        </div>\n        <!-- education -->\n        <div class=\"box-2\" contenteditable=\"true\">\n          <h2>\n            MY <span>EDUCATION</span><i class=\"material-icons icons-3\">border_color</i>\n          </h2>\n          ").concat(educationHTML, "\n        </div>\n        <!-- experience -->\n        <div class=\"box-2\" contenteditable=\"true\">\n          <h2>MY <span>EXPERIENCE</span><i class=\"material-icons icons-3\">folder</i></h2>\n          ").concat(experienceHTML, "\n        </div>\n        <div class=\"resume-actions\">\n      <button id=\"ResumeLink\" class=\"resume-btn\">Copy Resume Link</button>\n      <button id=\"DownloadBtn\" class=\"resume-btn\">Download Resume</button>\n    </div>\n      </div>\n    </div>\n    ");
    }
});
