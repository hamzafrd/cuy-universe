const nama = "Hamza Firdaus";
let umur = 20;

// biodata pada index
let biodata = document.getElementById('biodata');
// console.log(biodata)

// setiap function ada return biasanya.
function generateGenerasi() {
    let generasi;

    if (umur == 10) {
        generasi = " Generasi Bocil";
    } else {
        console.log(`${nama} Usia Saya ${umur} Tahun`);
        generasi = "Generasi Remaja" ;
    };
// innerHTML
    return biodata.innerHTML = generasi;
}

generateGenerasi();