const cvBtn = document.getElementById('downloadCvBtn');
if (cvBtn) {
    cvBtn.addEventListener('click', async (e) => {
        e.preventDefault();
        const cvUrl = cvBtn.getAttribute('href');
        const fileName = 'Chaimaa_Bouabd_CV_EN.pdf';

        window.open(cvUrl, '_blank', 'noopener,noreferrer');

        try {
            const response = await fetch(cvUrl);
            const blob = await response.blob();
            const blobUrl = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = blobUrl;
            link.download = fileName;
            document.body.appendChild(link);
            link.click();
            link.remove();
            URL.revokeObjectURL(blobUrl);
        } catch (err) {
            console.error('CV download failed:', err);
        }
    });
}

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
