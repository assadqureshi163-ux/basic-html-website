const sendBtn = document.getElementById("send-btn");
const userInput = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");

sendBtn.addEventListener("click", sendMessage);
userInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});

function sendMessage() {
  const message = userInput.value.trim();
  if (message === "") return;

  addMessage("You", message);
  userInput.value = "";

  setTimeout(() => {
    botReply(message);
  }, 500);
}

function addMessage(sender, text) {
  const p = document.createElement("p");
  p.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chatBox.appendChild(p);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function botReply(userMessage) {
  let reply = "Sorry, I am still learning 🤖";

  const msg = userMessage.toLowerCase();

  if (msg.includes("hello") || msg.includes("hi")) {
    reply = "Hello 👋 How can I help you?";
  } else if (msg.includes("name")) {
    reply = "I am your first AI chatbot 😎";
  } else if (msg.includes("help")) {
    reply = "I can answer simple questions for now.";
  } else if (msg.includes("bye")) {
    reply = "Bye 👋 See you soon!";
  }

  addMessage("Bot", reply);
}
