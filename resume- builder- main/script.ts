// Get references to HTML elements
const form = document.getElementById('resume-form') as HTMLFormElement;
const generateButton = document.getElementById('generate-resume') as HTMLButtonElement;
const resumeOutput = document.getElementById('resume-output') as HTMLElement;
const resumeContent = document.getElementById('resume-content') as HTMLElement;

// Function to generate the resume
function createResume(): void {
    // Get values from the form
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;

    // Create the resume HTML
    const resumeHTML = `
        <div class="resume-header">
            <h2>${name}</h2>
            <p>Email: <a href="mailto:${email}">${email}</a></p>
            <p>Phone: <a href="tel:${phone}">${phone}</a></p>
        </div>
        <div class="resume-section">
            <h3>Education</h3>
            <p>${education}</p>
        </div>
        <div class="resume-section">
            <h3>Skills</h3>
            <p>${skills}</p>
        </div>
        <div class="resume-section">
            <h3>Work Experience</h3>
            <p>${experience}</p>
        </div>
    `;

    // Display the resume
    resumeContent.innerHTML = resumeHTML;
    resumeOutput.classList.remove('hidden');
}

// Add event listener to the Generate Resume button
generateButton.addEventListener('click', createResume);


