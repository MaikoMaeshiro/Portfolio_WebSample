// 背景設定
if (CONFIG.heroImages.length > 0) {
    const randomImg = CONFIG.heroImages[Math.floor(Math.random() * CONFIG.heroImages.length)];
    const style = document.createElement('style');
    style.innerHTML = `#hero::before { background-image: url(${randomImg}); }`;
    document.head.appendChild(style);
}

// GitHub & ゲームリスト
document.getElementById('github-link').href = CONFIG.github;
const gameUl = document.getElementById('game-list');
CONFIG.gameList.forEach(g => {
    const li = document.createElement('li'); li.textContent = g; gameUl.appendChild(li);
});

// Worksアコーディオン生成
const container = document.getElementById('works-container');
CONFIG.works.forEach(w => {
    const imgHtml = w.thumb ? `<img src="${w.thumb}" style="width:100%;">` : `<div style="background:#222; height:200px; display:flex; align-items:center; justify-content:center;">No Image</div>`;
    const html = `
        <div class="accordion-item">
            <button class="acc-header"><span>${w.title}</span><span class="icon">+</span></button>
            <div class="acc-body">
                ${imgHtml}
                <p style="margin-top:20px; color:#ccc;">${w.description}</p>
            </div>
        </div>`;
    container.insertAdjacentHTML('beforeend', html);
});

// アコーディオン動作（後から生成した要素にも対応）
document.addEventListener('click', (e) => {
    const header = e.target.closest('.acc-header');
    if (!header) return;
    
    const item = header.parentElement;
    item.classList.toggle('open');
    const icon = header.querySelector('.icon');
    icon.textContent = item.classList.contains('open') ? '−' : '＋';
});

// フェード監視（双方向）
const obs = new IntersectionObserver((es) => {
    es.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('active');
        else e.target.classList.remove('active');
    });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));