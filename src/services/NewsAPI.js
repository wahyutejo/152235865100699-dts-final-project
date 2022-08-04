import axios from "axios";

const headlineApi = axios.create({
  baseURL: "https://newsapi.org/v2",
  params: { country: "id", apiKey: "12ad438e516348f491f6ae54ebe1aa4b" },
});
const businessApi = axios.create({
  baseURL: "https://newsapi.org/v2",
  params: { country: "id", apiKey: "12ad438e516348f491f6ae54ebe1aa4b", category: "business" },
});
const entertainmentApi = axios.create({
  baseURL: "https://newsapi.org/v2",
  params: { country: "id", apiKey: "12ad438e516348f491f6ae54ebe1aa4b", category: "entertainment" },
});
const healthApi = axios.create({
  baseURL: "https://newsapi.org/v2",
  params: { country: "id", apiKey: "12ad438e516348f491f6ae54ebe1aa4b", category: "health" },
});

export { headlineApi, businessApi, entertainmentApi, healthApi };
