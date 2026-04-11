// 1. 背景設定（画像がある時だけ実行）
if (CONFIG.heroImages.length > 0) {
    const randomImg = CONFIG.heroImages[Math.floor(Math.random() * CONFIG.heroImages.length)];
    const style = document.createElement('style');
    style.innerHTML = `#hero::before { background-image: url(${randomImg}); }`;
    document.head.appendChild(style);
}

// 2. コンテンツ生成
document.getElementById('github-link').href = CONFIG.github;

const gameListUl = document.getElementById('game-list');
CONFIG.gameList.forEach(game => {
    const li = document.createElement('li');
    li.textContent = game;
    gameListUl.appendChild(li);
});

const worksContainer = document.getElementById('works-container');
CONFIG.works.forEach(work => {
    const imgHtml = work.thumb ? `<img src="${work.thumb}" style="width:100%;">` : `<div style="background:#ccc; height:200px; display:flex; align-items:center; justify-content:center;">No Image</div>`;
    const html = `
        <div class="work-item">
            <button class="work-header"><span>${work.title}</span><span class="icon">+</span></button>
            <div class="accordion-content">
                <div style="padding:20px;">
                    ${imgHtml}
                    <p>${work.description}</p>
                </div>
            </div>
        </div>`;
    worksContainer.insertAdjacentHTML('beforeend', html);
});

// 3. クリックイベント
document.querySelectorAll('.retro-btn, .work-header').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.parentElement.classList.toggle('active');
        const icon = btn.querySelector('.icon');
        icon.textContent = btn.parentElement.classList.contains('active') ? '-' : '+';
    });
});

// 4. スクロール監視（双方向）
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));