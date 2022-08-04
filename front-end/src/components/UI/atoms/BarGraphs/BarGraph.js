import React, { PureComponent, useState } from "react";
import { Dimensions, View } from "react-native";
import { Svg, G, Rect, Text, Line } from "react-native-svg";
import * as d3 from "d3";
import { LogBox } from "react-native";
LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

export function BarChart({ milkData }) {
  //
  // States and Variables
  const [tooltipDisplay, setTooltipDisplay] = useState(false);
  const quantityPerDay = milkData.map((record) => {
    return { value: record.fields.quantity, day: record.fields.day };
  });

  const values = Object.keys(quantityPerDay).map(function (key) {
    return quantityPerDay[key].value;
  });

  //
  // Graph Dimensions
  const GRAPH_BAR_WIDTH = 25;
  const GRAPH_MARGIN = 20;
  const colors = {
    axis: "black",
    bars: "#91BCA0",
  };
  const SVGHeight = 120;
  const SVGWidth = Dimensions.get("screen").width;
  const graphHeight = SVGHeight - 2 * GRAPH_MARGIN;
  const graphWidth = SVGWidth - 2 * GRAPH_MARGIN;
  //
  // X scale point
  const xDomain = quantityPerDay.map((item) => item.day);
  const xRange = [0, graphWidth];
  const x = d3.scalePoint().domain(xDomain).range(xRange).padding(1);
  //
  // Y scale linear
  const maxValue = d3.max(values);
  const topValue = Math.ceil(maxValue);
  const yDomain = [0, topValue];
  const yRange = [0, graphHeight];
  const y = d3.scaleLinear().domain(yDomain).range(yRange);
  //
  // Mid Value
  const middleValue = maxValue / 2;

  const displayGraph = () => {
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
            strokeDasharray={[3, 3]}
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
          {/* bars & Tooltip */}
          {quantityPerDay.map((item, index) => (
            <G key={index}>
              {tooltipDisplay ? (
                <Text
                  key={index}
                  y={y(item.value) * -1 - 10}
                  x={x(item.day) - GRAPH_BAR_WIDTH / 2 - 5}
                  fontSize="8"
                  fill={"#2E302F"}
                  fontWeight={"300"}
                >
                  {item.value} cm3
                </Text>
              ) : null}
              <Rect
                key={index}
                onPressIn={() => setTooltipDisplay(true)}
                onPressOut={() => setTooltipDisplay(false)}
                x={x(item.day) - GRAPH_BAR_WIDTH / 2}
                y={y(item.value) * -1}
                rx={1}
                width={GRAPH_BAR_WIDTH}
                height={y(item.value)}
                fill={tooltipDisplay ? "#F17754" : colors.bars}
              />
            </G>
          ))}
          {/* labels */}
          {quantityPerDay.map((item, index) => (
            <Text
              key={index}
              fontSize="8"
              x={x(item.day)}
              y="10"
              fill={"#2E302F"}
              fontWeight={"800"}
              textAnchor="middle"
            >
              {item.day}
            </Text>
          ))}
        </G>
      </Svg>
    );
  };

  return (
    <View>
      {(quantityPerDay, topValue, middleValue, maxValue)
        ? displayGraph()
        : null}
    </View>
  );
}
