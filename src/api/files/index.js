const axios = require("axios");
const config = require("../../config");

class ApiService {
  api;
  static singleton;
  authToken;
  constructor() {
    this.api = axios.create({
      baseURL: config.serverDomain,
    });
    this.authToken = "aSuperSecretKey";
  }

  static getInstance() {
    if (this.singleton) {
      return this.singleton;
    } else {
      this.singleton = new ApiService();
      return this.singleton;
    }
  }

  withAuthHeaders() {
    return {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${this.authToken}`,
      },
    };
  }

  withHeaders(token, extraHeaders) {
    let headers = {
      ...extraHeaders,
    };
    if (token) headers["Authorization"] = `Bearer ${token}`;

    return {
      headers: headers,
    };
  }

  async getFiles() {
    const data = await this.api.get("/files", this.withAuthHeaders());
    console.log('getFiled', data)
    return data?.data?.files;
  }

  async getFile(file) {
    const data = await this.api.get(`/file/${file}`, this.withAuthHeaders());
    return data?.data
  }
}

module.exports = ApiService;
