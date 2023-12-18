
function kurs() {
    const valas = parseInt(document.getElementById('valas').value)
    const nilai = parseInt(document.getElementById('nilai').value)

    document.getElementById('result').value = `Rp. ${(valas * nilai).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
}
