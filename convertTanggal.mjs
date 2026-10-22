import moment from "moment";

function convertTanggal(inputTanggal) {
  if (!moment(inputTanggal, `DD-MM-YYYY`, true).isValid()) {
    return `Format tanggal salah`;
  } else {
    const tanggal = moment(inputTanggal, `DD-MM-YYYY`).format(`DD/MM/YYYY`);
    return tanggal;
  }
}

export default convertTanggal;
