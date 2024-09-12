function updatetime() {
  //London
  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");

  let londonZone = moment().tz("Europe/London");
  londonDateElement.innerHTML = londonZone.format("LL");
  londonTimeElement.innerHTML = londonZone.format("h:m:sa");

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
  let cityTime = moment().tz(cityTZ);

  let cityElement = document.querySelector("#cities");
  cityElement.innerHTML = `
    <div class= "city"id="london">
      <div>
        <h2>${cityTZ}</h2>
        <div class="date">${cityTime.format("LL")}</div>
      </div>
      <div class="time">${cityTime.format("h:m:sa")}</div>
    </div>`;
}
updatetime();
setInterval(updatetime, 1000);

let dropdownCitiesElement = document.querySelector("#dropdown");
dropdownCitiesElement.addEventListener("change", updateZoneDrop);
