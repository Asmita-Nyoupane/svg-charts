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
