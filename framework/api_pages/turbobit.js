import fs from 'fs'
import path from "path";


class TorboBit {
    constructor(request) {
        this.request = request;
        this.base_url = "https://turbobit.net/";
        this.api_key = "9Y8+Se5L09V2YaEI/OY1gRCFYZvS/HGoEnrMm3la24fnNi9NtvjvcZc/D5rJ1qOd"

        this.HTTP_upload_url = "https://turbobit.net/v001/upload/http/server"
        this.search_file_url = "https://turbobit.net/v001/files/search?"
        this.create_folder_url = "https://filemanager.costaction.com/api/folder/store" 
      }

    async get_upload_server_details() {
        const response = await this.request.post(this.HTTP_upload_url, {
            headers: {
                'x-api-key': this.api_key
            }
        });
        return await response.json();
    }

    async get_file_by_search_word(search_word, page) {
        const response = await this.request.get(this.search_file_url + `name=${search_word}&page=${page}`, {
            headers: {
                'x-api-key': this.api_key
            }
          });
        return await response.json();
    }

    async create_folder() {
        const response = await this.request.post(this.create_folder_url, {
            headers: {
                'x-api-key': this.api_key
            },
            data:{
                apptype: "fd1",
                name: "Папка1",
                parent_id: 0,
                can_be_copied: true
            }
        });
        console.log(response);
    }

    async upload_file(upload_file_url) {

        const file = path.resolve("qa.jpg");
        const image = fs.readFileSync(file);

        const response = await this.request.post(upload_file_url, {
            headers: {
                'x-api-key': this.api_key,
                'Accept': "*/*",
                'ContentType': "multipart/form-data",
              },
            multipart: {
                apptype: 'fd1',
                user_id: '79A23E6265AE99CF81E44F621129BC6D',
                folder_id: '0',
                Filedata: {
                  name: file,
                  mimeType: "image/jpg",
                  buffer: image,
                }
              },
          });
        console.log(await response.json())
    }
}

module.exports = {TorboBit}