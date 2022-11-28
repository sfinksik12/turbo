import { test, expect } from "@playwright/test";
import { AppAPI } from "../framework/base/base_api";


let app_api;
let json_data;


test.beforeAll(async ({ request }) => {
  app_api = new AppAPI(request);
});


test.describe("Сheck file search", () => {
  test("Full match string", async () => {
    json_data = await app_api.Torbo_Bit.get_file_by_search_word("файл восемь.jpg", 1);
    expect(json_data.results[0].name).toEqual("файл восемь.jpg");
  });

  test("Not valid file name", async () => {
    json_data = await app_api.Torbo_Bit.get_file_by_search_word("не то имя файла", 1);
    expect(json_data.results).toEqual([]);
  });
});