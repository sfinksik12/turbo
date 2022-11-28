import { test, expect } from "@playwright/test";
import { AppAPI } from "../framework/base/base_api";


let json_data;


test.beforeAll(async ({ request }) => {
  const app_api = new AppAPI(request);
  json_data = await app_api.Torbo_Bit.get_upload_server_details();
});


test.describe("Check response body", () => {
  test("Response has current apptype", async () => {
    expect(json_data.params['apptype']).toEqual("fd1");
  });

  test("Response has current result", async () => {
    expect(json_data.result).toEqual(true);
  });
});


