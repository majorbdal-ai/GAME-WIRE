function updateViewers() {
    let count = parseInt(document.getElementById('viewer-count').innerText.replace(/,/g, ''));
    count += Math.floor(Math.random() * 100) - 40;
    document.getElementById('viewer-count').innerText = count.toLocaleString();
}
setInterval(updateViewers, 3000);

function openModal(title) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('news-modal').style.display = 'flex';
}
function closeModal() { document.getElementById('news-modal').style.display = 'none'; }
