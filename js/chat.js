document.addEventListener("DOMContentLoaded", function () {
    const chatBox = document.getElementById("chat-box");
    const chatInput = document.getElementById("chat-message");
    const sendBtn = document.getElementById("send-btn");
    const attachBtn = document.getElementById("attach-btn");
    const fileUpload = document.getElementById("file-upload");
    const typingIndicator = document.getElementById("typing-indicator");
    const darkModeToggle = document.getElementById("dark-mode-toggle");

    function addMessage(text, sender) {
        if (text.trim() === "") return;

        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message", sender);
        messageDiv.innerHTML = `<p>${text}</p><span class="time">${getTime()}</span>`;
        chatBox.appendChild(messageDiv);
        chatBox.scrollTop = chatBox.scrollHeight;

        if (sender === "sent") {
            typingIndicator.style.display = "block";
            setTimeout(() => {
                autoReply();
                typingIndicator.style.display = "none";
            }, 1000);
        }
    }

    function autoReply() {
        const replies = ["Thanks for your message! 😊", "I'll get back to you shortly.", "How can I assist you?"];
        const randomReply = replies[Math.floor(Math.random() * replies.length)];
        addMessage(randomReply, "received");
    }

    function getTime() {
        const now = new Date();
        return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }

    sendBtn.addEventListener("click", function () {
        addMessage(chatInput.value, "sent");
        chatInput.value = "";
    });

    chatInput.addEventListener("keypress", function (event) {
        typingIndicator.style.display = "block";
        if (event.key === "Enter") {
            sendBtn.click();
        }
    });

    attachBtn.addEventListener("click", function () {
        fileUpload.click();
    });

    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });
});
