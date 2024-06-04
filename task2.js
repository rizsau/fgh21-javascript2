const name = [
    'Abigai', 'Alexandra', 'Alison',
    'Aamanda', 'Angela', 'Bella', 'Carol', 'Caroline', 'Carolyn',
    'Deirdre', 'Diana', 'Elizabeth', 'Ella', 'Olivia', 'Penelope'
];

function searchName(substring, limit, callback) {
    searchName = name.filter(function (name) {
        return name.toLowerCase().includes(substring.toLowerCase());
    });
    searchName = searchName.slice(0, limit);
    callback(searchName)
}
function callback(searchName) {
    if (searchName.length === 0) {
        console.log("Nama tidak ditemukan");
    } else {
        console.log(searchName)
    }
}
searchName("an", 3, callback)