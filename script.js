// // Select the form and resume output container
// const resumeForm = document.getElementById('resume-form') as HTMLFormElement;
// const resumeOutPut = document.getElementById('resume-output') as HTMLDivElement;
// Function to handle form submission
document.getElementById('resume-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page
    // Collect the data from the form
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var contact = document.getElementById('contact').value;
    var address = document.getElementById('address').value;
    var education1 = document.getElementById('education1').value;
    var education2 = document.getElementById('education2').value;
    var education3 = document.getElementById('education3').value;
    var education4 = document.getElementById('education4').value;
    var workExperience = document.getElementById('work-experience').value;
    var skills = document.getElementById('skills').value;
    // Create an object to store the collected data
    var resumeData = {
        name: name,
        email: email,
        contact: contact,
        address: address,
        education: [education1, education2, education3, education4],
        workExperience: workExperience,
        skills: skills
    };
    // Generate the resume content using the collected data
    var resumeHTML = generateResumeHTML(resumeData);
    // Display the generated resume in the #resume-output section
    document.getElementById('resume-output').innerHTML = resumeHTML;
    // Optionally, make resume editable after generation
    makeEditable();
});
// Function to generate resume HTML content
function generateResumeHTML(data) {
    return "\n        <div class=\"resume\">\n            <h1>".concat(data.name, "</h1>\n            <p><strong>Email:</strong> ").concat(data.email, "</p>\n            <p><strong>Contact:</strong> ").concat(data.contact, "</p>\n            <p><strong>Address:</strong> ").concat(data.address, "</p>\n            \n            <h3>Education</h3>\n            <ul>\n                ").concat(data.education.map(function (edu) { return "<li>".concat(edu, "</li>"); }).join(''), "\n            </ul>\n            \n            <h3>Work Experience</h3>\n            <p>").concat(data.workExperience, "</p>\n            \n            <h3>Skills</h3>\n            <p>").concat(data.skills, "</p>\n        </div>\n    ");
}
// Function to make resume sections editable
function makeEditable() {
    // Select all paragraphs and list items in the generated resume
    var editableElements = document.querySelectorAll('.resume p, .resume li');
    // Make these elements editable
    editableElements.forEach(function (element) {
        element.setAttribute('contenteditable', 'true');
        element.addEventListener('blur', function () {
            // This is where you could save or handle the updated content
            console.log('Updated Content:', element.innerText);
        });
    });
}
