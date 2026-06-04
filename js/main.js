/* ============================================================
   main.js — data.js 의 RESUME 객체를 DOM에 렌더링
   ============================================================ */

(function () {
  const R = RESUME;

  /* ---- 기본 정보 ---- */
  setText("name",        R.name);
  setText("job-title",   R.jobTitle);
  setText("bio",         R.bio);
  setText("email-text",  R.email);
  setText("phone-text",  R.phone);
  setText("footer-text", `© 2026 ${R.name}. All rights reserved.`);
  setAttr("email-link",  "href", `mailto:${R.email}`);
  setAttr("phone-link",  "href", `tel:${R.phone.replace(/-/g, "")}`);
  if (R.photo) setAttr("profile-img", "src", R.photo);

  /* ---- 기술 스택 ---- */
  const skillsGrid = document.getElementById("skills-grid");
  R.skills.forEach(group => {
    const card = el("div", "skill-card");
    card.innerHTML = `<h3 class="skill-category">${group.category}</h3>`;
    const list = el("ul", "skill-items");
    group.items.forEach(item => {
      const li = el("li", "skill-item");
      li.innerHTML = `
        <span class="skill-name">${item.name}</span>
        <span class="skill-bar">
          <span class="skill-fill" style="width:${item.level * 20}%"></span>
        </span>`;
      list.appendChild(li);
    });
    card.appendChild(list);
    skillsGrid.appendChild(card);
  });

  /* ---- 경력 ---- */
  renderTimeline("experience-list", R.experience, (item) => `
    <div class="timeline-header">
      <span class="timeline-title">${item.company}</span>
      <span class="timeline-period">${item.period}</span>
    </div>
    <p class="timeline-sub">${item.role}${item.location ? ` · ${item.location}` : ""}</p>
    <ul class="timeline-desc">${item.desc.map(d => `<li>${d}</li>`).join("")}</ul>
  `);

  /* ---- 학력 ---- */
  renderTimeline("education-list", R.education, (item) => `
    <div class="timeline-header">
      <span class="timeline-title">${item.school}</span>
      <span class="timeline-period">${item.period}</span>
    </div>
    <p class="timeline-sub">${item.degree} · ${item.major}</p>
  `);

  /* ---- 프로젝트 ---- */
  const grid = document.getElementById("projects-grid");
  R.projects.forEach(p => {
    const card = el("div", "project-card");
    const imgHTML = p.image
      ? `<img src="${p.image}" alt="${p.name}" class="project-img" />`
      : `<div class="project-img-placeholder"></div>`;
    const linkHTML = p.link
      ? `<a href="${p.link}" target="_blank" class="project-link">🔗 보기</a>`
      : "";
    card.innerHTML = `
      ${imgHTML}
      <div class="project-body">
        <h3 class="project-name">${p.name}</h3>
        <p class="project-desc">${p.desc}</p>
        <div class="project-tags">${p.tech.map(t => `<span class="tag">${t}</span>`).join("")}</div>
        ${linkHTML}
      </div>`;
    grid.appendChild(card);
  });

  /* ---- 자격증 & 수상 ---- */
  const certList = document.getElementById("cert-list");
  R.certifications.forEach(c => {
    const li = el("li", "cert-item");
    li.innerHTML = `
      <span class="cert-name">${c.name}</span>
      <span class="cert-meta">${c.issuer} &nbsp;·&nbsp; ${c.issued}</span>`;
    certList.appendChild(li);
  });

  /* ---- 스크롤 애니메이션 ---- */
  const observer = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add("visible");
    }),
    { threshold: 0.1 }
  );
  document.querySelectorAll(".section").forEach(s => observer.observe(s));

  /* ---- 유틸 ---- */
  function setText(id, val) {
    const el = document.getElementById(id);
    if (el && val) el.textContent = val;
  }
  function setAttr(id, attr, val) {
    const el = document.getElementById(id);
    if (el && val) el.setAttribute(attr, val);
  }
  function el(tag, cls) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    return e;
  }
  function renderTimeline(containerId, items, template) {
    const container = document.getElementById(containerId);
    items.forEach(item => {
      const entry = el("div", "timeline-entry");
      entry.innerHTML = template(item);
      container.appendChild(entry);
    });
  }
})();
