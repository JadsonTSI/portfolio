const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
burger.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

const roles = [
  'Desenvolvedor Full Stack',
  'Python & Django',
  'Angular & NestJS',
  'PHP & MySQL',
  'IoT & Sistemas Embarcados'
];
const typedEl = document.getElementById('typed');
let ri = 0, ci = 0, deleting = false;

function typeLoop() {
  const current = roles[ri];
  if (!deleting) {
    ci++;
    typedEl.textContent = current.slice(0, ci);
    if (ci === current.length) { deleting = true; setTimeout(typeLoop, 1500); return; }
  } else {
    ci--;
    typedEl.textContent = current.slice(0, ci);
    if (ci === 0) { deleting = false; ri = (ri + 1) % roles.length; }
  }
  setTimeout(typeLoop, deleting ? 32 : 58);
}
typeLoop();

const targets = document.querySelectorAll('.reveal');
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.15 });
targets.forEach(t => io.observe(t));

document.getElementById('year').textContent = new Date().getFullYear();
