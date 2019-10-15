import * as httpMethods from "./common/httpMethods";

class statusApi {
  static getEndpointStatus() {
    return httpMethods.get(`/path/to/url/endpoint`);
  }
}

export default statusApi;
