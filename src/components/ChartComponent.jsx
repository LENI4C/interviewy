import { Chart } from "react-google-charts";

const data = [
    ["Month", "Registrations"],
    ["Jan", 700],
    ["Feb", 900],
    ["Mar", 850],
    ["Apr", 400],
    ["May", 1000],
    ["Jun", 950],
    ["Jul", 700],
    ["Aug", 300],
    ["Sep", 800],
    ["Oct", 850],
    ["Nov", 950],
    ["Dec", 700],
];

const options = {
    title: "Event Registrations per month",
    chartArea: { width: "50%", height: "70%" }, // Adjust to fit like your image
    colors: ["#7c74f2"],
    hAxis: { title: "", textStyle: { fontSize: 12 } },
    vAxis: { minValue: 0, gridlines: { count: 5 } },
    bar: { groupWidth: "70%" }, // Adjust bar thickness
    legend: { position: "none" },
};

const ChartComponent = () => {
    return (
        <div style={{ width: "100%", height: "320px" }}>
            <Chart
                chartType="ColumnChart"
                data={data}
                options={options}
                width="100%"
                height="100%"
            />
        </div>
    );
};

export default ChartComponent;
