document.addEventListener("DOMContentLoaded", function () {
  // Fetch the webhook data from the server
  fetch("/webhook-data")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Display the webhook data
      var dataDisplay = document.getElementById("dataDisplay");
      dataDisplay.innerText = JSON.stringify(data, null, 2);
    })
    .catch(function (error) {
      console.error("Error fetching webhook data:", error);
    });
});
