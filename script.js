document.addEventListener("DOMContentLoaded", function () {
  // Fetch the latest webhook data
  fetchLatestWebhookData();
  // Fetch the latest webhook data every 5 seconds
  setInterval(fetchLatestWebhookData, 5000);
});

function fetchLatestWebhookData() {
  const url = "https://webhook-trendspider.netlify.app/webhook-data";
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      return response.json();
    })
    .then(function (data) {
      displayWebhookData(data);
    })
    .catch(function (error) {
      console.error("Error fetching webhook data:", error);
    });
}

function displayWebhookData(data) {
  var dataDisplay = document.getElementById("dataDisplay");
  dataDisplay.innerText = JSON.stringify(data, null, 2);
}
