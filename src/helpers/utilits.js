export const formatValue = (value) => {
  return value
    .toString()
    .replace(/\s+/g, "")
    .replace(/(\d)(?=(\d{3})+$)/g, "$1 ");
};

export const formatEnd = (index) => {
  ++index;
  if (index === 2 || index === 6 || index === 7 || index === 8) {
    return `${index}-ой`;
  } else if (index === 3) {
    return `${index}-ий`;
  } else {
    return `${index}-ый`;
  }
};
