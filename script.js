const contentData = {
    news: {
        title: "Top Gaming News",
        html: `
            <article><h3>GTA 6: Breaking Records</h3><p>Trailer breaks 200M views in 24 hours. Rockstar confirms 2026 launch.</p></article>
            <article><h3>New Valorant Agent</h3><p>Teased for next season: A controller with gravity-bending abilities.</p></article>
            <article><h3>Cyberpunk Expansion</h3><p>New "Phantom City" DLC arriving this winter. Full city redesign.</p></article>
        `
    },
    esports: {
        title: "Esports Arena",
        html: `
            <div class="stats">
                <p>Kills: 142 | Maps Won: 2 | MVPs: 3</p>
                <div class="chat-box">
                    <div class="chat"><strong>[User123]:</strong> Let's go SEN!</div>
                    <div class="chat"><strong>[ProGamer]:</strong> Insane play by TenZ</div>
                    <div class="chat"><strong>[Bot_Zero]:</strong> GGWP everyone</div>
                </div>
            </div>
        `
    },
    launches: {
        title: "Upcoming Game Launches",
        html: `
            <table>
                <tr><th>Game</th><th>Platform</th><th>Reqs</th></tr>
                <tr><td>Cyberpunk 2078</td><td>PC/PS5</td><td>RTX 5090</td></tr>
                <tr><td>Final Fantasy XVII</td><td>PS5/Xbox</td><td>SSD Required</td></tr>
                <tr><td>Star Citizen (Launch)</td><td>PC</td><td>High End</td></tr>
            </table>
        `
    }
};

function openModal(type) {
    const data = contentData[type];
    if (!data) return;
    const body = document.getElementById('modal-body');
    body.innerHTML = `<h2>${data.title}</h2>${data.html}`;
    document.getElementById('modal-overlay').classList.add('active');
}

function closeModal() {
    document.getElementById('modal-overlay').classList.remove('active');
}
