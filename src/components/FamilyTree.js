import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const FamilyTree = ({ data}) => {
  const svgRef = useRef(null);
  useEffect(() => {
    const width=1500;
    const height=6000;
    // Create the D3 tree layout
    const treeLayout = d3.tree().size([height, width - 250]);

    // Create a hierarchy from your data
    const root = d3.hierarchy(data);

    // Generate the tree nodes and links
    const treeData = treeLayout(root);

    // Create an SVG element
    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      //   .call(
      //     d3.zoom().on("zoom", (e) => {
      //       svg.attr("transform", e.transform);
      //     })
      //   )
      .append("g")
      .attr("transform", "translate(120,0)");

    // Add the links (branches)
    svg
      .selectAll(".link")
      .data(treeData.links())
      .enter()
      .append("path")
      .attr("class", "link")
      .attr(
        "d",
        d3
          .linkHorizontal()
          .x((d) => d.y)
          .y((d) => d.x)
      )
      .attr("stroke", (d) => "#8c8c8c") // Color for branches
      .attr("fill", "none");

    // Add the nodes (family members)
    const nodes = svg
      .selectAll(".node")
      .data(treeData.descendants())
      .enter()
      .append("g")
      .attr("class", "node")
      .attr("transform", (d) => `translate(${d.y},${d.x})`);

    // Add circles to represent each node
    nodes
      .append("circle")
      .attr("r", 8)
      .attr("fill", (d) => {
        // Assign color based on depth or other property
        return d.depth === 0
          ? "#FF5733"
          : d.depth % 2 === 0
          ? "#3498db"
          : "#2ecc71"; // Adjust as per family hierarchy
      });

    // Add names to each node
    nodes
      .append("text")
      .attr("dy", 3)
      .attr("x", (d) => (d.children ? -12 : 12))
      .style("text-anchor", (d) => (d.children ? "end" : "start"))
      .text((d) => d.data.name)
      .attr("fill", "#FFF"); // Color for names
  }, [data]);

  return <svg ref={svgRef}></svg>;
};

export default FamilyTree;
