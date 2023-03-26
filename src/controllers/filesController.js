const fApi = require("../api/files");
const fileService = fApi.getInstance();
const {fileNormalizer} = require("../helpers/normalizers")
const getFiles = async (req, res, next) => {
  try {
    const files = await fileService.getFiles();
    const promises = files?.map((fName) => fileService.getFile(fName));
    const results = await Promise.allSettled(promises);
    const data = results
      .map((result) => {
        console.log(result);
        return result.status === "fulfilled" ? result.value : null;
      })
      .filter((n) => n);
    
    return res.send(data);
  } catch (error) {}
};

module.exports = {
  getFiles,
};