import "../sass/styles.scss";
import * as d3 from "d3";
import data from "../data/un-migration/Table 1-Table 1.csv";

const square = d3.selectAll("rect");
square.style("fill", "orange");
console.log("Webpack Boilerplate");

console.log(data);
