export const formatMoney = price =>
  (Math.round(price * 100) / 100).toLocaleString();

export const percentValue = (a, b) => Math.round(a / (b * 100));
