"use strict";
// Function to validate basic information
function validateBasicInfo() {
    const requiredFields = [
        'name',
        'email',
        'phone',
        'birthday',
        'address',
        'profilePicInput'
    ];
    for (const fieldId of requiredFields) {
        const fieldElement = document.getElementById(fieldId);
        if (!fieldElement) {
            console.error(`Element with ID "${fieldId}" not found.`);
            return false;
        }
        const fieldValue = fieldElement.value?.trim();
        if (!fieldValue) {
            alert(`${fieldId.charAt(0).toUpperCase() + fieldId.slice(1).replace(/([A-Z])/g, ' $1')} is required.`);
            return false;
        }
    }
    const languagesList = document.getElementById('languagesList');
    if (!languagesList || languagesList.children.length == 0) {
        alert("At least one language is required.");
        return false;
    }
    const skillsList = document.getElementById('skillsList');
    if (!skillsList || skillsList.children.length === 0) {
        alert("At least one skill is required.");
        return false;
    }
    return true;
}
function generateResume() {
    if (!validateBasicInfo())
        return; // Stop if validation fails
    const profilePicPreview = document.getElementById("profilePicPreview");
    const profilePic = document.getElementById("resumeProfilePic");
    profilePic.src = profilePicPreview.src;
    const names = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const birthday = document.getElementById("birthday").value;
    const address = document.getElementById("address").value;
    const linkedin = document.getElementById("linkedin").value;
    const github = document.getElementById("github").value;
    const university = document.getElementById("university").value;
    const degree = document.getElementById("degree").value;
    const gradYear = document.getElementById("gradYear").value;
    const company = document.getElementById("company").value;
    const position = document.getElementById("position").value;
    const duration = document.getElementById("duration").value;
    const description = document.getElementById("description").value;
    const project1 = document.getElementById("project1").value;
    const project1Desc = document.getElementById("project1Desc").value;
    // Update resume preview
    document.getElementById("resumeName").textContent = names;
    document.getElementById("resumeEmail").textContent = email;
    document.getElementById("resumePhone").textContent = phone;
    document.getElementById("resumeBirthday").textContent = birthday;
    document.getElementById("resumeAddress").textContent = address;
    document.getElementById("resumeLinkedIn").href = linkedin;
    document.getElementById("resumeGitHub").href = github;
    document.getElementById("resumeUniversity").textContent = university;
    document.getElementById("resumeDegree").textContent = degree;
    document.getElementById("resumeGradYear").textContent = gradYear;
    document.getElementById("resumeCompany").textContent = company;
    document.getElementById("resumePosition").textContent = position;
    document.getElementById("resumeDuration").textContent = duration;
    document.getElementById("resumeDescription").textContent = description;
    document.getElementById("resumeProject1").textContent = project1;
    document.getElementById("resumeProject1Desc").textContent = project1Desc;
    if (!project1 || !project1Desc || !company || !position || !duration || !gradYear) {
        document.getElementById("resumeProject1").textContent = '-';
        document.getElementById("resumeProject1Desc").textContent = '-';
        document.getElementById("resumeGradYear").textContent = '-';
        document.getElementById("resumeCompany").textContent = '-';
        document.getElementById("resumePosition").textContent = '';
        document.getElementById("resumeDuration").textContent = '-';
    }
    // Languages
    const languagesList = document.getElementById('languagesList');
    const resumeLanguages = document.getElementById('resumeLanguages');
    resumeLanguages.innerHTML = languagesList.innerHTML;
    // Soft Skills
    const softSkillsList = document.getElementById('softSkillsList');
    const resumeSoftSkills = document.getElementById('resumeSoftSkills');
    resumeSoftSkills.innerHTML = softSkillsList.innerHTML;
    if (!softSkillsList.innerHTML) {
        resumeSoftSkills.innerHTML = '-';
    }
    // Skills
    const skillsList = document.getElementById('skillsList');
    const resumeSkills = document.getElementById('resumeSkills');
    resumeSkills.innerHTML = skillsList.innerHTML;
    // Switch to the resume section
    document.getElementById("form-section").style.display = "none";
    document.getElementById("resume-section").style.display = "block";
}
function addLanguages() {
    const languagesInput = document.getElementById('languages');
    const languagesList = document.getElementById('languagesList');
    const languages = languagesInput.value.trim();
    if (languages) {
        const li = document.createElement('li');
        li.textContent = languages;
        languagesList.appendChild(li);
        languagesInput.value = ''; // Clear input field
    }
}
function addSoftSkills() {
    const softSkillsInput = document.getElementById('softSkills');
    const softSkillsList = document.getElementById('softSkillsList');
    const skill = softSkillsInput.value.trim();
    if (skill) {
        const li = document.createElement('li');
        li.textContent = skill;
        softSkillsList.appendChild(li);
        softSkillsInput.value = ''; // Clear input field
    }
    else {
        if (softSkillsList.children.length === 0 || softSkillsList.lastElementChild?.textContent !== '-') {
            const li = document.createElement('li');
            li.textContent = '-';
            softSkillsList.appendChild(li);
        }
    }
}
function addSkills() {
    const skillsInput = document.getElementById('skills');
    const skillsList = document.getElementById('skillsList');
    const skill = skillsInput.value.trim();
    if (skill) {
        const li = document.createElement('li');
        li.textContent = skill;
        skillsList.appendChild(li);
        skillsInput.value = ''; // Clear input field
    }
}
function editResume() {
    document.getElementById("form-section").style.display = "block";
    document.getElementById("resume-section").style.display = "none";
}
function downloadPDF() {
    window.print();
}
// Profile picture preview logic
const profilePicInput = document.getElementById("profilePicInput");
profilePicInput.addEventListener("change", function () {
    const file = profilePicInput.files?.[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const preview = document.getElementById("profilePicPreview");
            preview.src = e.target?.result;
            preview.style.display = "block";
        };
        reader.readAsDataURL(file);
    }
    else {
        // Clear the preview if no file is selected
        const preview = document.getElementById("profilePicPreview");
        if (preview) {
            preview.src = "";
            preview.style.display = "none";
        }
    }
});
