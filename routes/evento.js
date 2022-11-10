const {Router} = require('express')
const router = Router();
const evento = require('../evento');


router.get('/',(req,res)=>res.send(JSON.stringify(evento)))
router.post('/',(req,res)=>res.send('POST' + JSON.stringify(evento)))
router.put('/',(req,res)=>res.send('PUT' + JSON.stringify(evento)))
router.delete('/',(req,res)=>res.send('DELETE'+ JSON.stringify(evento)))

module.exports = router