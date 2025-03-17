document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    
    let currentIndex = 0;
    
    function updateCarousel() {
        container.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
    
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel();
    });
    
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    });
    
    // 自动轮播
    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    }, 5000);
});

// 游戏卡片点击展示详情
document.querySelectorAll('.details-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // 这里可以添加展示详情的模态框逻辑
        const gameCard = this.closest('.game-card');
        const gameName = gameCard.querySelector('h3').textContent;
        alert(`显示 ${gameName} 的详细信息`);
    });
});

// 图片画廊懒加载
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
});

// 点击图片放大查看
document.querySelectorAll('.artwork-item img').forEach(img => {
    img.addEventListener('click', function() {
        const item = this.closest('.artwork-item');
        item.classList.toggle('expanded');
    });
});

// 点击空白处关闭放大图片
document.addEventListener('click', function(e) {
    if (e.target.closest('.artwork-item.expanded')) {
        e.target.closest('.artwork-item').classList.remove('expanded');
    }
});
