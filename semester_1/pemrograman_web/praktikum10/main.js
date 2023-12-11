
const lingkaran = (input) => {
    if (!input) {
        document.getElementById('luas_lingkaran').innerText = ''
        document.getElementById('keliling_lingkaran').innerText = ''
    }

    const luas = Math.PI * Math.pow(input, 2)
    const keliling = 2 * Math.PI * input

    document.getElementById('luas_lingkaran').innerText = Math.round(luas)
    document.getElementById('keliling_lingkaran').innerText = Math.round(keliling)
}

const kurs = (input) => {
    const kurs = 14650

    if (!input) {
        document.getElementById('dolar').innerText = ''
        document.getElementById('rupiah').innerText = ''
    }

    const result = input * kurs

    document.getElementById('dolar').innerText = input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    document.getElementById('rupiah').innerText = result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

const parking = (input) => {
    if (!input) {
        document.getElementById('dolar').innerText = ''
        document.getElementById('rupiah').innerText = ''
    }

    if (input <= 2 && input > 0) {
        const result = 3000

        document.getElementById('jam').innerText = input
        document.getElementById('bayar').innerText = result
    }

    if (input > 2 && input > 0) {
        const result = input * 1000 + 3000

        document.getElementById('jam').innerText = input
        document.getElementById('bayar').innerText = result
    }
}

const penjumlahan = (e) => {
    const input1 = document.getElementById('input1').value || 0
    const input2 = document.getElementById('input2').value || 0

    const result = parseInt(input1) + parseInt(input2)

    document.getElementById('hasil').innerText = result
}
