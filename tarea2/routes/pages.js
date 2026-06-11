const express= require('express');
const router= express.Router();
const { showIndex, showContacto, handleContacto } = require('../controllers/pagesController')

// obtenemos las funciones de pagesControllers
// aca si le decimos si es get o post
router.get('/', showIndex) 
router.get('/contacto', showContacto)
router.post('/contacto', handleContacto)
    
module.exports = router;