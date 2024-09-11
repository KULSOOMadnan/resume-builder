// // script.ts
// document.addEventListener('DOMContentLoaded', () => {
//     // Static data setup, no dynamic interactions in this version
//     console.log('Resume loaded');
//     // You can add interactivity if needed in the future, such as adding new skills dynamically
//   });
// script.ts
// document.addEventListener('DOMContentLoaded', () => {
//     // Interactive Personal Information Edit
//     const editBtn = document.getElementById('editPersonalInfoBtn') as HTMLButtonElement;
//     const personalInfoDiv = document.getElementById('personalInfo') as HTMLElement;
//     editBtn.addEventListener('click', () => {
//       const isEditable = personalInfoDiv.isContentEditable;
//       personalInfoDiv.contentEditable = (!isEditable).toString();
//       editBtn.textContent = isEditable ? 'Edit' : 'Save';
//     });
//     // Add New Skill Functionality
//     const addSkillBtn = document.getElementById('addSkillBtn') as HTMLButtonElement;
//     const newSkillInput = document.getElementById('newSkillInput') as HTMLInputElement;
//     const skillsList = document.getElementById('skillsList') as HTMLUListElement;
//     addSkillBtn.addEventListener('click', () => {
//       const newSkill = newSkillInput.value.trim();
//       if (newSkill) {
//         const newSkillItem = document.createElement('li');
//         newSkillItem.textContent = newSkill;
//         skillsList.appendChild(newSkillItem);
//         newSkillInput.value = ''; // Clear the input field
//       } else {
//         alert('Please enter a skill');
//       }
//     });
//     // Toggle Work Experience Details
//     const jobTitles = document.querySelectorAll('.job-title') as NodeListOf<HTMLElement>;
//     jobTitles.forEach(jobTitle => {
//       jobTitle.addEventListener('click', () => {
//         const jobDetails = jobTitle.nextElementSibling as HTMLElement;
//         const isVisible = jobDetails.style.display === 'block';
//         jobDetails.style.display = isVisible ? 'none' : 'block';
//       });
//     });
//   });
// script.ts
// document.addEventListener('DOMContentLoaded', () => {
//     // Interactive Personal Information Edit
//     const editBtn = document.getElementById('editPersonalInfoBtn') as HTMLButtonElement;
//     const personalInfoDiv = document.getElementById('personalInfo') as HTMLElement;
//     editBtn.addEventListener('click', () => {
//       const isEditable = personalInfoDiv.isContentEditable;
//       personalInfoDiv.contentEditable = (!isEditable).toString();
//       editBtn.textContent = isEditable ? 'Edit' : 'Save';
//     });
//     // Add New Skill Functionality
//     const addSkillBtn = document.getElementById('addSkillBtn') as HTMLButtonElement;
//     const newSkillInput = document.getElementById('newSkillInput') as HTMLInputElement;
//     const skillsList = document.getElementById('skillsList') as HTMLUListElement;
//     addSkillBtn.addEventListener('click', () => {
//       const newSkill = newSkillInput.value.trim();
//       if (newSkill) {
//         const newSkillItem = document.createElement('li');
//         newSkillItem.textContent = newSkill;
//         skillsList.appendChild(newSkillItem);
//         newSkillInput.value = ''; // Clear the input field
//       } else {
//         alert('Please enter a skill');
//       }
//     });
//     // Toggle Work Experience Details
//     const jobTitles = document.querySelectorAll('.job-title') as NodeListOf<HTMLElement>;
//     jobTitles.forEach(jobTitle => {
//       jobTitle.addEventListener('click', () => {
//         const jobDetails = jobTitle.nextElementSibling as HTMLElement;
//         const isVisible = jobDetails.style.display === 'block';
//         jobDetails.style.display = isVisible ? 'none' : 'block';
//       });
//     });
//     // Toggle Skills Visibility
//     const toggleSkillsBtn = document.getElementById('toggleSkills') as HTMLElement;
//     toggleSkillsBtn.addEventListener('click', () => {
//       const isHidden = skillsList.style.display === 'none';
//       skillsList.style.display = isHidden ? 'block' : 'none';
//     });
//   });
// script.ts
// document.addEventListener('DOMContentLoaded', () => {
//     // Toggle Skills Visibility
//     const skillsHeader = document.getElementById('skillsHeader') as HTMLElement;
//     const skillsList = document.getElementById('skillsList') as HTMLElement;
//     skillsHeader.addEventListener('click', () => {
//       // Toggle the display of skills list on header click
//       skillsList.style.display = skillsList.style.display === 'none' ? 'block' : 'none';
//     });
// });
// script.ts
document.addEventListener('DOMContentLoaded', function () {
    // Handle Show More button click
    var showMoreBtn = document.getElementById('showMoreBtn');
    var extraContent = document.getElementById('extraContent');
    if (showMoreBtn && extraContent) {
        showMoreBtn.addEventListener('click', function () {
            extraContent.classList.toggle('hidden');
            showMoreBtn.textContent = extraContent.classList.contains('hidden') ? 'Show More' : 'Show Less';
        });
    }
    // Toggle Skills Visibility
    var skillsList = document.getElementById('skillsList');
    // Handle Skills toggle button click
    var toggleBtn = document.getElementById('skillsToggleBtn');
    if (toggleBtn && skillsList) {
        toggleBtn.addEventListener('click', function () {
            var isHidden = skillsList.classList.contains('hidden');
            skillsList.classList.toggle('hidden');
            toggleBtn.textContent = isHidden ? 'Hide' : 'Show';
        });
    }
});
