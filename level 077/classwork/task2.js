const textarea = document.getElementById('message');
const counter = document.getElementById('counter');
const limit = 200;
textarea.addEventListener('keydown', () => {
    setTimeout(() => {
        const length = textarea.value.length;
        counter.textContent = `${length} / ${limit}`;
        if (length > limit) {
            counter.classList.add('over-limit');
        } else {
            counter.classList.remove('over-limit');
        }
    }, 0);
});
