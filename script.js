/* script.js (updated with your GitHub projects) */
(function(){
  document.getElementById('year').textContent = new Date().getFullYear();

  const themeToggle = document.getElementById('themeToggle');
  themeToggle.addEventListener('click', ()=>{
    document.documentElement.classList.toggle('light-theme');
    themeToggle.textContent =
      document.documentElement.classList.contains('light-theme') ? '☀️' : '🌙';
  });

  // --- Updated Projects ---
  const projectData = [
    {
      title: 'Nasuli Blog V2 (Final)',
      desc: 'Full blog system with frontend and backend functionalities.',
      repo: 'https://github.com/Student-2501102355/Nasuli-Blog-V2-FINAL.git',
      live: '#'
    },
    {
      title: 'CAN-AYAN Blog V4 (Final)',
      desc: 'Updated project entry as requested.',
      repo: 'https://github.com/Student-2501102355/CAN-AYAN-Blog-V4-FINAL.git',
      live: '#'
    },
    {
      title: 'Sign-Up / Sign-In Sample Project',
      desc: 'A simple authentication system demonstrating sign-up and sign-in features.',
      repo: 'https://github.com/Student-2501102355/Sign-Up-Sign-In-Project-Sample.git',
      live: '#'
    },
    {
      title: 'C Program Machine Problem Sample 3',
      desc: 'C programming machine problem sample project.',
      repo: 'https://github.com/Student-2501102355/C-Program-Project-Machince-Problem-Sample-3.git',
      live: '#'
    }
  ];

  const projectGrid = document.getElementById('projectGrid');
  projectData.forEach(p => {
    const el = document.createElement('div');
    el.className = 'project-card';
    el.innerHTML = `
      <h3>${p.title}</h3>
      <p class="muted small">${p.desc}</p>
      <div style="margin-top:10px">
        <a class="btn small" href="${p.repo}" target="_blank" rel="noreferrer">View Repo</a>
        <a class="btn small ghost" href="${p.live}" target="_blank" rel="noreferrer">Live</a>
      </div>`;
    if(p.title.includes('Duplicate')) el.querySelector('h3').style.textAlign='center';
    projectGrid.appendChild(el);
  });

  // Blogs
  const blogData = [
    {
      title: 'Networking 101',
      content: 'An intro to TCP/IP, subnetting, and common tools. Full guide with examples and labs.'
    },
    {
      title: 'Web Security Basics',
      content: 'OWASP Top 10, secure headers, input validation, and deployment tips.'
    },
    {
      title: 'Automating with Python',
      content: 'Use Python to automate repetitive tasks: file handling, HTTP requests, and scheduling.'
    },
    {
      title: 'Introduction to C Programming',
      content: 'Learn the fundamentals of C programming, variables, loops, functions, and memory handling.'
    }
  ];

  const blogGrid = document.getElementById('blogGrid');
  blogData.forEach((b, i) => {
    const card = document.createElement('div');
    card.className = 'blog-card';
    card.innerHTML = `
      <h3>${b.title}</h3>
      <p class="muted small">${b.content.substring(0, 90)}...</p>
      <div style="margin-top:10px">
        <button class="btn small" data-idx="${i}">Read More</button>
      </div>`;
    if(b.title==='Web Security Basics') card.querySelector('h3').style.textAlign='center';
    blogGrid.appendChild(card);
  });

  const blogView = document.getElementById('blogView');
  const blogTitle = document.getElementById('blogTitle');
  const blogBody = document.getElementById('blogBody');

  blogGrid.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-idx]');
    if (!btn) return;

    const i = Number(btn.dataset.idx);
    blogTitle.textContent = blogData[i].title;
    blogBody.textContent = blogData[i].content;

    blogView.classList.remove('hidden');
    blogView.setAttribute('aria-hidden', 'false');
    blogView.scrollIntoView({ behavior: 'smooth' });
  });

  document.getElementById('blogBack').addEventListener('click', ()=>{
    blogView.classList.add('hidden');
    blogView.setAttribute('aria-hidden','true');
    document.getElementById('blog').scrollIntoView({ behavior: 'smooth' });
  });

  const contactForm = document.getElementById('contactForm');
  const openEmail = document.getElementById('openEmail');

  openEmail.addEventListener('click', ()=>{
    const form = contactForm;

    const name = encodeURIComponent(form.name.value || '');
    const email = encodeURIComponent(form.email.value || '');
    const msg = encodeURIComponent(form.message.value || '');

    const subject = encodeURIComponent("Portfolio message from " + (form.name.value || "Visitor"));

    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${msg}`;

    window.location.href = `mailto:youremail@example.com?subject=${subject}&body=${body}`;
  });

  contactForm.addEventListener('submit', (e) => {
    if (contactForm.action.includes("YOUR_FORM_ID")) {
      e.preventDefault();
      alert('Contact form endpoint not configured. Use the "Open Email" button or replace the form action with your Formspree endpoint.');
    }
  });

  (function matrix(){
    const canvas = document.getElementById('bgCanvas');
    if(!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = canvas.width = innerWidth;
    let height = canvas.height = innerHeight;

    window.addEventListener('resize', ()=>{
      width = canvas.width = innerWidth;
      height = canvas.height = innerHeight;
      init();
    });

    const cols = Math.floor(width / 20);
    let ypos = Array(cols).fill(0);

    function init(){
      for(let i = 0; i < cols; i++){
        ypos[i] = Math.random() * height;
      }
    }
    init();

    function draw(){
      ctx.fillStyle = 'rgba(0,0,0,0.05)';
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = 'rgba(0,230,255,0.8)';
      ctx.font = '14px monospace';

      for(let i = 0; i < ypos.length; i++){
        const text = String.fromCharCode(33 + Math.random() * 94);
        const x = i * 20;

        ctx.fillText(text, x, ypos[i]);

        if(ypos[i] > height + Math.random() * 10000){
          ypos[i] = 0;
        } else {
          ypos[i] += 14 + Math.random() * 10;
        }
      }

      requestAnimationFrame(draw);
    }

    draw();
  })();
})();
