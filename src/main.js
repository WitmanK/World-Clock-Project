function updatetime() {
  //Amsterdam
  let amsterdamElement = document.querySelector("#amsterdam");
  let amsterdamDateElement = amsterdamElement.querySelector(".date");
  let amsterdamTimeElement = amsterdamElement.querySelector(".time");

  let amsterdamZone = moment().tz("Europe/Amsterdam");
  amsterdamDateElement.innerHTML = amsterdamZone.format("LL");
  amsterdamTimeElement.innerHTML = amsterdamZone.format("h:m:sa");

  //Tokyo
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");

  let tokyoZone = moment().tz("Asia/Tokyo");
  tokyoDateElement.innerHTML = tokyoZone.format("LL");
  tokyoTimeElement.innerHTML = tokyoZone.format("h:m:sa");

  //Warsaw
  let warsawElement = document.querySelector("#warsaw");
  let warsawDateElement = warsawElement.querySelector(".date");
  let warsawTimeElement = warsawElement.querySelector(".time");

  let warsawZone = moment().tz("Europe/Warsaw");
  warsawDateElement.innerHTML = warsawZone.format("LL");
  warsawTimeElement.innerHTML = warsawZone.format("h:m:sa");
}

function updateZoneDrop(event) {
  let cityTZ = event.target.value;
  if (cityTZ === "current") {
    cityTZ = moment.tz.guess();
  }
  let cityName = cityTZ.replace(`_`, "").split("/")[1];
  let cityTime = moment().tz(cityTZ);

  let cityElement = document.querySelector("#cities");
  cityElement.innerHTML = `
    <div class= "city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("LL")}</div>
      </div>
      <div class="time">${cityTime.format("h:m:sa")}</div>
    </div>
    <br/>
    <a href="index.html" class="back-button">Back</a>`;
}
updatetime();
setInterval(updatetime, 1000);

let dropdownCitiesElement = document.querySelector("#dropdown");
dropdownCitiesElement.addEventListener("change", updateZoneDrop);
