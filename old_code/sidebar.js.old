const sidebar = document.getElementById("sidebar");
const sidebarContent = document.getElementById("sidebar-content");
const appArea = document.getElementById("app-area");

// Handle sidebar link clicks
document.querySelectorAll(".nav-links a[data-panel]").forEach(link => {
    link.addEventListener("click", () => {
        const file = link.getAttribute("data-panel");

        fetch(file)
            .then(res => res.text())
            .then(html => {
                sidebarContent.innerHTML = html;

                // Activate FAQ if needed
                if (file === "faq.html") {
                    activateFAQ();
                }

                sidebar.classList.add("open");
                appArea.classList.add("shifted");
            });
    });
});

// Close sidebar
document.getElementById("close-panel").addEventListener("click", () => {
    sidebar.classList.remove("open");
    appArea.classList.remove("shifted");
});

// FAQ toggle logic
function activateFAQ() {
    const questions = sidebarContent.querySelectorAll(".faq-question");

    questions.forEach(q => {
        q.addEventListener("click", () => {
            const answer = q.nextElementSibling;

            // Toggle visibility
            const isOpen = answer.style.display === "block";
            answer.style.display = isOpen ? "none" : "block";
        });
    });
}
