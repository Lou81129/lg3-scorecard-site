const sidebar = document.getElementById("sidebar");
const sidebarContent = document.getElementById("sidebar-content");
const appArea = document.getElementById("app-area");

document.querySelectorAll(".nav-links a[data-panel]").forEach(link => {
    link.addEventListener("click", () => {
        const file = link.getAttribute("data-panel");

        fetch(file)
            .then(res => res.text())
            .then(html => {
                sidebarContent.innerHTML = html;
                sidebar.classList.add("open");
                appArea.classList.add("shifted");
            });
    });
});

document.getElementById("close-panel").addEventListener("click", () => {
    sidebar.classList.remove("open");
    appArea.classList.remove("shifted");
});
