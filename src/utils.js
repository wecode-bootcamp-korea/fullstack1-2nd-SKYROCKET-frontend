export const formatMoney = price =>
  (Math.round(price * 100) / 100).toLocaleString();
