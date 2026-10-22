import {createInterface} from "node:readline";
import convertTanggalManual from "./convertTanggalManual.mjs";
import convertTanggal from "./convertTanggal.mjs";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`Masukkan tanggal (DD-MM-YYYY): `, (inputTanggal) => {
  const hasilMoment = convertTanggal(inputTanggal);
  const hasilManual = convertTanggalManual(inputTanggal);
  console.log(`Hasil dengan Moment:`, hasilMoment);
  console.log(`Hasil Manual:`, hasilManual);
  rl.close();
});
