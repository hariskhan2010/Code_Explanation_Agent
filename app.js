const explainBtn = document.getElementById("explainBtn");
const codeInput = document.getElementById("code");
const resultEl = document.getElementById("result");
const statusEl = document.getElementById("status");

const setStatus = (message) => {
  statusEl.textContent = message;
};

explainBtn.addEventListener("click", async () => {
  const code = codeInput.value.trim();
  if (!code) {
    setStatus("Paste a code snippet first.");
    return;
  }

  explainBtn.disabled = true;
  setStatus("Thinking...");
  resultEl.textContent = "";

  try {
    const response = await fetch("/api/explain", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code })
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || "Request failed.");
    }

    resultEl.textContent = data.explanation || "No explanation returned.";
    setStatus("Done.");
  } catch (error) {
    resultEl.textContent = "";
    setStatus(error.message);
  } finally {
    explainBtn.disabled = false;
  }
});
