import React, { useState } from "react";
import { Dimensions, View } from "react-native";
import { Svg, G, Rect, Text, Line } from "react-native-svg";
import * as d3 from "d3";

export function FeedsChart({ feedData }) {
  //
  // States and Variables
  const [tooltipDisplay, setTooltipDisplay] = useState(false);
  const proteinPerIngredient = feedData.map((record) => {
    return { value: record.crude_protein_CP, name: record.name };
  });

  const values = Object.keys(proteinPerIngredient).map(function (key) {
    return proteinPerIngredient[key].value;
  });

  //
  // Graph Dimensions
  const GRAPH_BAR_WIDTH = 10;
  const GRAPH_MARGIN = 20;
  const colors = {
    axis: "black",
    bars: "#344E41",
  };
  const SVGHeight = 140;
  const SVGWidth = Dimensions.get("screen").width;
  const graphHeight = SVGHeight - 2 * GRAPH_MARGIN;
  const graphWidth = SVGWidth - 2 * GRAPH_MARGIN;
  //
  // X scale point
  const xDomain = proteinPerIngredient.map((item) => item.name);
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
          <Text fontSize="8" y={y(middleValue * -1 - 1)} fill="black">
            {middleValue}
          </Text>
          <Text fontSize="8" y={y(topValue * -1 - 1)} fill="black">
            {topValue}
          </Text>

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
          {proteinPerIngredient.map((item, index) => (
            <G key={index}>
              {tooltipDisplay ? (
                <Text
                  key={proteinPerIngredient[item]}
                  y={y(item.value) * -1}
                  x={x(item.name) - GRAPH_BAR_WIDTH / 2 - 5}
                  fontSize="8"
                  fill={"black"}
                >
                  {item.value} %
                </Text>
              ) : null}
              <Rect
                onPressIn={() => setTooltipDisplay(true)}
                onPressOut={() => setTooltipDisplay(false)}
                key={proteinPerIngredient[item]}
                x={x(item.name) - GRAPH_BAR_WIDTH / 2}
                y={y(item.value) * -1}
                rx={1}
                width={GRAPH_BAR_WIDTH}
                height={y(item.value)}
                fill={tooltipDisplay ? "#D46C4E" : colors.bars}
              />
            </G>
          ))}
          {/* labels */}
          {proteinPerIngredient.map((item, index) => (
            <Text
              key={proteinPerIngredient[item]}
              fontSize="8"
              x={x(item.name)}
              y="10"
              fill={"black"}
              textAnchor="middle"
            >
              {item.name}
            </Text>
          ))}
        </G>
      </Svg>
    );
  };

  return (
    <View>
      {(proteinPerIngredient, topValue, middleValue, maxValue)
        ? displayGraph()
        : null}
    </View>
  );
}
