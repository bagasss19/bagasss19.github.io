function jumlah() {
    let angsuran = document.getElementById("totalAngsuran").value;
    let tenor = document.getElementById("tenorAngsuran").value;
    let bunga = document.getElementById("bungaAngsuran").value;
    
    let cicilanBunga = angsuran * bunga /100 / tenor
    let cicilanPokok = angsuran  / tenor
    let total = cicilanBunga + cicilanPokok

    document.getElementById("cicilanPokok").innerHTML = cicilanPokok
    document.getElementById("cicilanBunga").innerHTML = cicilanBunga
    document.getElementById("total").innerHTML = total
}

function hasil() {
    let investasi = document.getElementById("totalInvestasi").value;
    let durasi = document.getElementById("jangkaWaktu").value;
    let imbalBalik = document.getElementById("imbalHasil").value;


    let imbalBalik2 = investasi *  (Math.pow(1 + imbalBalik, durasi) - 1)
    let totalInvestasi = investasi + imbalBalik2

    document.getElementById("investasiAwal").innerHTML = investasi
    document.getElementById("hasilInvestasi").innerHTML = imbalBalik2
    document.getElementById("totalInvestasi").innerHTML = totalInvestasi
}