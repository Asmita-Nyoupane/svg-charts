import "./App.css";
import BarChart from "./component/Bar";
import Chart from "./component/chart";
import LineChart from "./component/line-chart";
import XAxis from "./component/x-axis";
import YAxis from "./component/y-axis";
import { barData } from "./lib/data";

const valueKey = "stats.value";
const labelKey = "country.name";
// type can be line or bar
const type = "line";

function App() {
  return (
    <>
      <div className="legend"> Chart</div>

      <Chart data={barData} valueKey={valueKey} type={type} labelKey={labelKey}>
        <YAxis />
        <XAxis />
        {type === "bar" ? <BarChart /> : <LineChart />}
      </Chart>
    </>
  );
}

export default App;
