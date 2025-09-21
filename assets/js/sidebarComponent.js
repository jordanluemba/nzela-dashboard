export function renderSidebar() {
    // Détecte la page courante
    const current = window.location.pathname.split('/').pop();
    return `
    <aside id="sidebar" class="w-72 min-w-[220px] bg-white dark:bg-gray-900 shadow-xl h-full flex flex-col gap-6 py-8 px-4 transition-all duration-300 z-20">
        <nav class="flex flex-col gap-2">
            <button class="sidebar-menu flex items-center gap-3 px-4 py-2 rounded-lg font-semibold text-black dark:text-white ${current === 'index.html' ? 'bg-gray-100 dark:bg-gray-800 active' : 'hover:bg-gray-100 dark:hover:bg-gray-800'} transition-colors" data-label="Tableau de bord" id="dashboardBtn">
                <span class="sidebar-icon"><svg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'><rect x='3' y='3' width='7' height='7'/><rect x='14' y='3' width='7' height='7'/><rect x='14' y='14' width='7' height='7'/><rect x='3' y='14' width='7' height='7'/></svg></span>
                <span class="sidebar-label">Tableau de bord</span>
            </button>
            <a href="/pages/signalements.html" class="sidebar-menu flex items-center gap-3 px-4 py-2 rounded-lg font-semibold text-black dark:text-white ${current === 'signalements.html' ? 'bg-gray-100 dark:bg-gray-800 active' : 'hover:bg-gray-100 dark:hover:bg-gray-800'} transition-colors" data-label="Signalements">
                <span class="sidebar-icon"><svg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path d='M12 9v2m0 4h.01'/><path d='M10.29 3.86a1 1 0 011.42 0l7.13 7.13a1 1 0 01.21 1.09l-2.12 7.07A1 1 0 0116 20H8a1 1 0 01-.93-.65l-2.12-7.07a1 1 0 01.21-1.09l7.13-7.13z'/></svg></span>
                <span class="sidebar-label">Signalements</span>
            </a>
            <button class="sidebar-menu flex items-center gap-3 px-4 py-2 rounded-lg font-semibold text-black dark:text-white ${current === 'carte.html' ? 'bg-gray-100 dark:bg-gray-800 active' : 'hover:bg-gray-100 dark:hover:bg-gray-800'} transition-colors" data-label="Carte" id="carteBtn">
                <span class="sidebar-icon"><svg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path d='M3 12l2-2m0 0l7-7 7 7M13 5v6h6'/></svg></span>
                <span class="sidebar-label">Carte</span>
            </button>
            <a href="/pages/affectation.html" class="sidebar-menu flex items-center gap-3 px-4 py-2 rounded-lg font-semibold text-black dark:text-white ${current === 'affectation.html' ? 'bg-gray-100 dark:bg-gray-800 active' : 'hover:bg-gray-100 dark:hover:bg-gray-800'} transition-colors" data-label="Affectations">
                <span class="sidebar-icon"><svg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path d='M17 9V7a5 5 0 00-10 0v2a2 2 0 00-2 2v7a2 2 0 002 2h10a2 2 0 002-2v-7a2 2 0 00-2-2z'/></svg></span>
                <span class="sidebar-label">Affectations</span>
            </a>
            <a href="/pages/statistiques.html" class="sidebar-menu flex items-center gap-3 px-4 py-2 rounded-lg font-semibold text-black dark:text-white ${current === 'statistiques.html' ? 'bg-gray-100 dark:bg-gray-800 active' : 'hover:bg-gray-100 dark:hover:bg-gray-800'} transition-colors" data-label="Statistiques">
                <span class="sidebar-icon"><svg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path d='M4 6h16M4 10h16M4 14h16M4 18h16'/></svg></span>
                <span class="sidebar-label">Statistiques</span>
            </a>
            <a href="/pages/utilisateurs.html" class="sidebar-menu flex items-center gap-3 px-4 py-2 rounded-lg font-semibold text-black dark:text-white ${current === 'utilisateurs.html' ? 'bg-gray-100 dark:bg-gray-800 active' : 'hover:bg-gray-100 dark:hover:bg-gray-800'} transition-colors" data-label="Utilisateurs">
                <span class="sidebar-icon"><svg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'><circle cx='12' cy='7' r='4'/><path d='M5.5 21a7.5 7.5 0 0113 0'/></svg></span>
                <span class="sidebar-label">Utilisateurs</span>
            </a>
            <a href="/pages/notifications.html" class="sidebar-menu flex items-center gap-3 px-4 py-2 rounded-lg font-semibold text-black dark:text-white ${current === 'notifications.html' ? 'bg-gray-100 dark:bg-gray-800 active' : 'hover:bg-gray-100 dark:hover:bg-gray-800'} transition-colors" data-label="Notifications">
                <span class="sidebar-icon"><svg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'/></svg></span>
                <span class="sidebar-label">Notifications</span>
            </a>
            <a href="/pages/parametres.html" class="sidebar-menu flex items-center gap-3 px-4 py-2 rounded-lg font-semibold text-black dark:text-white ${current === 'parametres.html' ? 'bg-gray-100 dark:bg-gray-800 active' : 'hover:bg-gray-100 dark:hover:bg-gray-800'} transition-colors" data-label="Paramètres">
                <span class="sidebar-icon"><svg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path d='M5 13l4 4L19 7'/></svg></span>
                <span class="sidebar-label">Paramètres</span>
            </a>
        </nav>
    </aside>
    `;
}


export function setupSidebarNavigation() {
    const dashboardBtn = document.getElementById('dashboardBtn');
    if (dashboardBtn) {
        dashboardBtn.addEventListener('click', () => {
            window.location.href = '/index.html';
        });
    }
    const carteBtn = document.getElementById('carteBtn');
    if (carteBtn) {
        carteBtn.addEventListener('click', () => {
            window.location.href = '/pages/carte.html';
        });
    }
}
