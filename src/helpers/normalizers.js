const fileNormalizer = (file = "") => {
  const fArray = file.split(",");
  if (!fArray || fArray.length % 4 !== 0) return null;
  //return fArray
  const response = {
    file: fArray[0],
    lines: [],
  };
  
  for (let i = 4; i < fArray.length; i += 4) {
    const l = {
      text: fArray[i + 1],
      number: fArray[i + 2],
      hex: fArray[i + 3],
    };
    response.lines.push(l);
  }
  return response;
};

module.exports = {
  fileNormalizer,
};
