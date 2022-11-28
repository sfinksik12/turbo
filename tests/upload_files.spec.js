import { test, expect } from "@playwright/test";
import { AppAPI } from "../framework/base/base_api";
import uploading_files from '../framework/data/uploading_files';


let json_data;
let app_api;


test.beforeAll(async ({ request }) => {
  app_api = new AppAPI(request);
  json_data = await app_api.Torbo_Bit.get_upload_server_details();
});


uploading_files.forEach(data => {
  test(`Upload file: ${data.file_name} ${data.file_extension}`, async () => {   
    await app_api.Torbo_Bit.upload_file(json_data.url, data.apptype, data.folder_id, data.file_name, data.file_extension);
    expect(true).toEqual(json_data.result);
  })
})