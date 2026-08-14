// ---- tech icon data (shared by marquee + project stack) ----
const TECHS = [
  { name: 'Python', color: '#3776AB', href: 'https://www.python.org/', svg: '<path fill="#3776AB" d="M12 2c-1.6 0-2.9.2-3.9.5C6 3 6 4.3 6 5.4v1.5h6v1H4.6C3 8 2 9.5 2 12s1 4 2.6 4h1.6v-2c0-1.7 1.4-3.2 3.1-3.2h4.2c1.4 0 2.5-1.1 2.5-2.5V5.4c0-1.4-1.2-2.5-2.5-2.9C13 2.1 12.5 2 12 2zM9.2 4.4c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z"/><path fill="#FFD43B" d="M18 8.9v2c0 1.7-1.4 3.1-3.1 3.1H10.7c-1.4 0-2.5 1.1-2.5 2.5v3.1c0 1.4 1.2 2.3 2.5 2.7 1.6.5 3.1.5 4.7 0 1.2-.4 2.6-1.2 2.6-2.7v-1.5h-6v-1h7.4c1.6 0 2.2-1.5 2.2-4s-1-4-2.6-4H18zm-3.1 10.7c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z"/>' },
  { name: 'JavaScript', color: '#F0DB4F', href: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript', svg: '<rect x="2" y="2" width="20" height="20" rx="3" fill="#F0DB4F"/><text x="12" y="16.5" font-family="ui-monospace,monospace" font-size="9" font-weight="700" text-anchor="middle" fill="#1a1a1a">JS</text>' },
  { name: 'PHP', color: '#777BB4', href: 'https://www.php.net/', svg: '<ellipse cx="12" cy="12" rx="10" ry="6.5" fill="#777BB4"/><text x="12" y="14.5" font-family="ui-monospace,monospace" font-size="7" font-weight="700" text-anchor="middle" fill="#fff">php</text>' },
  { name: 'Lua', color: '#2C2D72', href: 'https://www.lua.org/', svg: '<circle cx="10.5" cy="12" r="7.5" fill="#2C2D72"/><circle cx="14.5" cy="9.5" r="6" fill="#14101f"/>' },
  { name: 'SQL', color: '#64748B', href: 'https://en.wikipedia.org/wiki/SQL', svg: '<ellipse cx="12" cy="6.5" rx="8" ry="3" fill="none" stroke="#64748B" stroke-width="1.6"/><path d="M4 6.5v11c0 1.7 3.6 3 8 3s8-1.3 8-3v-11" fill="none" stroke="#64748B" stroke-width="1.6"/><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" fill="none" stroke="#64748B" stroke-width="1.6"/>' },
  { name: 'C', color: '#5C6BC0', href: 'https://en.cppreference.com/w/c', svg: '<rect x="2" y="2" width="20" height="20" rx="5" fill="#5C6BC0"/><text x="12" y="16" font-family="ui-monospace,monospace" font-size="11" font-weight="700" text-anchor="middle" fill="#fff">C</text>' },
  { name: 'C++', color: '#00599C', href: 'https://en.cppreference.com/w/cpp', svg: '<rect x="2" y="2" width="20" height="20" rx="5" fill="#00599C"/><text x="12" y="15.5" font-family="ui-monospace,monospace" font-size="8.5" font-weight="700" text-anchor="middle" fill="#fff">C++</text>' },
  { name: 'Django', color: '#0C4B33', href: 'https://www.djangoproject.com/', svg: '<rect x="2" y="2" width="20" height="20" rx="5" fill="#0C4B33"/><text x="12" y="16" font-family="ui-monospace,monospace" font-size="10" font-weight="700" text-anchor="middle" fill="#7FD9A6">Dj</text>' },
  { name: 'NestJS', color: '#E0234E', href: 'https://nestjs.com/', svg: '<path d="M12 2 21 7v10L12 22 3 17V7z" fill="none" stroke="#E0234E" stroke-width="1.8"/><circle cx="12" cy="12" r="2.6" fill="#E0234E"/>' },
  { name: 'Angular', color: '#DD0031', href: 'https://angular.dev/', svg: '<path d="M12 2 21 5.5 19.6 18 12 22 4.4 18 3 5.5z" fill="none" stroke="#DD0031" stroke-width="1.8"/><path d="M12 6.5 16.5 16h-2.1l-.9-2.2H10.4l-.9 2.2H7.4zm0 3.3-1.2 3h2.4z" fill="#DD0031"/>' },
  { name: 'HTML5', color: '#E44D26', href: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML', svg: '<path d="M4 2h16l-1.5 17L12 22l-6.5-3z" fill="none" stroke="#E44D26" stroke-width="1.6"/><text x="12" y="14.5" font-family="ui-monospace,monospace" font-size="6.5" font-weight="700" text-anchor="middle" fill="#E44D26">5</text>' },
  { name: 'CSS3', color: '#1572B6', href: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS', svg: '<path d="M20 2H4l1.5 17L12 22l6.5-3z" fill="none" stroke="#1572B6" stroke-width="1.6"/><text x="12" y="14.5" font-family="ui-monospace,monospace" font-size="6.5" font-weight="700" text-anchor="middle" fill="#1572B6">3</text>' },
  { name: 'MySQL', color: '#4479A1', href: 'https://www.mysql.com/', svg: '<ellipse cx="12" cy="6" rx="7.5" ry="3" fill="#4479A1"/><path d="M4.5 6v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V6" fill="none" stroke="#4479A1" stroke-width="1.6"/><path d="M4.5 12v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3v-6" fill="none" stroke="#4479A1" stroke-width="1.6"/>' },
  { name: 'IoT', color: '#67e8f9', href: 'https://en.wikipedia.org/wiki/Internet_of_things', svg: '<rect x="7" y="7" width="10" height="10" rx="1.5" fill="none" stroke="#67e8f9" stroke-width="1.6"/><circle cx="12" cy="12" r="2" fill="#67e8f9"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" stroke="#67e8f9" stroke-width="1.4" stroke-linecap="round"/>' },
  { name: 'Git', color: '#F05033', href: 'https://git-scm.com/', svg: '<circle cx="7" cy="6" r="2" fill="none" stroke="#F05033" stroke-width="1.6"/><circle cx="7" cy="18" r="2" fill="none" stroke="#F05033" stroke-width="1.6"/><circle cx="16" cy="12" r="2" fill="none" stroke="#F05033" stroke-width="1.6"/><path d="M7 8v8M7 12h7" fill="none" stroke="#F05033" stroke-width="1.6"/>' },
  { name: 'Linux', color: '#F5C518', href: 'https://www.linux.org/', svg: '<ellipse cx="12" cy="13" rx="6.5" ry="8" fill="#F5C518"/><circle cx="9.5" cy="10.5" r="1.1" fill="#1a1a1a"/><circle cx="14.5" cy="10.5" r="1.1" fill="#1a1a1a"/><path d="M9 19c1 1.2 5 1.2 6 0" fill="none" stroke="#1a1a1a" stroke-width="1.2" stroke-linecap="round"/>' },
  { name: 'XAMPP', color: '#FB7A24', href: 'https://www.apachefriends.org/', svg: '<path d="M5 5l14 14M19 5 5 19" stroke="#FB7A24" stroke-width="2.4" stroke-linecap="round"/>' },
  { name: 'Pytest', color: '#A9D14A', href: 'https://docs.pytest.org/', svg: '<rect x="3" y="3" width="18" height="18" rx="4" fill="none" stroke="#A9D14A" stroke-width="1.6"/><path d="M7 12.5l3 3 7-7" fill="none" stroke="#A9D14A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>' },
  { name: 'React Native', color: '#61DAFB', href: 'https://reactnative.dev/', svg: '<circle cx="12" cy="12" r="2" fill="#61DAFB"/><ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" stroke-width="1.3"/><ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" stroke-width="1.3" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" stroke-width="1.3" transform="rotate(120 12 12)"/>' },
  { name: 'TypeScript', color: '#3178C6', href: 'https://www.typescriptlang.org/', svg: '<rect x="2" y="2" width="20" height="20" rx="3" fill="#3178C6"/><text x="12" y="16.5" font-family="ui-monospace,monospace" font-size="9" font-weight="700" text-anchor="middle" fill="#fff">TS</text>' },
  { name: 'Postgres', color: '#336791', href: 'https://www.postgresql.org/', svg: '<ellipse cx="12" cy="6" rx="7.5" ry="3" fill="#336791"/><path d="M4.5 6v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V6" fill="none" stroke="#336791" stroke-width="1.6"/><path d="M4.5 12v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3v-6" fill="none" stroke="#336791" stroke-width="1.6"/>' },
  { name: 'AWS', color: '#FF9900', href: 'https://aws.amazon.com/', svg: '<rect x="2" y="2" width="20" height="20" rx="5" fill="#FF9900"/><text x="12" y="15.5" font-family="ui-monospace,monospace" font-size="7.5" font-weight="700" text-anchor="middle" fill="#1a1a1a">aws</text>' },
  { name: 'Azure', color: '#0078D4', href: 'https://azure.microsoft.com/', svg: '<rect x="2" y="2" width="20" height="20" rx="5" fill="#0078D4"/><path d="M8 17 11 7h3l-4 7h5l-7 5 2-5z" fill="#fff"/>' },
  { name: 'Bootstrap', color: '#7952B3', href: 'https://getbootstrap.com/', svg: '<rect x="2" y="2" width="20" height="20" rx="5" fill="#7952B3"/><text x="12" y="16" font-family="ui-monospace,monospace" font-size="11" font-weight="700" text-anchor="middle" fill="#fff">B</text>' },
  { name: 'Figma', color: '#A259FF', href: 'https://www.figma.com/', svg: '<circle cx="12" cy="7" r="4.2" fill="#F24E1E"/><circle cx="8.5" cy="13" r="4.2" fill="#A259FF"/><circle cx="15.5" cy="16" r="4.2" fill="#0ACF83"/>' }
];

function pillHTML(t) {
  return '<a class="tech-pill" href="' + t.href + '" target="_blank" rel="noopener">' +
    '<svg viewBox="0 0 24 24">' + t.svg + '</svg><span>' + t.name + '</span></a>';
}
function tileHTML(t) {
  return '<a class="skill-tile" href="' + t.href + '" target="_blank" rel="noopener">' +
    '<svg viewBox="0 0 24 24">' + t.svg + '</svg><span>' + t.name + '</span></a>';
}

const group = TECHS.map(pillHTML).join('');
document.getElementById('marquee').innerHTML =
  '<div class="skills-marquee-track"><div class="skills-marquee-group">' + group + '</div><div class="skills-marquee-group">' + group + '</div></div>';

document.getElementById('skills-grid').innerHTML = TECHS.map(tileHTML).join('');

const projectTechs = ['PHP', 'MySQL', 'XAMPP'];
document.getElementById('project-stack').innerHTML = TECHS
  .filter(t => projectTechs.includes(t.name))
  .map(pillHTML).join('');

// ---- nav burger ----
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
burger.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

// ---- typed role ----
const roles = [
  'Full Stack · Python & Django',
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

// ---- magnetic buttons ----
document.querySelectorAll('.btn, .contact-cta-primary').forEach(el => {
  el.addEventListener('mousemove', e => {
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) * 0.25;
    const y = (e.clientY - r.top - r.height / 2) * 0.25;
    el.style.transform = 'translate(' + x + 'px,' + y + 'px)';
  });
  el.addEventListener('mouseleave', () => { el.style.transform = 'translate(0,0)'; });
});

// ---- spotlight hover ----
document.querySelectorAll('.spotlight').forEach(el => {
  el.addEventListener('mousemove', e => {
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', (e.clientX - r.left) + 'px');
    el.style.setProperty('--my', (e.clientY - r.top) + 'px');
  });
});

// ---- scroll-spy nav ----
(function () {
  const navMap = {};
  document.querySelectorAll('.nav-links a[href^="#"]').forEach(a => {
    navMap[a.getAttribute('href').slice(1)] = a;
  });
  const spy = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        Object.values(navMap).forEach(a => a.classList.remove('active'));
        const link = navMap[entry.target.id];
        if (link) link.classList.add('active');
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
  document.querySelectorAll('main section[id]').forEach(s => spy.observe(s));
})();

// ---- reveal on scroll ----
const targets = document.querySelectorAll('.reveal');
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
targets.forEach(t => io.observe(t));

document.getElementById('year').textContent = new Date().getFullYear();

// ---- particle background (covers full page height, not just viewport) ----
(function () {
  const canvas = document.getElementById('particles');
  const ctx = canvas.getContext('2d');
  const page = document.querySelector('.page');
  const colors = ['168,85,247', '232,121,249', '103,232,249'];
  let particles = [];
  let w, h;
  let mouseX = null, mouseY = null, mouseActive = false;
  const grabDist = 130;

  function newParticle() {
    return {
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.8 + 1,
      c: colors[Math.floor(Math.random() * colors.length)]
    };
  }

  function respawnAtEdge(p) {
    const edge = Math.floor(Math.random() * 4);
    if (edge === 0) { p.x = Math.random() * w; p.y = -8; }
    else if (edge === 1) { p.x = w + 8; p.y = Math.random() * h; }
    else if (edge === 2) { p.x = Math.random() * w; p.y = h + 8; }
    else { p.x = -8; p.y = Math.random() * h; }
    p.vx = (Math.random() - 0.5) * 0.3;
    p.vy = (Math.random() - 0.5) * 0.3;
    p.r = Math.random() * 1.8 + 1;
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    for (let i = 0; i < particles.length; i++) {
      const a = particles[i];
      for (let j = i + 1; j < particles.length; j++) {
        const b = particles[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          ctx.strokeStyle = 'rgba(168,85,247,' + (0.22 * (1 - dist / 150)) + ')';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }
    if (mouseActive) {
      for (const p of particles) {
        const dx = p.x - mouseX, dy = p.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < grabDist) {
          ctx.strokeStyle = 'rgba(232,121,249,' + (0.6 * (1 - dist / grabDist)) + ')';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.stroke();
        }
      }
    }
    for (const p of particles) {
      ctx.beginPath();
      ctx.fillStyle = 'rgba(' + p.c + ',0.9)';
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function resize() {
    w = canvas.width = document.documentElement.clientWidth;
    h = canvas.height = Math.max(page.scrollHeight, document.documentElement.scrollHeight);
    const count = Math.min(220, Math.round((w * h) / 14000));
    particles = Array.from({ length: count }, newParticle);
    draw();
  }
  window.addEventListener('resize', resize);
  resize();
  setTimeout(resize, 400);

  function step() {
    for (const p of particles) {
      p.x += p.vx; p.y += p.vy;
      if (p.x < -10 || p.x > w + 10 || p.y < -10 || p.y > h + 10) respawnAtEdge(p);
    }
    draw();
    requestAnimationFrame(step);
  }
  requestAnimationFrame(step);

  window.addEventListener('mousemove', e => {
    mouseX = e.clientX + window.scrollX;
    mouseY = e.clientY + window.scrollY;
    mouseActive = true;
  });
  document.addEventListener('mouseleave', () => { mouseActive = false; });

  window.addEventListener('click', e => {
    if (particles.length > 260) particles.shift();
    const p = newParticle();
    p.x = e.clientX + window.scrollX;
    p.y = e.clientY + window.scrollY;
    p.vx = (Math.random() - 0.5) * 0.5;
    p.vy = (Math.random() - 0.5) * 0.5;
    particles.push(p);
  });
})();
