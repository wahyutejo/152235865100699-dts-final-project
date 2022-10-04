import axios from "axios";

const headlineApi = axios.create({
  baseURL: "https://gnews.io/api/v4",
  params: { topic: "breaking-news", lang: "en", token: "0dcd7f431e9522047ef1cbd7432dc772" },
});
const businessApi = axios.create({
  baseURL: "https://gnews.io/api/v4",
  params: { topic: "business", lang: "en", token: "0dcd7f431e9522047ef1cbd7432dc772" },
});
const entertainmentApi = axios.create({
  baseURL: "https://gnews.io/api/v4",
  params: { topic: "entertainment", lang: "en", token: "0dcd7f431e9522047ef1cbd7432dc772" },
});
const healthApi = axios.create({
  baseURL: "https://gnews.io/api/v4",
  params: { topic: "health", lang: "en", token: "0dcd7f431e9522047ef1cbd7432dc772" },
});
const worldApi = axios.create({
  baseURL: "https://gnews.io/api/v4",
  params: { topic: "world", lang: "en", token: "0dcd7f431e9522047ef1cbd7432dc772" },
});
const nationApi = axios.create({
  baseURL: "https://gnews.io/api/v4",
  params: { topic: "nation", lang: "en", token: "0dcd7f431e9522047ef1cbd7432dc772" },
});
const technologyApi = axios.create({
  baseURL: "https://gnews.io/api/v4",
  params: { topic: "technology", lang: "en", token: "0dcd7f431e9522047ef1cbd7432dc772" },
});
const sportsApi = axios.create({
  baseURL: "https://gnews.io/api/v4",
  params: { topic: "sports", lang: "en", token: "0dcd7f431e9522047ef1cbd7432dc772" },
});
const scienceApi = axios.create({
  baseURL: "https://gnews.io/api/v4",
  params: { topic: "science", lang: "en", token: "0dcd7f431e9522047ef1cbd7432dc772" },
});

export { headlineApi, businessApi, entertainmentApi, healthApi, worldApi, nationApi, technologyApi, sportsApi, scienceApi };
