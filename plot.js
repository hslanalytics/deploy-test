d3.json("data/data.json").then((data) => {
  //  Create the Traces
  var trace1 = {
    x: data.organ,
    y: data.survival.map(val => Math.sqrt(val)),
    type: "box",
    name: "Cancer Survival",
    boxpoints: "all"
  };

  // Create the data array for the plot
  var data = [trace1];

  // Define the plot layout
  var layout = {
    title: "Square Root of Cancer Survival by Organ",
    xaxis: { title: "Organ" },
    yaxis: { title: "Square Root of Survival" }
  };

  // Plot the chart to a div tag with id "plot"
  Plotly.newPlot("plot", data, layout);
});


















// TO EXECUTE SERVER
// 1. Open Terminal in VS Code
// 2. Navigate to folder of index.html
// 3. Enter: python -m http.server
// 4. View data by navigating to: localhost:8000/data/data.json
// 5. View index by navigating to: localhost:8000