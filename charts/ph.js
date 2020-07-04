var ctx = document.getElementById("ph").getContext("2d");
var value = 6;
let x1 = chart.chartArea.left;
let x2 = chart.chartArea.right;
var gradient = ctx.createLinearGradient(x1, 0, x2, 0);
gradient.addColorStop(0, "#ff0000");
gradient.addColorStop(0.2, "#ff0000");
gradient.addColorStop(0.5, "#44ff21");
gradient.addColorStop(0.8, "#455bfc");
gradient.addColorStop(1, "#455bfc");
var chart = new Chart(ctx, {
  type: "doughnut",
  data: {
    datasets: [
      {
        data: [value, 14 - value],
        backgroundColor: gradient,
        borderColor: "white",
      },
    ],
  },
  options: {
    circumference: Math.PI,
    title: {
      display: true,
      text: "PH " + value,
      fontSize: 15,
    },
    tooltips: {
      enabled: false,
    },
    rotation: Math.PI,
  },
});
