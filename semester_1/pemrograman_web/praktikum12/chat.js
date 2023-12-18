
function chat() {
    const p = document.createElement('p')
    p.appendChild(document.createTextNode(document.getElementById('text').value))

    document.getElementById('chat').appendChild(p)

    document.getElementById('text').value = ''
}
