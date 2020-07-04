var ctx = document.getElementById("moisture").getContext("2d");
var value = 87;
var chart = new Chart(ctx, {
  type: "pie",
  data: {
    datasets: [
      {
        data: [value],
        backgroundColor: ["yellow"],
        borderColor: "transparent",
      },
    ],
  },
  options: {
    circumference: value * 0.01 * 2 * Math.PI,
    title: {
      display: true,
      text: "Moisture " + value + "%",
      fontSize: 15,
    },
    tooltips: {
      enabled: false,
    },
  },
});
