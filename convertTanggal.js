const date = require("moment");
function convertTanggal(inputTanggal) {
  if (!date(inputTanggal, "DD-MM-YYYY", true).isValid()) {
    return "Format tanggal salah";
  } else {
    const tanggal = date(inputTanggal, "DD-MM-YYYY").format("DD/MM/YYYY");
    return tanggal;
  }
}

module.exports = convertTanggal;