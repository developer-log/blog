import { TEST_PORT } from "@test/unit/global-setup.mjs";
import axios from "axios";
import { describe, expect, test } from "vitest";

describe("/api/og", () => {
  const request = axios.create({
    baseURL: `http://127.0.0.1:${TEST_PORT}`
  });
  test("Success request", async () => {
    const response = await request.get("/api/og", {
      params: {
        title: "1",
        description: "1",
      }
    });

    expect(response.status).toBe(200);
    expect(response.headers["content-type"]).toBe("image/png");
  });

  test("Invalid request (without title)", async () => {
    await request.get("/api/og", {
      params: {
        description: "1",
      }
    })
      .then((response) => {
        console.error(response);
        throw new Error("Request is accepted, but it shouldn't");
      })
      .catch((error) => {
        expect(error?.response?.status).toBe(400);
      });
  });


  test("Invalid request (without description)", async () => {
    await request.get("/api/og", {
      params: {
        title: "1"
      }
    })
      .then((response) => {
        console.error(response);
        throw new Error("Request is accepted, but it shouldn't");
      })
      .catch((error) => {
        expect(error?.response?.status).toBe(400);
      });
  });
});
