var ctx = document.getElementById("nutrients").getContext("2d");
let n = 3;
let p = 2;
let k = 4;
let thresholdLow = 2.5;
let thresholdMed = 3.5;
const setBackgroundColor = (context) => {
  let index = context.dataIndex;
  let value = context.dataset.data[index];
  return value < thresholdLow ? "red" : value < thresholdMed ? "green" : "blue";
};
const setBorderColor = (context) => {
  return "black";
};
Chart.defaults.scale.ticks.beginAtZero = true;
var chart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Nitrogen", "Phosphorous", "Potassium"],
    datasets: [
      {
        data: [n, p, k],
        borderColor: "black",
        borderWidth: 1,
        backgroundColor: (context) => setBackgroundColor(context),
      },
    ],
  },
  options: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "Nutrients",
      fontSize: 15,
    },
  },
});
console.log(Chart.defaults);
