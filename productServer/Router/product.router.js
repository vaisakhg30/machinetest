const express=require('express')
const app=express();
const productController=require('../Controller/product.controller')
const router=express.Router()

router.post("/create",productController.saveproduct)
router.get("/find",productController.findproduct)

module.exports=router
