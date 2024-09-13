const images = document.querySelector(".box").querySelectorAll('img');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // 创建一个自定义属性data-src存放真正要显示的图片路径，原本img自带的src放一张默认图片
            const img = entry.target;
             img.src = img.dataset.src;
            console.log(img.src);
            // 观察结束
            observer.unobserve(img);
        }
    })
})
images.forEach(img => {
    observer.observe(img);
})