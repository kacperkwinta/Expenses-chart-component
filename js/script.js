function createChart(data) {
	var labels = data.map(function (item) {
		return item.day;
	});
	var values = data.map(function (item) {
		return item.amount;
	});
	var ctx = document.getElementById("myChart").getContext("2d");
	var myChart = new Chart(ctx, {
		type: "bar",
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

fetch("data.json")
	.then((response) => response.json())
	.then((data) => {
		createChart(data);
	});
