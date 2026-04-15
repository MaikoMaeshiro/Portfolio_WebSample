// --- 背景・基本設定 ---
if (CONFIG.heroImages.length > 0) {
    const randomImg = CONFIG.heroImages[Math.floor(Math.random() * CONFIG.heroImages.length)];
    const style = document.createElement('style');
    style.innerHTML = `#hero::before { background-image: url(${randomImg}); }`;
    document.head.appendChild(style);
}
document.getElementById('github-link').href = CONFIG.profile.github;

// --- Worksアコーディオン生成（詳細版） ---
const container = document.getElementById('works-container');
CONFIG.works.forEach(w => {
    // 画像チェック
    const mainImg = w.images.main ? `<img src="${w.images.main}" style="width:100%;">` : `<div style="background:#222; height:200px; display:flex; align-items:center; justify-content:center; color:#555;">No Image</div>`;

    const html = `
        <div class="accordion-item">
            <button class="acc-header">
                <span>${w.title}</span>
                <span class="icon">+</span>
            </button>
            <div class="acc-body">
                <div class="work-detail-inner">
                    ${mainImg}
                    <p class="work-summary">${w.summary}</p>
                    <div class="work-info-grid">
                        <p><strong>使用技術:</strong> ${w.stack}</p>
                        <p><strong>制作期間:</strong> ${w.duration}</p>
                        <p><strong>制作人数:</strong> ${w.team}</p>
                    </div>
                    <div class="work-deep-detail">
                        <h3>${w.detail.subtitle}</h3>
                        <p>${w.background}</p>
                        <p>${w.challenge}</p>
                        <p class="comment">💬 ${w.detail.comment}</p>
                        <p class="learning">💡 ${w.detail.learning}</p>
                    </div>
                </div>
            </div>
        </div>`;
    container.insertAdjacentHTML('beforeend', html);
});

// --- アコーディオン動作・スクロール監視 ---
document.addEventListener('click', (e) => {
    const header = e.target.closest('.acc-header');
    if (!header) return;
    const item = header.parentElement;
    item.classList.toggle('open');
    header.querySelector('.icon').textContent = item.classList.contains('open') ? '−' : '＋';
});

const obs = new IntersectionObserver((es) => {
    es.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('active');
        else e.target.classList.remove('active');
    });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));