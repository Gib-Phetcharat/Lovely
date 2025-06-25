

function showName() {
    const name = document.getElementById("nameInput").value;
    document.getElementById("outputName").textContent = "I miss you so much. " + name + " ❤️";

    for (let i = 0; i < 15; i++) {
        const heart = document.createElement("div");
        heart.className = "emoji-heart";
        heart.textContent = "💞";
        heart.style.left = `${Math.random() * window.innerWidth}px`;
        heart.style.top = `${window.innerHeight - 70}px`;
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 2000);
    }
}