function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
    if (nilaiAwal >= nilaiAkhir) {
        console.log("Nilai akhir harus lebih besar dari nilai awal")
        return;
    }

    if (dataArray.length <= 5) {
        console.log("Jumlah angka dalam dataArray harus lebih dari 5")
        return;
    }
    const seleksiNilai = dataArray.filter(function (item) {
        return item > nilaiAwal && item < nilaiAkhir;
    });

    if (seleksiNilai.length === 0) {
        console.log("Nilai tidak ditemukan");
    } else {
        seleksiNilai.sort(function (a, b) {
            return a - b;
        });
        console.log(seleksiNilai)
    }
}

seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8])
seleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8])
seleksiNilai(4, 17, [2, 25, 4])
seleksiNilai(5, 17, [2, 25, 4, 1, 30, 18])