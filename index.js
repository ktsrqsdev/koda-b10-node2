const {createInterface} = require("node:readline");

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Masukkan tanggal (DD-MM-YYYY): ", (inputTanggal) => {
  const convertTanggalManual = require("./convertTanggalManual");
  const convertTanggal = require("./convertTanggal");
  const hasilMoment = convertTanggal(inputTanggal);
  const hasilManual = convertTanggalManual(inputTanggal);
  console.log("Hasil dengan Moment:", hasilMoment);
  console.log("Hasil Manual:", hasilManual);
  rl.close();
});
