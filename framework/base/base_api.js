import { TorboBit } from '../api_pages/turbobit';


class AppAPI {
    constructor(request) {
        this.request = request;

        this.Torbo_Bit = new TorboBit(request);
      }
}

module.exports = {AppAPI}