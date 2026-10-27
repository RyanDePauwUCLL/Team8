const themeToggle = document.querySelector(".theme-toggle");

themeToggle.addEventListener("click", () => {
    const isDarkMode = document.body.classList.toggle("dark-mode");

    themeToggle.setAttribute("aria-pressed", String(isDarkMode));
    themeToggle.setAttribute(
        "aria-label",
        isDarkMode ? "Lichte modus inschakelen" : "Donkere modus inschakelen"
    );
});