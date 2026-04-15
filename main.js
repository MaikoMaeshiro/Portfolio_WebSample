// --- 1. 背景ランダム設定 ---
if (CONFIG.heroImages && CONFIG.heroImages.length > 0) {
    const randomImg = CONFIG.heroImages[Math.floor(Math.random() * CONFIG.heroImages.length)];
    const style = document.createElement('style');
    style.innerHTML = `#hero::before { background-image: url(${randomImg}); }`;
    document.head.appendChild(style);
}

// --- 2. PROFILEセクションの反映 ---
// GitHubリンク
const ghLink = document.getElementById('github-link');
if (ghLink) ghLink.href = CONFIG.profile.github;

// 資格一覧の生成（もしHTMLに id="cert-list" があれば）
const certList = document.getElementById('cert-list');
if (certList && CONFIG.profile.qualifications) {
    CONFIG.profile.qualifications.forEach(q => {
        const li = document.createElement('li');
        li.textContent = q;
        certList.appendChild(li);
    });
}

// --- 3. WORKSセクション（アコーディオン）の生成 ---
const worksContainer = document.getElementById('works-container');
if (worksContainer && CONFIG.works) {
    CONFIG.works.forEach(w => {
        // 画像の判定（images.main があれば表示、なければグレーのボックス）
        const imgPath = (w.images && w.images.main) ? w.images.main : "";
        const imgHtml = imgPath 
            ? `<img src="${imgPath}" alt="${w.title}" style="width:100%; border-radius:4px;">` 
            : `<div style="background:#222; height:180px; display:flex; align-items:center; justify-content:center; color:#555; font-size:0.8rem;">No Image</div>`;

        const html = `
            <div class="accordion-item">
                <button class="acc-header">
                    <span>${w.title}</span>
                    <span class="icon">+</span>
                </button>
                <div class="acc-body">
                    <div class="work-detail-inner" style="padding: 20px 0;">
                        ${imgHtml}
                        <p style="font-size: 1.1rem; color: #fff; margin: 15px 0; border-left: 3px solid seagreen; padding-left: 15px;">
                            ${w.summary}
                        </p>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; background: #111; padding: 15px; font-size: 0.85rem; color: #ccc;">
                            <span><strong>技術:</strong> ${w.stack}</span>
                            <span><strong>期間:</strong> ${w.duration}</span>
                            <span><strong>体制:</strong> ${w.team}</span>
                        </div>
                        <div style="margin-top: 20px; font-size: 0.9rem; color: #bbb; line-height: 1.7;">
                            <p>${w.background}</p>
                            <p>${w.challenge}</p>
                            <div style="margin-top: 15px; border-top: 1px hide #333; padding-top: 15px;">
                                <p style="color: seagreen; font-weight: bold;">💬 工夫・苦労</p>
                                <p>${w.detail.comment}</p>
                                <p style="color: seagreen; font-weight: bold; margin-top: 10px;">💡 学習したこと</p>
                                <p>${w.detail.learning}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
        worksContainer.insertAdjacentHTML('beforeend', html);
    });
}

// --- 4. 動きの設定（クリック & スクロール） ---
document.addEventListener('click', (e) => {
    const header = e.target.closest('.acc-header');
    if (!header) return;
    const item = header.parentElement;
    item.classList.toggle('open');
    const icon = header.querySelector('.icon');
    if (icon) icon.textContent = item.classList.contains('open') ? '−' : '＋';
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
        else entry.target.classList.remove('active');
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));