document.addEventListener("DOMContentLoaded", () => {
    // 1. 基本プロフィールの反映
    if (typeof CONFIG !== 'undefined') {
        if(document.getElementById('prof-name')) document.getElementById('prof-name').textContent = CONFIG.profile.name;
        if(document.getElementById('prof-title')) document.getElementById('prof-title').textContent = CONFIG.profile.title;
        if(document.getElementById('prof-intro')) document.getElementById('prof-intro').textContent = CONFIG.profile.intro;
        if(document.getElementById('github-link')) document.getElementById('github-link').href = CONFIG.profile.github;

        // 2. 背景設定
        if (CONFIG.heroImages && CONFIG.heroImages.length > 0) {
            const randomImg = CONFIG.heroImages[Math.floor(Math.random() * CONFIG.heroImages.length)];
            const heroEl = document.getElementById('hero');
            if(heroEl) {
                const style = document.createElement('style');
                style.innerHTML = `#hero::before { background-image: url(${randomImg}); }`;
                document.head.appendChild(style);
            }
        }

        // 3. ゲームリスト生成
        const gameUl = document.getElementById('game-list');
        if (gameUl && CONFIG.gameList) {
            CONFIG.gameList.forEach(g => {
                const li = document.createElement('li'); li.textContent = g; gameUl.appendChild(li);
            });
        }

        // 4. Works生成
        const container = document.getElementById('works-container');
        if (container && CONFIG.works) {
            CONFIG.works.forEach(w => {
                const imgHtml = (w.images && w.images.main) ? `<img src="${w.images.main}" style="width:100%;">` : `<div style="background:#222; height:150px; display:flex; align-items:center; justify-content:center; color:#555;">No Image</div>`;
                const html = `
                    <div class="accordion-item">
                        <button class="acc-header"><span>${w.title}</span><span class="icon">+</span></button>
                        <div class="acc-body">
                            <div style="padding:20px 0;">
                                ${imgHtml}
                                <p style="margin:15px 0; color:seagreen; font-weight:bold;">${w.summary}</p>
                                <p style="font-size:0.9rem; color:#ccc;">${w.background}</p>
                                <div style="margin-top:10px; font-size:0.8rem; background:#111; padding:10px;">
                                    <strong>Stack:</strong> ${w.stack} | <strong>Team:</strong> ${w.team}
                                </div>
                            </div>
                        </div>
                    </div>`;
                container.insertAdjacentHTML('beforeend', html);
            });
        }
    }

    // 5. アコーディオン動作
    document.addEventListener('click', (e) => {
        const header = e.target.closest('.acc-header');
        if (!header) return;
        const item = header.parentElement;
        item.classList.toggle('open');
        const icon = header.querySelector('.icon');
        if(icon) icon.textContent = item.classList.contains('open') ? '−' : '＋';
    });

    // 6. スクロールフェード
    const obs = new IntersectionObserver((es) => {
        es.forEach(e => {
            if (e.isIntersecting) e.target.classList.add('active');
            else e.target.classList.remove('active');
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));
});