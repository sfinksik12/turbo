import { test, expect } from "@playwright/test";
import { AppAPI } from "../framework/base/base_api";


let json_data;
let app_api;


test.beforeAll(async ({ request }) => {
  app_api = new AppAPI(request);
  json_data = await app_api.Torbo_Bit.get_upload_server_details();
});


test("upload file", async () => {
    await app_api.Torbo_Bit.upload_file(json_data.url);
});
