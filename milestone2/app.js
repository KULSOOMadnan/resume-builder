"use strict";
// Function to validate basic information
function validateBasicInfo() {
    const requiredFields = [
        'name',
        'email',
        'phone',
        'birthday',
        'address',
        'profilePicInput',
        'aboutme'
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
    const university = document.getElementById("university").value;
    const degree = document.getElementById("degree").value;
    const aboutMe = document.getElementById("aboutme").value;
    const gradYear = document.getElementById("gradYear").value;
    const company = document.getElementById("company").value;
    const position = document.getElementById("position").value;
    const duration = document.getElementById("duration").value;
    const description = document.getElementById("description").value;
    const project1 = document.getElementById("project1").value;
    const project1Desc = document.getElementById("project1Desc").value;
    // url validation 
    function isValidUrl(url) {
        try {
            new URL(url);
            return true;
        }
        catch (e) {
            return false;
        }
    }
    const linkedinInput = document.getElementById("linkedin").value;
    const linkedin = isValidUrl(linkedinInput) ? linkedinInput : "https://www.linkedin.com";
    // Update resume preview
    document.getElementById("resumeName").textContent = names;
    document.getElementById("resumeEmail").textContent = email;
    document.getElementById("resumePhone").textContent = phone;
    document.getElementById("resumeBirthday").textContent = birthday;
    document.getElementById("resumeAddress").textContent = address;
    document.getElementById("resumeaboutMe").textContent = aboutMe; //
    document.getElementById("resumeLinkedIn").href = linkedin;
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
    // remove btn and li class
    const listitem = document.querySelectorAll(".list-item .remove-btn");
    listitem.forEach(item => {
        item.remove();
    });
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
    /// Create a unique identifier for the resume
    const resumeId = Date.now().toString(); // Using timestamp as a simple unique ID
    const resumeUrl = `?id=${resumeId}-${names}-resume`; // Updated URL format for current page
    // Display the resume URL
    const resumeUrlElement = document.getElementById("resumeUrl");
    resumeUrlElement.innerHTML = `Your Resume Url: <a href="${resumeUrl}" target="_blank">${resumeUrl}</a>`;
    // Save list items
    const languagesLis = document.getElementById('languagesList');
    const skillsLis = document.getElementById('skillsList');
    const softSkillsLis = document.getElementById('softSkillsList');
    const languages = Array.from(languagesLis.children).map(li => li.textContent?.trim() || '');
    const skills = Array.from(skillsLis.children).map(li => li.textContent?.trim() || '');
    const softSkills = Array.from(softSkillsLis.children).map(li => li.textContent?.trim() || '');
    // Save resume data to localStorage
    const resumeData = {
        profilePic: profilePicPreview.src,
        names, email, phone, birthday, address, university, degree, aboutMe, gradYear,
        company, position, duration, description, project1, project1Desc, linkedin,
        languages, skills, softSkills
    };
    localStorage.setItem(`resume_${resumeId}`, JSON.stringify(resumeData));
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
        li.classList.add('list-item');
        const span = document.createElement('span');
        span.textContent = languages;
        li.appendChild(span);
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove language';
        removeBtn.classList.add('remove-btn');
        removeBtn.onclick = function () {
            languagesList.removeChild(li); // Remove the li element
        };
        // Append the button to the li
        li.appendChild(removeBtn);
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
        li.classList.add('list-item');
        const span = document.createElement('span');
        span.textContent = skill;
        li.appendChild(span);
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove language';
        removeBtn.classList.add('remove-btn');
        removeBtn.onclick = function () {
            softSkillsList.removeChild(li); // Remove the li element
        };
        // Append the button to the li
        li.appendChild(removeBtn);
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
        li.classList.add('list-item');
        const span = document.createElement('span');
        span.textContent = skill;
        li.appendChild(span);
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove language';
        removeBtn.classList.add('remove-btn');
        removeBtn.onclick = function () {
            skillsList.removeChild(li); // Remove the li element
        };
        // Append the button to the li
        li.appendChild(removeBtn);
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
document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams);
    const resumeId = urlParams.get('id');
    if (resumeId) {
        const resumeData = localStorage.getItem(`resume_${resumeId}`);
        if (resumeData) {
            const data = JSON.parse(resumeData);
            // Populate resume section with data
            document.getElementById("resumeName").textContent = data.names;
            document.getElementById("resumeEmail").textContent = data.email;
            document.getElementById("resumePhone").textContent = data.phone;
            document.getElementById("resumeBirthday").textContent = data.birthday;
            document.getElementById("resumeAddress").textContent = data.address;
            document.getElementById("resumeaboutMe").textContent = data.aboutMe;
            document.getElementById("resumeLinkedIn").href = data.linkedin;
            document.getElementById("resumeUniversity").textContent = data.university;
            document.getElementById("resumeDegree").textContent = data.degree;
            document.getElementById("resumeGradYear").textContent = data.gradYear;
            document.getElementById("resumeCompany").textContent = data.company;
            document.getElementById("resumePosition").textContent = data.position;
            document.getElementById("resumeDuration").textContent = data.duration;
            document.getElementById("resumeDescription").textContent = data.description;
            document.getElementById("resumeProject1").textContent = data.project1;
            document.getElementById("resumeProject1Desc").textContent = data.project1Desc;
            // Handle empty fields or defaults
            if (!data.project1 || !data.project1Desc || !data.company || !data.position || !data.duration || !data.gradYear) {
                document.getElementById("resumeProject1").textContent = '-';
                document.getElementById("resumeProject1Desc").textContent = '-';
                document.getElementById("resumeGradYear").textContent = '-';
                document.getElementById("resumeCompany").textContent = '-';
                document.getElementById("resumePosition").textContent = '';
                document.getElementById("resumeDuration").textContent = '-';
            }
            // Display list items
            const resumeLanguages = document.getElementById('resumeLanguages');
            resumeLanguages.innerHTML = data.languages.length ? data.languages.join('<br>') : '-';
            const resumeSoftSkills = document.getElementById('resumeSoftSkills');
            resumeSoftSkills.innerHTML = data.softSkills.length ? data.softSkills.join('<br>') : '-';
            const resumeSkills = document.getElementById('resumeSkills');
            resumeSkills.innerHTML = data.skills.length ? data.skills.join('<br>') : '-';
            // Display profile picture
            const resumeProfilePic = document.getElementById("resumeProfilePic");
            resumeProfilePic.src = data.profilePic;
            // Show the resume section and hide the form section
            document.getElementById("form-section").style.display = "none";
            document.getElementById("resume-section").style.display = "block";
            document.querySelector(".hi").style.display = "none";
        }
        else {
            // Handle case where resume data is not found
            alert("Resume data not found.");
        }
    }
});
