import axios from "axios";
import { spawn } from "node:child_process";

export const TEST_PORT = 5352;
let proc;

const sleep = (time) => {
  // eslint-disable-next-line compat/compat
  return new Promise(resolve => setTimeout(resolve, time));
};

export async function setup() {
  console.log("start");
  proc = spawn("npm", [ "run", "app:dev", `--port=${TEST_PORT}` ]);
  await sleep(10_000);
  return axios.get(`http://localhost:${TEST_PORT}`, { timeout: 20_000 });
}

export function teardown() {
  proc.kill();
  console.log("teardown");
}
