export function setupThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    themeToggle.addEventListener('click', () => {
        document.getElementById('mainBody').classList.toggle('dark');
        if(document.getElementById('mainBody').classList.contains('dark')) {
            themeIcon.innerHTML = `<svg class='h-6 w-6' fill='none' stroke='currentColor' stroke-width='2' viewBox='0 0 24 24'><path d='M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z'/></svg>`;
        } else {
            themeIcon.innerHTML = `<svg class='h-6 w-6' fill='none' stroke='currentColor' stroke-width='2' viewBox='0 0 24 24'><circle cx='12' cy='12' r='5'/><path d='M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42'/></svg>`;
        }
    });
}
