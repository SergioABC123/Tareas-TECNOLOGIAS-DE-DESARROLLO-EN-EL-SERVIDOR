const path= require('path');
const fetch = require('node-fetch');

function showIndex(req, res) {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html')) // agregamos los .. para salir de controllers y entrar a views
}

function showContacto(req, res) {
    res.sendFile(path.join(__dirname, '..', 'views', 'contacto.html'))
}
//web3forms
async function handleContacto(req, res) {
    const { nombre, correo, mensaje } = req.body

    const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            access_key: 'tu-clave',
            name: nombre,
            email: correo,
            message: mensaje
        })
    })

    const data = await response.json()
    console.log(data)

    res.sendFile(path.join(__dirname, '..', 'views', 'confirmacion.html'))
}

module.exports= {
    showIndex,
    showContacto,
    handleContacto
}