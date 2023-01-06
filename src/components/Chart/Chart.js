import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {

    
    const valarr = props.datapoints.map((data) => data.value);
    const maxval = Math.max(...valarr);

    

  return (
    <div className="chart">
      {props.datapoints.map((datapoint) => (
        <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          label={datapoint.label}
          maxValue={maxval}
        ></ChartBar>
      ))}
    </div>
  );
};

export default Chart;
