const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');
const hoverTargets = document.querySelectorAll('.hover-target');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX - 10 + 'px';
    cursor.style.top = e.clientY - 10 + 'px';

    setTimeout(() => {
        follower.style.left = e.clientX - 20 + 'px';
        follower.style.top = e.clientY - 20 + 'px';
    }, 100);
});

hoverTargets.forEach(target => {
    target.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(2)';
        cursor.style.background = '#4ecdc4';
        cursor.style.boxShadow = '0 0 30px #4ecdc4';
        follower.style.transform = 'scale(1.5)';
        follower.style.borderColor = '#4ecdc4';
    });

    target.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursor.style.background = '#ff6b6b';
        cursor.style.boxShadow = '0 0 20px #ff6b6b';
        follower.style.transform = 'scale(1)';
        follower.style.borderColor = 'rgba(255, 107, 107, 0.5)';
    });
});
