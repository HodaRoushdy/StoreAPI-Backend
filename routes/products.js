const express = require('express')
const router = express.Router()

const {getAllProducts} = require('../controllers/products')
const {getAllStaticProducts} = require('../controllers/products')


router.route('/').get(getAllProducts)
router.route('/static').get(getAllStaticProducts)

module.exports = router