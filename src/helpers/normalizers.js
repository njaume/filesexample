const { regexHexa32 } = require("../constants");

const fileNormalizer = (file = "") => {
  const lines = getFileLines(file);
  if (!lines || lines.length < 2) return null;
  const response = {
    file: "",
    lines: [],
  };

  for (let i = 1; i < lines.length; i++) {
    const fileColumns = lines[i].split(",");
    const l = {
      text: fileColumns[1],
      number: fileColumns[2],
      hex: fileColumns[3],
    };
    if (fileColumns.length === 4 && isHexa32(l.hex) && isNumber(l.number)) {
      response.file = fileColumns[0];
      response.lines.push(l);
    }
  }
  return response?.lines?.length ? response : null;
};

const getFileLines = (file) => file.split("\n");
const isHexa32 = (text) => {
  return regexHexa32.test(text);
};

const isNumber = (text) => {
  return Number(text);
};

module.exports = {
  fileNormalizer,
};
