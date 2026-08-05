const letters = [
    {
        title: "প্রিয় মানুষের জন্য প্রথম চিঠি",
        content: "প্রিয়, আজ লিখতে বসে হাত কাঁপছে। অনেক কথা ছিল মনে, কিন্তু সব কি আর লিখে বোঝানো যায়? তোমার সাথে কাটানো সেই প্রথম মুহূর্তটি আজও আমার মনের মণিকোঠায় উজ্জ্বল হয়ে আছে।"
    },
    {
        title: "পুরানো স্মৃতির পাতা",
        content: "পুরানো ডায়েরির ভাঁজে শুকনো গোলাপটা আজও আছে। সময় গড়িয়েছে অনেক, কিন্তু সেই দিনের বিকেলের রোদ্দুর আর তোমার হাসির স্মৃতি আজও আমাকে একই রকম আবেগপ্রবণ করে তোলে।"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.letter-grid');
    const modal = document.getElementById('letter-modal');
    const closeBtn = document.querySelector('.close-btn');

    // Populate grid
    letters.forEach((letter, index) => {
        const card = document.createElement('div');
        card.className = 'letter-card';
        card.innerHTML = `<h3>${letter.title}</h3><p>${letter.content.substring(0, 50)}...</p>`;
        card.onclick = () => openModal(index);
        grid.appendChild(card);
    });

    function openModal(index) {
        document.getElementById('modal-title').innerText = letters[index].title;
        document.getElementById('modal-body').innerText = letters[index].content;
        modal.style.display = 'block';
    }

    closeBtn.onclick = () => modal.style.display = 'none';
    window.onclick = (e) => { if (e.target == modal) modal.style.display = 'none'; };
});
