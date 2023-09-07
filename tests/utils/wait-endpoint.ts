import nuxtConfig from "@/nuxt.config";

import axios from "axios";


const TOTAL_ATTEMPTS = 3;
const PORT = nuxtConfig.devServer?.port ?? 4000;
const TIMEOUT = 20_000;
const endpoint = `http://localhost:${PORT}`;

export default async function () {
  let attempt = 0;

  while (attempt < TOTAL_ATTEMPTS) {
    try {
      await axios.get(endpoint, {
        timeout: TIMEOUT,
      });
      break;
    } catch {
      attempt += 1;
      console.info(`Can't connect to server [Attempt: ${attempt}]`);
    }
  }

  if (attempt >= TOTAL_ATTEMPTS) {
    throw new Error(`Can't connect to the server with endpoint ${endpoint}`);
  }

  const request = axios.create({
    baseURL: endpoint
  });

  return {
    request
  };
}
