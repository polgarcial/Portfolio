// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Project filtering for Recent Works section
document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projects = document.querySelectorAll(".projects-grid .project-card");

  // Función para animar la aparición/desaparición de proyectos
  function animateProject(project, show) {
    if (show) {
      project.style.opacity = "0";
      project.style.display = "block";
      project.style.transform = "translateY(20px)";

      // Forzar un reflow
      project.offsetHeight;

      project.style.transition = "opacity 0.3s ease, transform 0.3s ease";
      project.style.opacity = "1";
      project.style.transform = "translateY(0)";
    } else {
      project.style.opacity = "0";
      project.style.transform = "translateY(20px)";
      setTimeout(() => {
        project.style.display = "none";
      }, 300);
    }
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove 'active' class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));

      // Add 'active' class to the clicked button
      this.classList.add("active");

      const filterValue = this.getAttribute("data-filter");

      // Aplicar filtro con animación
      projects.forEach((project) => {
        const shouldShow =
          filterValue === "all" || project.classList.contains(filterValue);
        animateProject(project, shouldShow);
      });
    });
  });

  // Inicializar todos los proyectos como visibles
  projects.forEach((project) => {
    project.style.opacity = "1";
    project.style.transform = "translateY(0)";
  });
});
