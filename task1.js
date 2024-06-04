// 10 Method bawaan Javascript

// 1. Push, digunakan untuk menambah satu atau lebih elemen baru di akhir dari sebuah array.
// syntax: array.push(item1, item2, item3)
// Contoh:
const warna = ["Merah", "Kuning", "Hijau"]
warna.push("Biru")
console.log(warna) // output = ['Merah', 'Kuning', 'Hijau', 'Biru']

// 2. Pop, kebalikan dari push, untuk menghapus elemen terakhir dari sebuah array (tidak perlu argumen).
// syntax: array.pop()
// Contoh:
const warna2 = ["Merah", "Kuning", "Hijau"]
warna2.pop()
console.log(warna2) // output = ["Merah", "Kuning"]

// 3. Unshift, digunakan untuk menambah elemen baru di awal sebuah array.
// syntax: array.unshift(item1, item2)
// Contoh:
const warna3 = ["Merah", "Kuning", "Hijau"]
warna3.unshift("Putih", "Abu-abu")
console.log(warna3) // output = ["Putih", "Abu-abu", "Merah", "Kuning", "Hijau"]

// 4. Shift, kebalikan unshift, digunakan untuk menghapus elemen pertama dari sebuah array.
// syntax: array.shift()
// Contoh:
const warna4 = ["Merah", "Kuning", "Hijau"]
warna4.shift()
console.log(warna4) // output = ["Kuning", "Hijau"]

// 5. Concat, digunakan untuk menggabungkan 2 atau lebih array.
// syntax: array1.concat(array2, array3)
// Contoh:
const warna5 = ["Merah", "Kuning", "Hijau"]
const warna6 = ["Putih", "Abu-abu"]
const warna7 = ["Biru", "Ungu"]
const gabungan = warna5.concat(warna6, warna7)
console.log(gabungan) // output = ["Merah", "Kuning", "Hijau", "Putih", "Abu-abu", "Biru", "Ungu"]

// 6. Join, digunakan untuk menggabungkan elemen dalam array menjadi sebuah string.
// syntax: array.join("")
// Contoh:
const angka = [1, 2, 3, 4, 5]
console.log(angka.join("-")) // output = "1-2-3-4-5"

// 7. Reverse, digunakan untuk membalikkan urutan dari isi (item/value) dalam array.
// syntax: array.reverse()
// Contoh:
const angka2 = [1, 2, 3, 4, 5]
angka2.reverse()
console.log(angka2) // output = [5, 4, 3, 2, 1]

// 8. Filter, digunakan untuk melakukan filter data dengan kondisi tertentu pada setiap elemen dari array.
// syntax: arrayFilter = array.filter(item => ketentuan)
// Contoh:
const angka3 = [4, 5, 6, 7, 8, 9, 10]
const angka3Filter = angka3.filter(item => item % 5 == 0) // ketentuan: angka habis dibagi 5
console.log(angka3Filter) // output = [5, 10]

// 9. Includes, digunakan untuk mengecek apakah pada elemen array memenuhi suatu kondisi atau tidak (output = true/false).
// syntax: array.includes(ketentuan)
// Contoh:
const angka4 = [1, 2, 3, 4, 5]
const terdapat6 = angka4.includes(6) // mengecek apakah array angka4 terdapat 6
console.log(terdapat6) // output = false

// 10. String length, digunakan untuk menghitung jumlah karakter dari sebuah string.
// syntax: "string".length
// Contoh:
const panjangKata = "Hello Fazztrack!".length;
console.log(panjangKata) // output = 16