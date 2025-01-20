import "./App.css";
import BarChart from "./component/Bar";
import Chart from "./component/chart";
import LineChart from "./component/line-chart";
import XAxis from "./component/x-axis";
import YAxis from "./component/y-axis";
import { BAR_MARGIN, BAR_WIDTH, LINE_CHART_WIDTH } from "./lib/constant";
import { barData } from "./lib/data";
import { highestValue } from "./lib/utility";

const valueKey = "stats.value";
const labelKey = "country.name";
// type can be line or bar
const type = "bar";

function App() {
  return (
    <>
      <div className="legend"> Chart</div>

      <Chart width={LINE_CHART_WIDTH}>
        <YAxis max={highestValue(barData, valueKey)} />
        <XAxis
          width={
            type === "bar"
              ? barData.length * (BAR_MARGIN + BAR_WIDTH)
              : LINE_CHART_WIDTH
          }
          data={barData}
          labelKey={labelKey}
          type={type}
        />
        {type === "bar" ? (
          <BarChart data={barData} valueKey={valueKey} />
        ) : (
          <LineChart data={barData} valueKey={valueKey} />
        )}
      </Chart>
    </>
  );
}

export default App;
