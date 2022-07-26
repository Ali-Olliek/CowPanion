import React, { PureComponent } from "react";
import { Svg, G, Rect, Text, Line } from "react-native-svg";
import * as d3 from "d3";

export function BarChart({ data }) {
  const values = Object.keys(data).map(function (key) {
    return data[key].value;
  });

  const GRAPH_BAR_WIDTH = 5;
  const GRAPH_MARGIN = 20;
  const colors = {
    axis: "black",
    bars: "#344E41",
  };
  const SVGHeight = 150;
  const SVGWidth = 300;
  const graphHeight = SVGHeight - 2 * GRAPH_MARGIN;
  const graphWidth = SVGWidth - 2 * GRAPH_MARGIN;

  // X scale point
  const xDomain = data.map((item) => item.label);
  const xRange = [0, graphWidth];
  const x = d3.scalePoint().domain(xDomain).range(xRange).padding(1);

  // Y scale linear
  const maxValue = d3.max(values);
  const topValue = Math.ceil(maxValue);
  const yDomain = [0, d3.max(data, (d) => d.value)];
  const yRange = [0, graphHeight];
  const y = d3.scaleLinear().domain(yDomain).range(yRange);
  //
  // Mid Value
  const middleValue = maxValue / 2;

  return (
    <Svg width={SVGWidth} height={SVGHeight}>
      {/* translate for 'graphHeight' on y axis */}
      <G y={graphHeight + GRAPH_MARGIN}>
        {/* top axis */}
        <Line
          x1="0"
          y1={y(topValue) * -1}
          x2={graphWidth}
          y2={y(topValue) * -1}
          stroke={colors.axis}
          strokeDasharray={[5, 5]}
          strokeWidth="0.5"
        />

        {/* middle axis */}
        <Line
          x1="0"
          y1={y(middleValue) * -1}
          x2={graphWidth}
          y2={y(middleValue) * -1}
          stroke={colors.axis}
          strokeDasharray={[3, 3]}
          strokeWidth="0.5"
        />

        {/* bottom axis */}
        <Line
          x1="0"
          y1="2"
          x2={graphWidth}
          y2="2"
          stroke={colors.axis}
          strokeWidth="0.5"
        />

        {/* bottom axis */}
        <Line
          x1="0"
          y1="2"
          x2={graphWidth}
          y2="2"
          stroke={colors.axis}
          strokeWidth="0.5"
        />

        {/* bars */}
        {data.map((item) => (
          <Rect
            key={"bar" + item.label}
            x={x(item.label) - GRAPH_BAR_WIDTH / 2}
            y={y(item.value) * -1}
            rx={1}
            width={GRAPH_BAR_WIDTH}
            height={y(item.value)}
            fill={colors.bars}
          />
        ))}

        {/* labels */}
        {data.map((item) => (
          <Text
            key={"label" + item.label}
            fontSize="8"
            x={x(item.label)}
            y="10"
            fill={"black"}
            textAnchor="middle"
          >
            {item.label}
          </Text>
        ))}
      </G>
    </Svg>
  );
}
