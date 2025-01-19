import "./App.css";
import BarChart from "./component/Bar";
import Chart from "./component/chart";
import LineChart from "./component/line-chart";
import { BAR_MARGIN, BAR_WIDTH, LINE_CHART_WIDTH } from "./lib/constant";
const barData = [
  { country: { name: "Afghanistan" }, stats: { value: 42240 } },
  { country: { name: "Bangladesh" }, stats: { value: 172954 } },
  { country: { name: "Bhutan" }, stats: { value: 787 } },
  { country: { name: "India" }, stats: { value: 1428628 } },
  { country: { name: "Maldives" }, stats: { value: 521 } },
  { country: { name: "Nepal" }, stats: { value: 30897 } },
  { country: { name: "Pakistan" }, stats: { value: 240486 } },
  { country: { name: "Sri Lanka" }, stats: { value: 21894 } },
];

function App() {
  const barChartWidth = barData.length * (BAR_MARGIN + BAR_WIDTH);
  return (
    <>
      <div className="legend">Line Chart</div>

      <Chart data={barData} valueKey={"stats.value"} width={LINE_CHART_WIDTH}>
        {(heighestValue, ticks) => (
          <LineChart
            data={barData}
            valueKey="stats.value"
            labelKey="country.name"
            heighestValue={heighestValue}
            ticks={ticks}
          />
          // <BarChart
          //   data={barData}
          //   valueKey="stats.value"
          //   labelKey="country.name"
          //   heighestValue={heighestValue}
          //   ticks={ticks}
          // />
        )}
      </Chart>
    </>
  );
}

export default App;
