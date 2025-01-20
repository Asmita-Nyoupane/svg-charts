// Utility function to access nested properties
export const getNestedValue = (obj, path) => {
  return path
    .split(".")
    .reduce((acc, key) => (acc && acc[key] ? acc[key] : null), obj);
};

// Flatten nested arrays if required
export const flattenData = (data, valueKey) => {
  return data.flatMap((item) => {
    const nestedArray = getNestedValue(item, valueKey);
    if (Array.isArray(nestedArray)) {
      return nestedArray.map((value) => ({
        ...item,
        stats: { value },
      }));
    }
    return item;
  });
};

//  function genrate raneg

export const generateTicks = (maxValue, numTicks) => {
  const step = Math.ceil(maxValue / numTicks);
  return Array.from({ length: numTicks + 1 }, (_, i) => i * step);
};
// function to calculate highest value
export const highestValue = (data, valueKey) => {
  return data.reduce((acc, curr) => {
    const value = getNestedValue(curr, valueKey);
    return value > acc ? value : acc;
  }, 0);
};
//function to calculate  y position
export const calculateYPosition = (value, max, chartHeight, padding = 50) => {
  return chartHeight - (value / max) * (chartHeight - padding);
};
