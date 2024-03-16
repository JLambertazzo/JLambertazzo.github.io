const query = (q) =>
  fetch(
    `https://api.openweathermap.org/data/2.5/weather/?appid=c20f1f400b486d5d180a0287d75cafb4&q=${q}`
  );
const optionsFromResponse = (res) =>
  res.json().then(RainMachine.toRainMachineOptions);

document.addEventListener("DOMContentLoaded", () => {
  query("Toronto")
    .then(optionsFromResponse)
    .then((options) => {
      const rm = new RainMachine(".rain-container", options);
      document.querySelector("#weather-loading").classList.add("hidden");
      document.querySelector("#weather-loaded").classList.remove("hidden");
      const colour = rm.getSkyColour();
      // set all relevant colours
      document.querySelectorAll(".sky-colour").forEach((el) => {
        el.style.color = colour;
        console.log(el);
      });
    });
  query("Winnipeg")
    .then(optionsFromResponse)
    .then((options) => {
      const rm2 = new RainMachine(".rain-container-2", options);
    });
  const myList = new ListExtender();
  myList.appendTo("#list-container");
  myList.setPlaceholder("Type Here!");
  myList.setInputType("text");
});

function search(e) {
  const val = document.querySelector("#search").value;
  query(val)
    .then(optionsFromResponse)
    .then((options) => {
      const rm2 = new RainMachine(".rain-container-2", options);
    });
}
