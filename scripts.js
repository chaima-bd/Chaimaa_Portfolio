const toggle = document.getElementById('academicToggle');
const section = document.getElementById('academicSection');
if (toggle && section) {
    toggle.addEventListener('click', () => {
        const open = section.classList.toggle('open');
        toggle.innerHTML = open
            ? '<i class="fas fa-graduation-cap"></i>&nbsp; Hide University &amp; Early Projects'
            : '<i class="fas fa-graduation-cap"></i>&nbsp; Show University &amp; Early Projects (4)';
        toggle.setAttribute('aria-expanded', open);
    });
}

const btn = document.getElementById('goToTopBtn');
window.onscroll = () => {
    if (btn) btn.style.display = document.documentElement.scrollTop > 300 ? 'block' : 'none';
};
function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

const sections = document.querySelectorAll('section[id], footer[id]');
const navLinks = document.querySelectorAll('.preview-nav .nav-link');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => { if (scrollY >= s.offsetTop - 120) current = s.id; });
    navLinks.forEach(l => {
        l.classList.toggle('active', l.getAttribute('href') === '#' + current);
    });
});
