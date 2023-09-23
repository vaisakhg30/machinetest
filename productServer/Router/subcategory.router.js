const express=require('express')
const app=express();
const subcategoryController=require('../Controller/subcategory.controller')
const router=express.Router()

router.post("/create",subcategoryController.savecategory)
router.get("/find",subcategoryController.findsubcategory)

module.exports=router
