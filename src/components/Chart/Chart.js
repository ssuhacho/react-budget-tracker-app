import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
    //transform the dataPoint obj to the number.
    //returns the array of numbers (of 12 values).
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);

    //max() needs a list of arguments instead of an array.
    //so use spread operator to pull out all the elements and add that as standalone arguments.
    const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
