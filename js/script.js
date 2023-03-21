// Define a function that creates a chart using data passed as an argument.
function createChart(data) {
	// Extract an array of labels from the data array using the `map` method.
	const labels = data.map(function (item) {
		return item.day;
	});
	// Extract an array of values from the data array using the `map` method.
	const values = data.map(function (item) {
		return item.amount;
	});
	// Get a reference to the canvas element.
	const ctx = document.getElementById("myChart").getContext("2d");
	// Create a new chart using the Chart.js library.
	const myChart = new Chart(ctx, {
		// Set the chart type to bar chart.
		type: "bar",
		// Set the chart data using the extracted labels and values.
		data: {
			labels: labels,
			datasets: [
				{
					borderRadius: 6,
					label: "Expenses",
					data: values,
					backgroundColor: "hsl(10, 79%, 65%)",
					borderWidth: 1,
					hoverBackgroundColor: "hsl(186, 34%, 60%)",
				},
			],
		},
		// Configure the chart options, such as the scales, tooltip, and legend.
		options: {
			scales: {
				display: false,
			},
			plugins: {
				tooltip: {
					backgroundColor: "hsl(25, 47%, 15%)",
					yAlign: "bottom",
					caretSize: 0,
					titleFontSize: 16,
				},
				legend: {
					display: false,
				},
				scales: {
					yAxes: [
						{
							display: false,
						},
					],
				},
			},
		},
	});
}

// Fetch data from a JSON file and use it to create a chart.
fetch("data.json")
	.then((response) => response.json())
	.then((data) => {
		createChart(data);
	});
