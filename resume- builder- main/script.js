var _a;
(_a = document.getElementById('generate-resume')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    var experience = document.getElementById('experience').value;
    var resumeContent = "\n       <h1>".concat(name, "</h1>\n       <p>Email: ").concat(email, "</p>\n       <p>Phone: ").concat(phone, "</p>\n       <h2>Education</h2>\n       <p>").concat(education, "</p>\n       <h2>Skills</h2>\n       <p>").concat(skills, "</p>\n       <h2>Work Experience</h2>\n       <p>").concat(experience, "</p>\n   ");
    var resumeOutput = document.getElementById('resume-output');
    var resumeContentDiv = document.getElementById('resume-content');
    resumeContentDiv.innerHTML = resumeContent;
    resumeOutput.classList.remove('hidden');
});
