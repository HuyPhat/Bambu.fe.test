const axios = require("axios");
const APIKEY = "EVMMG6GK2F222BVD"; // Alpha Vantage.

export const TIME_SERIES = {
  TIME_SERIES_DAILY: "TIME_SERIES_DAILY"
};

const baseurl = "https://www.alphavantage.co/query";

const getStockTimeSeries = (timeSeries, symbol) => {
  // https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=demo
  const endpoint = `?function=${timeSeries}&symbol=${symbol}&apikey=${APIKEY}`;
  const url = `${baseurl}${endpoint}`;
  return axios.get(url);
};

const api = {
  getStockTimeSeries
};

export default api;
