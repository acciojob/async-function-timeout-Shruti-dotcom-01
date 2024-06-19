//your JS code here. If required.
document.getElementById("btn").addEventListener("click", async () => {
  let text = document.getElementById("text").value;
  let delay = parseInt(document.getElementById("delay").value, 10);

  if (text && !isNaN(delay)) {
    await delayMessage(text, delay);
  }
});

async function delayMessage(message, delay) {
  await new Promise((resolve) => setTimeout(resolve, delay));
  document.getElementById("output").textContent = message;
}
