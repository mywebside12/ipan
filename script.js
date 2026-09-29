// Foto profil miring lembut mengikuti kursor, kembali normal saat kursor pergi
const slot = document.getElementById('photoSlot');
const frame = document.getElementById('photoFrame');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (slot && frame && !prefersReducedMotion) {
  slot.addEventListener('mousemove', (e) => {
    const rect = slot.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    frame.style.transform = `perspective(600px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`;
  });
  slot.addEventListener('mouseleave', () => {
    frame.style.transform = 'perspective(600px) rotateY(0deg) rotateX(0deg)';
  });
}
