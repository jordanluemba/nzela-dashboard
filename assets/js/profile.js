export function setupProfileMenu() {
    const profileMenuBtn = document.getElementById('profileMenuBtn');
    const profileMenu = document.getElementById('profileMenu');
    profileMenuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        profileMenu.classList.toggle('hidden');
    });
    document.addEventListener('click', () => {
        profileMenu.classList.add('hidden');
    });
}
