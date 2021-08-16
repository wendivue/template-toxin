const getDeclension = (value, titles) => {
  const newValue = Math.abs(value) % 100;
  const number = value % 10;

  if (newValue > 10 && newValue < 20) return `${value} ${titles[2]}`;
  if (number > 1 && number < 5) return `${value} ${titles[1]}`;
  if (number === 1) return `${value} ${titles[0]}`;
  if (value === 0) return '';

  return `${value} ${titles[2]}`;
};

export { getDeclension };
