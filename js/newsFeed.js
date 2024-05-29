document.addEventListener('DOMContentLoaded', () => {
    const newsFeed = document.querySelector('.news-feed');
    const newsItems = newsFeed.querySelectorAll('.news-item');

    function setNewsItemVisibility(index) {
        newsItems.forEach((item, i) => {
            if (i === index) {
                item.classList.add('visible');
            } else {
                item.classList.remove('visible');
            }
        });
    }

    setNewsItemVisibility(0);

    function scrollNews() {
        const currentIndex = newsItems.findIndex(item => item.classList.contains('visible'));
        const nextIndex = (currentIndex + 1) % newsItems.length;
        setNewsItemVisibility(nextIndex);
    }

    setInterval(scrollNews, 5000); 
});