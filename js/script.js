document.addEventListener("DOMContentLoaded", () => {
  const heartCount = document.querySelectorAll(".stat-count")[0];
  const coinCount = document.querySelectorAll(".stat-count")[1];
  const historyBox = document.querySelector(".history");
  const clearBtn = document.querySelector(".clear");
  let copyCount = 0;

  // Heart Icons //
  document.body.addEventListener("click", (e) => {
    if (e.target.classList.contains("heart")) {
      let count = parseInt(heartCount.textContent);
      heartCount.textContent = count + 1;
    }
  });

  // Call Buttons //
  document.body.addEventListener("click", (e) => {
    if (e.target.classList.contains("call")) {
      const card = e.target.closest(".card");
      const serviceName = card.querySelector("h3").textContent;
      const serviceNumber = card.querySelector(".number").textContent;

      let coins = parseInt(coinCount.textContent);

      if (coins < 20) {
        alert("You don't have enough coins; you need at least 20 coins to make a call.");
        return;
      }

      coinCount.textContent = coins - 20;

      // Show alert //
      alert(`📞 Calling : ${serviceName} [${serviceNumber}]`);

      // Get current time //
      const currentTime = new Date().toLocaleString();

      // Add to Call History //
      let historyList = historyBox.querySelector("ul");
      if (!historyList) {
        historyList = document.createElement("ul");
        historyBox.appendChild(historyList);
      }

      const li = document.createElement("li");
      li.textContent = `${serviceName} - ${serviceNumber} (Called at: ${currentTime})`;
      historyList.appendChild(li);
    }
  });

  //  History button Section //
  clearBtn.addEventListener("click", () => {
    const historyList = historyBox.querySelector("ul");
    if (historyList) {
      historyList.innerHTML = "";
    }
  });

  // Challenges Part Copy button //
  document.body.addEventListener("click", (e) => {
    if (e.target.classList.contains("copy")) {
      const card = e.target.closest(".card");
      const serviceNumber = card.querySelector(".number").textContent;

      const tempInput = document.createElement("input");
      tempInput.value = serviceNumber;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);

      alert(`Number copied: ${serviceNumber}`);

      copyCount += 1;
      const copyText = document.querySelector(".copy-button span");
      copyText.textContent = `${copyCount} Copy`;
    }
  });
});
