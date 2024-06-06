const SeleksiNilai = function (nilaiAwal, nilaiAkhir, dataArray) {
    if (nilaiAwal > nilaiAkhir) {
        console.log("Nilai akhir harus lebih besar dari nilai awal")
        return
    }

    if (dataArray.length < 5) {
        console.log("Jumlah angka dalam dataArray harus lebih dari 5")
        return
    }

    let result = []

    for (let i = 0; i < dataArray.length; i++) {
        const num = dataArray[i]
        if (num > nilaiAwal) {
            if (num < nilaiAkhir) {
                result = [...result, num]
            }
        }
    }

    if (result.length === 0) {
        console.log("Nilai tidak ditemukan")
        return
    } else {
        for(let i = 0; i < result.length - 1; i++){
            for(let j = 0; j < result.length - i - 1; j++){
                if(result[j] > result[j + 1]){
                    let temp = result[j];
                    result[j] = result[j + 1];
                    result[j + 1] = temp;
                }
            }
        }
        console.log(result)
        return
    }
}

SeleksiNilai(5, 20, [2, 24, 4, 14, 17, 30, 8]);
SeleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8]);
SeleksiNilai(4, 17, [2, 25, 4]);
SeleksiNilai(5, 17, [2, 25, 4, 1, 30, 18]);