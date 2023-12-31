document.getElementById("getIpButton").addEventListener("click", function() {
  fetch("https://ipinfo.io/json")
    .then(response => response.json())
    .then(data => {
      displayResult(data);
    })
    .catch(error => {
      console.error("IP bilgisi alınamadı:", error);
      displayResult({error: true});
    });
});

function displayResult(data) {
  const resultList = document.getElementById("resultList");
  resultList.innerHTML = "";

  if (data.error) {
    resultList.innerHTML = "<li style='color: darkgreen;'>IP bilgisi alınamadı. Lütfen tekrar deneyin.</li>";
    return;
  }


  const ipDetails = `
    <li style='color: darkgreen;'><strong>IP Adresi:</strong> ${data.ip}</li>
    <li style='color: darkgreen;'><strong>Lokasyon:</strong> ${data.city}, ${data.region}, ${data.country}</li>
    <li style='color: darkgreen;'><strong>Tarih:</strong> ${new Date().toLocaleString()}</li>
    <li style='color: darkgreen;'><strong>Tarayıcı:</strong> ${navigator.userAgent}</li>
  `;

  resultList.innerHTML = ipDetails;
}

