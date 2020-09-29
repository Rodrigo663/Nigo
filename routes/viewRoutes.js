const express = require('express');
const viewController =require(`../controllers/viewController`);




const router = express.Router();




router.get('/',  viewController.getOverview);
router.get('/motos',  viewController.getMotos);
router.get('/bikes',  viewController.getBikes);
router.get('/sobre',  viewController.getAbout);


module.exports = router;