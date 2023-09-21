import { defineVitestConfig } from "nuxt-vitest/config";

export default defineVitestConfig({
  test: {
    include: [ "tests/unit/**/*.ts" ],
    reporters: [ process.env.CI ? "json" : "dot" ],
    outputFile: ".artifacts/vitest.json"
  }
});
