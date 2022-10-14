const apyDayOptions = [7, 30, 60, 90, 365];
const DEFAULT_SELECTED_APY = 30;

export const isDevelopment = process.env.NODE_ENV === "development";
export const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  apyDayOptions,
  DEFAULT_SELECTED_APY,
};
