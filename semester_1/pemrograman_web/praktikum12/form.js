
document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault()

    const formData = new FormData(form)

    document.getElementById('nama').innerText = formData.get('nama')
    document.getElementById('email').innerText = formData.get('email')
    document.getElementById('jam').innerText = formData.get('jam')
    document.getElementById('tujuan').innerText = formData.get('tujuan')
    document.getElementById('tiket').innerText = formData.get('tiket')
})
