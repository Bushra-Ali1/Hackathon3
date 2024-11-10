// Select the form and resume output container
const resumeForm = document.getElementById('resume-form') as HTMLFormElement;
const resumeOutPut = document.getElementById('resume-output') as HTMLDivElement;

// Event listener for form submission
resumeForm.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    // Capture input values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const contact = (document.getElementById('contact') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;
    const education1 = (document.getElementById('education1') as HTMLInputElement).value;
    const education2 = (document.getElementById('education2') as HTMLInputElement).value;
    const education3 = (document.getElementById('education3') as HTMLInputElement).value;
    const education4 = (document.getElementById('education4') as HTMLInputElement).value;
    const workExperience = (document.getElementById('work-experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',').map(skill => skill.trim());

    // Generate resume output with HTML structure
    const resumeHTML = `
        <h3>${name}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Contact:</strong> ${contact}</p>
<p><strong>address:</strong> ${address}</p>
        <div class="section">
            <h3>Education</h3>
            <ul>
                <li>${education1}</li>
                <li>${education2}</li>
                <li>${education3}</li>
                <li>${education4}</li>
            </ul>
        </div>

        <div class="section">
            <h3>Work Experience</h3>
            <p>${workExperience}</p>
        </div>

        <div class="section">
            <h3>Skills</h3>
            <ul>
                ${skills.map(skill => `<li>${skill}</li>`).join('')}
            </ul>
        </div>
    `;

    // Display the generated resume in the output container
    resumeOutPut.innerHTML = resumeHTML;
    resumeOutPut.style.display = 'block';
});


