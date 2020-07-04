var ctx = document.getElementById("air-hum").getContext("2d");
var value = 57;
var chart = new Chart(ctx, {
  type: "pie",
  data: {
    datasets: [
      {
        data: [value],
        backgroundColor: ["blue"],
        borderColor: "transparent",
      },
    ],
  },
  options: {
    circumference: value * 0.01 * 2 * Math.PI,
    title: {
      display: true,
      text: "Air Humidity " + value + "%",
      fontSize: 15,
    },
    tooltips: {
      enabled: false,
    },
  },
});
