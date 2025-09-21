export function renderHeader() {
    return `
    <header id="navbar" class="w-full flex items-center justify-between px-4 py-3 shadow-lg bg-white dark:bg-gray-900 transition-colors">
        <div class="flex items-center gap-3">
            <button id="sidebarToggle" class="text-teal-600 dark:text-teal-400 hover:bg-teal-100 dark:hover:bg-gray-800 p-2 rounded-lg mr-2 focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
            <img id="logoImg" src="../assets/img/logoNzela.png" alt="Logo" class="w-24 h-12 object-cover rounded-lg border-2 border-white dark:border-gray-700 mr-2">
        </div>
        <div class="flex items-center gap-4">
            <button id="themeToggle" class="text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-lg focus:outline-none" title="Mode sombre/clair">
                <span id="themeIcon">
                    <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
                </span>
            </button>
            <div class="relative">
                <button id="profileMenuBtn" class="flex items-center gap-2 bg-teal-100 dark:bg-teal-900 px-3 py-1 rounded-lg text-teal-700 dark:text-teal-300 font-semibold focus:outline-none">
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Profil" class="w-7 h-7 rounded-full border-2 border-teal-400">
                    <span class="hidden md:inline">Profil</span>
                </button>
                <div id="profileMenu" class="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 hidden z-50">
                    <a href="#" class="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-teal-50 dark:hover:bg-gray-700">Mon compte</a>
                    <a href="#" class="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-teal-50 dark:hover:bg-gray-700">Déconnexion</a>
                </div>
            </div>
        </div>
    </header>
    `;
}
