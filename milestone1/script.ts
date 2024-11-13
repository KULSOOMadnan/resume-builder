document.addEventListener("DOMContentLoaded", () => {
  // Handle Show More button click
  let showMoreBtn = document.getElementById("showMoreBtn") as HTMLElement;
  let extraContent = document.getElementById("extraContent") as HTMLElement;

  if (showMoreBtn && extraContent) {
    showMoreBtn.addEventListener("click", () => {
      extraContent.classList.toggle("hidden");
      showMoreBtn.textContent = extraContent.classList.contains("hidden")
        ? "Show More"
        : "Show Less";
    });
  }
  // Handle Skills toggle button click
  const toggleBtn = document.getElementById( "skillsToggleBtn") as HTMLButtonElement;
  const skillsList = document.getElementById("skillsList") as HTMLElement;

  if (toggleBtn && skillsList) {
    toggleBtn.addEventListener("click", () => {
      const isHidden = skillsList.classList.contains("hidden");
      skillsList.classList.toggle("hidden");
      toggleBtn.textContent = isHidden ? "Hide" : "Show";
    });
  }
});
