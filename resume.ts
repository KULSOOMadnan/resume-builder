// script.ts
document.addEventListener('DOMContentLoaded', () => {
    // Profile Picture Upload and Preview
    const profilePicInput = document.getElementById('profilePic') as HTMLInputElement;
    const profilePicPreview = document.getElementById('profilePicPreview') as HTMLImageElement;
  
    profilePicInput.addEventListener('change', (event) => {
      const file = (event.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          profilePicPreview.src = e.target?.result as string;
          profilePicPreview.style.display = 'block';
        };
        reader.readAsDataURL(file);
      }
    });
  
    // Accordion for Skills Section
    const acc = document.getElementsByClassName('accordion');
    for (let i = 0; i < acc.length; i++) {
      acc[i].addEventListener('click', function () {
        this.classList.toggle('active');
        const panel = this.nextElementSibling as HTMLElement;
        if (panel.style.display === 'block') {
          panel.style.display = 'none';
        } else {
          panel.style.display = 'block';
        }
      });
    }
  
    // Download Resume as PDF
    const downloadBtn = document.getElementById('downloadResume');
    if (downloadBtn) {
      downloadBtn.addEventListener('click', () => {
        // Implement PDF download functionality
        alert('Download feature is not yet implemented.');
      });
    }
  
    // Print Resume
    const printBtn = document.getElementById('printResume');
    if (printBtn) {
      printBtn.addEventListener('click', () => {
        window.print();
      });
    }
  });


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
  