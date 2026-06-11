const express = require('express');

const router = express.Router();

router.get('/test', (req, res) => {
    res.send('test endpoint works')
})


module.exports = router;

//index > app > rutas