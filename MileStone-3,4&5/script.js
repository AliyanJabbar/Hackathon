var _a;
(_a = document.querySelector("#genRes")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    // checking if resume already exists
    var resume = document.getElementById("generatedResume");
    if (resume) {
        resume.innerHTML = generateResumeHTML();
        alert("Resume Updated Successfully!");
        return;
    }
    // Check if all required fields are filled
    var requiredFields = [
        "name",
        "email",
        "userImage",
        "number",
        "about",
        "Institute",
        "Degree",
        "startYear",
        "endYear",
        "company",
        "position",
        "startYearComp",
        "endYearComp",
        "Skills",
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
        document.body.appendChild(newResume);
    }
});
//making a function to generate resume
function generateResumeHTML() {
    // Collecting all form's data
    var personalInfo = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        image: document.getElementById("userImage"),
        phoneNumber: document.getElementById("number")
            .value,
        about: document.getElementById("about").value,
    };
    var education = {
        institute: document.getElementById("Institute")
            .value,
        degree: document.getElementById("Degree").value,
        startYear: document.getElementById("startYear")
            .value,
        endYear: document.getElementById("endYear").value,
    };
    var workExperience = {
        company: document.getElementById("company").value,
        position: document.getElementById("position")
            .value,
        startYear: document.getElementById("startYearComp").value,
        endYear: document.getElementById("endYearComp")
            .value,
    };
    //getting skills from user
    var skills = document.getElementById("Skills")
        .value;
    // creating image url for user provided image
    var imageURL = "";
    if (personalInfo.image.files) {
        imageURL = URL.createObjectURL(personalInfo.image.files[0]); //now we can use it in src of image attribute
    }
    // Generating resume HTML to append
    return "\n      <!-- Left Side -->\n      <div contenteditable=\"true\" class=\"leftSide\">\n        <!-- personal Information -->\n        <div class=\"personalInfo\">\n        <!-- Image in personal Info -->\n        <div class=\"image\">\n        <img src=\"".concat(imageURL, "\" alt=\"Resume Image\">\n        </div>\n          <!-- Name in personal info -->\n          <div class=\"name\">\n            <h1>").concat(personalInfo.name, "</h1>\n          </div>\n          <!-- Contact details in personal info -->\n          <div class=\"contactDetails\">\n            <p>").concat(personalInfo.phoneNumber, "</p>\n            <p>").concat(personalInfo.email, "<p>\n  \n          </div>\n        </div>\n        \n        <!-- Skills -->\n        <div class=\"skills\">\n        My Skills: ").concat(skills, "\n        </div>\n      </div>\n  \n      <!-- Right Side -->\n      <div contenteditable=\"true\" class=\"rightSide\">\n        <div class=\"about\">\n          <h2 id=\"aboutHead\">About</h2>\n          <p>\n          ").concat(personalInfo.about, "\n            </p>\n        </div>\n        <!-- Education -->\n        <div class=\"edu\">\n          <h2 id=\"edu\">Education</h2>\n    \n          <p><strong>").concat(education.degree, "</strong> from <strong>").concat(education.institute, "</strong></p>\n          <p>").concat(education.startYear, "-").concat(education.endYear, "</p>\n  \n        </div>\n        <!-- Work -->\n        <div class=\"work\">\n          <h2 id=\"work\">Work Experience</h2>\n          <p> ").concat(workExperience.company, "\n            <br>\n            ").concat(workExperience.position, "<br>\n             (").concat(workExperience.startYear, " - ").concat(workExperience.endYear, ") <br>\n            <br>\n            </p>\n        </div>\n      </div>\n        ");
}
