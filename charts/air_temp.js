var ctx = document.getElementById("air-temp").getContext("2d");
var value = 68;
var chart = new Chart(ctx, {
  type: "pie",
  data: {
    datasets: [
      {
        data: [value],
        backgroundColor: ["red"],
        borderColor: "transparent",
      },
    ],
  },
  options: {
    circumference: value * 0.01 * 2 * Math.PI,
    title: {
      display: true,
      text: "Air Temperature " + value + "%",
      fontSize: 15,
    },
    tooltips: {
      enabled: false,
    },
  },
});
