//adding event listener to Generate Resume Button
document.querySelector("#genRes")?.addEventListener("click", (e: Event) => {
  e.preventDefault; //Prevent reload

  // checking if resume already exists
  let resume = document.getElementById("generatedResume");
  if (resume) {
    resume.innerHTML = generateResumeHTML();
    alert("Resume Updated Successfully!");
    return;
  }

  // Check if all required fields are filled
  const requiredFields = [
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
  const emptyFields = requiredFields.filter(
    (field) =>
      (document.getElementById(field) as HTMLInputElement).value.trim() === ""
  );

  if (emptyFields.length > 0) {
    alert("Please fill all required fields before generating the resume.");
    return;
  } else {
    alert("Resume Has Been Generated Successfully! Scroll Down To View");

    //creating new div for generated-resume
    const newResume = document.createElement("div");
    newResume.innerHTML = generateResumeHTML();
    newResume.id = "generatedResume";
    // appending generated resume in body of our document
    document.body.appendChild(newResume);

    // FOR SHAREABLE LINK
    //getting user's name
    const username = (document.getElementById("name") as HTMLInputElement)
      .value;
    // Getting elements in shareable Link div
    const shareableLink = document.getElementById("ResumeLink") as HTMLButtonElement;
    const DownloadBtn = document.getElementById("DownloadBtn") as HTMLButtonElement;
    //Download button functionality
    DownloadBtn.addEventListener("click", () => {
      window.print();
    });
    // copy shareable link functionality
    shareableLink.addEventListener('click',async ()=>{
      const link = `${window.location.origin}?${encodeURIComponent(username)}_cv.html`

      try{
        //using clipboard API to copy shareable link
        await navigator.clipboard.writeText(link)
        alert("shareable Link copied to clipboard!")
      }catch(err){
        console.error("Failed To Copy URL: ", err)
        alert("Failed To Copy Resume Link!")
      }
    })
  }
});

//making a function to generate resume
function generateResumeHTML() {
  // Collecting all form's data
  const personalInfo = {
    name: (document.getElementById("name") as HTMLInputElement).value,
    email: (document.getElementById("email") as HTMLInputElement).value,
    image: document.getElementById("userImage") as HTMLInputElement,
    phoneNumber: (document.getElementById("number") as HTMLInputElement).value,
    about: (document.getElementById("about") as HTMLInputElement).value,
  };

  const education = {
    institute: (document.getElementById("Institute") as HTMLInputElement).value,
    degree: (document.getElementById("Degree") as HTMLInputElement).value,
    startYear: (document.getElementById("startYear") as HTMLInputElement).value,
    endYear: (document.getElementById("endYear") as HTMLInputElement).value,
  };

  const workExperience = {
    company: (document.getElementById("company") as HTMLInputElement).value,
    position: (document.getElementById("position") as HTMLInputElement).value,
    startYear: (document.getElementById("startYearComp") as HTMLInputElement)
      .value,
    endYear: (document.getElementById("endYearComp") as HTMLInputElement).value,
  };
  //getting skills from user
  const skills = (document.getElementById("Skills") as HTMLInputElement).value;

  // creating image url for user provided image
  let imageURL = "";
  if (personalInfo.image.files) {
    imageURL = URL.createObjectURL(personalInfo.image.files[0]); //now we can use it in src of image attribute
  }

  // Generating resume HTML to append
  return `
      <!-- Left Side -->
      <div class="leftSide">
        <!-- personal Information -->
        <div class="personalInfo">
        <!-- Image in personal Info -->
        <div class="image">
        <img src="${imageURL}" alt="Resume Image">
        </div>
          <!-- Name in personal info -->
          <div contenteditable="true" class="name">
            <h1>${personalInfo.name}</h1>
          </div>
          <!-- Contact details in personal info -->
          <div contenteditable="true"  class="contactDetails">
            <p>${personalInfo.phoneNumber}</p>
            <p>${personalInfo.email}<p>
  
          </div>
        </div>
        
        <!-- Skills -->
        <div contenteditable="true" class="skills">
        My Skills: ${skills}
        </div>
      </div>
  
      <!-- Right Side -->
      <div id= "rightSide" class="rightSide">
        <div contenteditable="true"  class="about">
          <h2 id="aboutHead">About</h2>
          <p>
          ${personalInfo.about}
            </p>
        </div>
        <!-- Education -->
        <div contenteditable="true" class="edu">
          <h2 id="edu">Education</h2>
    
          <p><strong>${education.degree}</strong> from <strong>${education.institute}</strong></p>
          <p>${education.startYear}-${education.endYear}</p>
  
        </div>
        <!-- Work -->
        <div contenteditable="true" class="work">
          <h2 id="work">Work Experience</h2>
          <p> ${workExperience.company}
            <br>
            ${workExperience.position}<br>
             (${workExperience.startYear} - ${workExperience.endYear}) <br>
            <br>
            </p>
        </div>
        <!-- shareable link and download option section -->
    <div id="shareableLink">
    <button id="ResumeLink">Copy Resume Link</button>
      <br />
      <button id="DownloadBtn">Download As PDF</button>
    </div>

      </div>
            `;
}
