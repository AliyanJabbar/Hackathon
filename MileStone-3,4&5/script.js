var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a;
var _this = this;
//adding event listener to Generate Resume Button
(_a = document.querySelector("#genRes")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function (e) {
    e.preventDefault; //Prevent reload
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
        // appending generated resume in body of our document
        document.body.appendChild(newResume);
        // FOR SHAREABLE LINK
        //getting user's name
        var username_1 = document.getElementById("name")
            .value;
        // Getting elements in shareable Link div
        var shareableLink = document.getElementById("ResumeLink");
        var DownloadBtn = document.getElementById("DownloadBtn");
        //Download button functionality
        DownloadBtn.addEventListener("click", function () {
            window.print();
        });
        // copy shareable link functionality
        shareableLink.addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
            var link, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        link = "".concat(window.location.origin, "?").concat(encodeURIComponent(username_1), "_cv.html");
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        //using clipboard API to copy shareable link
                        return [4 /*yield*/, navigator.clipboard.writeText(link)];
                    case 2:
                        //using clipboard API to copy shareable link
                        _a.sent();
                        alert("shareable Link copied to clipboard!");
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        console.error("Failed To Copy URL: ", err_1);
                        alert("Failed To Copy Resume Link!");
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); });
    }
});
//making a function to generate resume
function generateResumeHTML() {
    // Collecting all form's data
    var personalInfo = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        image: document.getElementById("userImage"),
        phoneNumber: document.getElementById("number").value,
        about: document.getElementById("about").value,
    };
    var education = {
        institute: document.getElementById("Institute").value,
        degree: document.getElementById("Degree").value,
        startYear: document.getElementById("startYear").value,
        endYear: document.getElementById("endYear").value,
    };
    var workExperience = {
        company: document.getElementById("company").value,
        position: document.getElementById("position").value,
        startYear: document.getElementById("startYearComp")
            .value,
        endYear: document.getElementById("endYearComp").value,
    };
    //getting skills from user
    var skills = document.getElementById("Skills").value;
    // creating image url for user provided image
    var imageURL = "";
    if (personalInfo.image.files) {
        imageURL = URL.createObjectURL(personalInfo.image.files[0]); //now we can use it in src of image attribute
    }
    // Generating resume HTML to append
    return "\n      <!-- Left Side -->\n      <div class=\"leftSide\">\n        <!-- personal Information -->\n        <div class=\"personalInfo\">\n        <!-- Image in personal Info -->\n        <div class=\"image\">\n        <img src=\"".concat(imageURL, "\" alt=\"Resume Image\">\n        </div>\n          <!-- Name in personal info -->\n          <div contenteditable=\"true\" class=\"name\">\n            <h1>").concat(personalInfo.name, "</h1>\n          </div>\n          <!-- Contact details in personal info -->\n          <div contenteditable=\"true\"  class=\"contactDetails\">\n            <p>").concat(personalInfo.phoneNumber, "</p>\n            <p>").concat(personalInfo.email, "<p>\n  \n          </div>\n        </div>\n        \n        <!-- Skills -->\n        <div contenteditable=\"true\" class=\"skills\">\n        My Skills: ").concat(skills, "\n        </div>\n      </div>\n  \n      <!-- Right Side -->\n      <div id= \"rightSide\" class=\"rightSide\">\n        <div contenteditable=\"true\"  class=\"about\">\n          <h2 id=\"aboutHead\">About</h2>\n          <p>\n          ").concat(personalInfo.about, "\n            </p>\n        </div>\n        <!-- Education -->\n        <div contenteditable=\"true\" class=\"edu\">\n          <h2 id=\"edu\">Education</h2>\n    \n          <p><strong>").concat(education.degree, "</strong> from <strong>").concat(education.institute, "</strong></p>\n          <p>").concat(education.startYear, "-").concat(education.endYear, "</p>\n  \n        </div>\n        <!-- Work -->\n        <div contenteditable=\"true\" class=\"work\">\n          <h2 id=\"work\">Work Experience</h2>\n          <p> ").concat(workExperience.company, "\n            <br>\n            ").concat(workExperience.position, "<br>\n             (").concat(workExperience.startYear, " - ").concat(workExperience.endYear, ") <br>\n            <br>\n            </p>\n        </div>\n        <!-- shareable link and download option section -->\n    <div id=\"shareableLink\">\n    <button id=\"ResumeLink\">Copy Resume Link</button>\n      <br />\n      <button id=\"DownloadBtn\">Download As PDF</button>\n    </div>\n\n      </div>\n            ");
}
