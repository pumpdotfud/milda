const btn = document.getElementById('explodeBtn');

btn.addEventListener('click', function (e) {
    const circle = document.createElement('span');
    circle.classList.add('explode');
    this.appendChild(circle);

    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    circle.style.width = circle.style.height = size + 'px';
    circle.style.left = (e.clientX - rect.left - size / 2) + 'px';
    circle.style.top = (e.clientY - rect.top - size / 2) + 'px';

    circle.addEventListener('animationend', () => circle.remove());
});
