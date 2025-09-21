import { renderHeader } from './header.js';
import { renderSidebar, setupSidebarNavigation } from './sidebarComponent.js';
import { setupThemeToggle } from './theme.js';
import { setupSidebar } from './sidebar.js';
import { setupProfileMenu } from './profile.js';
import { setupMap } from './map.js';

document.addEventListener('DOMContentLoaded', () => {
	const headerContainer = document.getElementById('header-container');
	if (headerContainer) {
		headerContainer.innerHTML = renderHeader();
	}
	const sidebarContainer = document.getElementById('sidebar-container');
	if (sidebarContainer) {
		sidebarContainer.innerHTML = renderSidebar();
		setupSidebarNavigation();
	}
	setupThemeToggle();
	setupSidebar();
	setupProfileMenu();
	setupMap();
});