import { defineVitestConfig } from "nuxt-vitest/config";

export default defineVitestConfig({
  test: {
    include: [ "tests/unit/**/*.ts" ],
    globalSetup: "tests/unit/global-setup.mjs",
  }
});
