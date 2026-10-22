function convertTanggalManual(inputTanggal) {
  const bagianTanggal = inputTanggal.split(`-`);

  if (bagianTanggal.length !== 3) {
    return `Format tanggal salah`;
  }

  const hari = Number(bagianTanggal[0]);
  const bulan = Number(bagianTanggal[1]);
  const tahun = Number(bagianTanggal[2]);

  const tanggal = new Date(tahun, bulan - 1, hari);

  if ( tanggal.getDate() !== hari || tanggal.getMonth() !== bulan - 1 || tanggal.getFullYear() !== tahun || bagianTanggal[0].length !== 2 || bagianTanggal[1].length !== 2 || bagianTanggal[2].length !== 4) {
    return `Format tanggal salah`;
  }

  return `${bagianTanggal[0]}/${bagianTanggal[1]}/${bagianTanggal[2]}`;
}


export default convertTanggalManual;
