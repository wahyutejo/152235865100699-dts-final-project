import axios from "axios";

const instance = axios.create({
  baseURL: "https://newsapi.org/v2",
  params: { country: "id", apiKey: "12ad438e516348f491f6ae54ebe1aa4b" },
});

export default instance;
