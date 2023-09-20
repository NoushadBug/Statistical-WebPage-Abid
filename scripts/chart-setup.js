const colors = {
    purple: {
        default: "rgba(149, 76, 233, 1)",
        half: "rgba(149, 76, 233, 0.5)",
        quarter: "rgba(149, 76, 233, 0.25)",
        zero: "rgba(149, 76, 233, 0)"
    },
    indigo: {
        default: "rgba(80, 102, 120, 1)",
        quarter: "rgba(80, 102, 120, 0.25)"
    }
};

const cost = [885, 500, 891,510, 922, 747,981, 749, 756,
    562,723, 730, 758, 587, 991, 596, 604,810, 861, 
    939, 636, 705, 709, 646,  942, 981, 993, 695, 785, 797]
const labels =
    ["Aug 18, 2023",
        "Aug 22, 2023",
        "Aug 26, 2023",
        "Sep 03, 2023",
        "Sep 09, 2023",
    ]
// Convert date strings to Date objects and format them
const dateObjects = labels.map((dateString) => ({
    x: new Date(dateString + " 00:00"),
}));

// Combine date objects with cost values
const data = dateObjects.map((dateObject, index) => ({
    x: dateObject.x,
    y: cost[index],
}));


const ctx = document.getElementById("chart-by-date-canvas").getContext("2d");
// ctx.canvas.width = window.innerWidth-(window.innerWidth/220.2);
// ctx.canvas.height = window.innerWidth-(window.innerWidth/320.2);
ctx.canvas.height = 200;
ctx.canvas.width = window.innerWidth-(window.innerWidth/220.2);

gradient = ctx.createLinearGradient(0, 25, 0, 300);
gradient.addColorStop(0, colors.purple.half);
gradient.addColorStop(0.35, colors.purple.quarter);
gradient.addColorStop(1, colors.purple.zero);

const options = {
    type: "line",
    borderSkipped: false,
    plugins: {
        legend: {
            labels: {
                // This more specific font property overrides the global property
                font: {
                    size: 350,
                    family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                }
            }
        },
    },

    data: {
        labels: labels,
        xAxisID: "date-axis",
        lineTension: 0,
        datasets: [
            {
                fill: true,
                backgroundColor: gradient,
                pointBackgroundColor: colors.purple.default,
                borderColor: colors.purple.default,
                data: data,
                lineTension: 0.2,
                borderWidth: 2,
                pointRadius: 3
            }
        ]
    },
    options: {
        layout: {
            padding: 10
        },
        responsive: false,
        legend: {
            display: false
        },

        scales: {
            xAxes: [
                {
                    type: "time",
                    id: "date-axis",
                    gridLines: {
                        display: false,
                        color: "rgba(0, 0, 0, 0)",
                    },
                    ticks: {
                        source: "data",
                        padding: 10,
                        autoSkip: false,
                    },

                }
            ],
            yAxes: [
                {
                    gridLines: {
                        color: "rgba(0, 0, 0, 0)",
                    },
                    position: 'right',
                    scaleLabel: {
                        display: true,
                        padding: 10,
                    },
                    ticks: {
                        stepSize: 500,
                        beginAtZero: false,
                        max: 1500,
                        min: 500,
                        padding: 10
                    }
                }
            ]
        }
    },

};

window.onload = function () {
    window.myLine = new Chart(ctx, options);
};
