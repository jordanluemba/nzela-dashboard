export function setupSidebar() {
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebarLabels = document.querySelectorAll('.sidebar-label');
    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('w-72');
        sidebar.classList.toggle('min-w-[220px]');
        sidebar.classList.toggle('w-16');
        sidebar.classList.toggle('px-4');
        sidebar.classList.toggle('px-1');
        sidebar.classList.toggle('overflow-hidden');
        sidebarLabels.forEach(label => {
            label.classList.toggle('hidden');
        });
    });
    // Menu actif
    const sidebarMenus = document.querySelectorAll('.sidebar-menu');
    sidebarMenus.forEach((btn, idx) => {
        btn.addEventListener('click', () => {
            sidebarMenus.forEach(b => b.classList.remove('active', 'bg-teal-100', 'dark:bg-teal-900/40', 'text-teal-700', 'dark:text-teal-300'));
            btn.classList.add('active', 'bg-teal-100', 'dark:bg-teal-900/40', 'text-teal-700', 'dark:text-teal-300');
        });
    });
}
