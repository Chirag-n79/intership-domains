// Tab switching logic
document.querySelectorAll('.nav-tabs li').forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active class from all
    document.querySelectorAll('.nav-tabs li').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));

    // Add active to clicked
    tab.classList.add('active');
    document.getElementById(tab.dataset.tab).classList.add('active');
  });
});

// Recommendation logic
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
      <p>We recommend you explore the following internship domains:</p>
      <ul>${matchedDomains.map(d => `<li>${d}</li>`).join('')}</ul>
    `;
  } else {
    resultBox.innerHTML = `<p>No domains matched. Try selecting more skills or updating your goal.</p>`;
  }
}
