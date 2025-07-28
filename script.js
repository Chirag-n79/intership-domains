let currentStep = 1;

function nextStep() {
  document.getElementById(`step${currentStep}`).classList.remove("active");
  currentStep++;
  if (currentStep <= 5) {
    document.getElementById(`step${currentStep}`).classList.add("active");
  }

  if (currentStep === 4) {
    recommendInternships();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("step1").classList.add("active");
});

function recommendInternships() {
  const name = document.getElementById("name").value;
  const goal = document.getElementById("goal").value.toLowerCase();
  const checkedSkills = Array.from(document.querySelectorAll('input[type=checkbox]:checked')).map(cb => cb.value);

  const domainTags = {
    "Web Development": ["html", "css", "js"],
    "Data Science": ["python", "ml", "ai"],
    "AI/ML Research": ["ai", "ml", "python"],
    "Android Development": ["java", "android"],
    "UI/UX Design": ["uiux", "html"],
    "Cloud Engineering": ["cloud", "python"],
    "Cybersecurity": ["cyber", "network", "linux"],
    "Software Engineering": ["java", "python", "js"]
  };

  const matchedDomains = [];

  for (const domain in domainTags) {
    const tags = domainTags[domain];
    const match = tags.some(tag => checkedSkills.includes(tag) || goal.includes(tag));
    if (match) matchedDomains.push(domain);
  }

  const resultBox = document.getElementById("recommendations");

  if (matchedDomains.length > 0) {
    resultBox.innerHTML = `
      <h3>Hello ${name || 'User'}!</h3>
      <p>We recommend the following domains:</p>
      <ul>${matchedDomains.map(d => `<li>${d}</li>`).join("")}</ul>
    `;
  } else {
    resultBox.innerHTML = `<p>No matches found. Try selecting more skills or updating your career goal.</p>`;
  }
}
