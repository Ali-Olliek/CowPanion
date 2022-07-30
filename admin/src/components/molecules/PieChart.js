import React, { useEffect } from "react";
import * as d3 from "d3";
import { text } from "d3";

function PieChart({ users }) {
  const years = [];
  for (let user in users) {
    let age = new Date(users[user].DOB).getFullYear();
    if (age >= 1990 && age < 2000) {
      years.push(90);
    } else if (age >= 2000 && age < 2010) {
      years.push(2000);
    } else if (age >= 1980 && age < 1990) {
      years.push(80);
    } else {
      years.push(70);
    }
  }

  let eighties = 0;
  let nineties = 0;
  let twothousands = 0;
  let seventies = 0;

  for (let Agegroup in years) {
    if (years[Agegroup] == 90) {
      nineties++;
    } else if (years[Agegroup] == 2000) {
      twothousands++;
    } else if (years[Agegroup] == 80) {
      eighties++;
    } else {
      seventies++;
    }
  }

  const outerRadius = 200;
  const innerRadius = 100;
  const data = [
    { label: "90s", value: nineties },
    { label: "2000s", value: twothousands },
    { label: "80s", value: eighties },
    { label: "70s", value: seventies },
  ];

  const margin = {
    top: 50,
    right: 50,
    bottom: -50,
    left: -50,
  };

  const width = 2 * outerRadius + margin.left + margin.right;
  const height = 2 * outerRadius + margin.top + margin.bottom;

  const colorScale = d3
    .scaleOrdinal()
    .domain(data)
    .range(["#2f3e46", "#354f52", "#52796f", "#84a98c", "#cad2c5"]);

  useEffect(() => {
    drawChart();
  }, [data]);

  function drawChart() {
    // Remove the old svg
    d3.select("#pie-container").select("svg").remove();

    // Create new svg
    const svg = d3
      .select("#pie-container")
      .append("svg")
      .attr("width", 400)
      .attr("height", 400)
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`)
      .on("mouseover", (e, d) => {
        tooldiv
          .style("visibility", "visible")
          .text(e.target.__data__.data.label);
      })
      .on("mousemove", (e, d) => {
        tooldiv
          .style("top", e.pageY - 50 + "px")
          .style("left", e.pageX - 50 + "px");
      })
      .on("mouseout", () => {
        tooldiv.style("visibility", "hidden");
      });

    const arcGenerator = d3
      .arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius);

    const pieGenerator = d3
      .pie()
      .padAngle(0)
      .value((d) => d.value);

    const arc = svg.selectAll().data(pieGenerator(data)).enter();

    // Append arcs
    arc
      .append("path")
      .attr("d", arcGenerator)
      .style("fill", (_, i) => colorScale(i))
      .style("stroke", "#ffffff")
      .style("stroke-width", 0);

    // Append text labels
    arc
      .append("text")
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .text((d) => d.data.label)
      .style("fill", (_, i) => colorScale(data.length - i))
      .attr("transform", (d) => {
        const [x, y] = arcGenerator.centroid(d);
        return `translate(${x}, ${y})`;
      });

    const tooldiv = d3
      .select("#pie-container")
      .append("div")
      .style("visibility", "hidden")
      .style("position", "absolute")
      .style("background-color", "#D46C4E")
      .style("border-radius", 5 + "px")
      .style("padding", 10 + "px");
  }

  return <div id="pie-container" />;
}

export default PieChart;
