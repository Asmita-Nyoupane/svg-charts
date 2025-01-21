import * as d3 from "d3";
import { getNestedValue } from "../lib/utility";

export const useCalculateY = (data, valueKey, height, top) => {
  return d3
    .scaleLinear()
    .domain(d3.extent(data, (d) => getNestedValue(d, valueKey)))
    .range([height, top]);
};
