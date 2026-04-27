const reunionYears = 44;
const currentYear = new Date().getFullYear();
const graduationYear = currentYear - reunionYears;

for (const element of document.querySelectorAll("#reunion-years, #footer-years")) {
  element.textContent = String(reunionYears);
}

for (const element of document.querySelectorAll("#grad-year, #milestone-year")) {
  element.textContent = String(graduationYear);
}
