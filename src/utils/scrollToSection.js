export const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    const top = section.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top, behavior: "smooth" });
  }
};
