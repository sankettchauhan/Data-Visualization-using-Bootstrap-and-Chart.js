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
var chart = new Chart(ctx, {
  type: "bar",
  data: {
    datasets: [
      {
        data: [n, 0, 7],
        backgroundColor: (context) => setBackgroundColor(context),
        borderColor: (context) => setBorderColor(context),
        borderWidth: 1,
        label: "Nitrogen",
      },
      {
        data: [p],
        borderColor: (context) => setBorderColor(context),
        backgroundColor: (context) => setBackgroundColor(context),
        borderWidth: 1,
        label: "Phosphorous",
        minBarLength: 2,
      },
      {
        data: [k],
        backgroundColor: (context) => setBackgroundColor(context),
        borderColor: (context) => setBorderColor(context),
        label: "Potassium",
        borderWidth: 1,
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "Nutrients",
    },
  },
});
