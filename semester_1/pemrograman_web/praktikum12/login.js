
function login() {
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value

    if (username !== 'ahmad2017' && password !== 'integrity') {
        return alert('gagal login!')
    }

    document.querySelector('body').innerHTML = '<h1>login berhasil!</h1>'
}
