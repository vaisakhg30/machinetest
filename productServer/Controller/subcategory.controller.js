const express=require('express')
const mongoose=require('mongoose')

const server=express();
const subcategoryModel=require('../Model/subcategory.model')

exports.savecategory=((req,res)=>{
    try {
        subcategoryModel.create(req.body).then((data)=>{
            res.send("data saved")
        })
    } catch (error) {
        res.status(400).send(error)
    }
})

exports.findsubcategory=((req,res)=>{
    try {
        subcategoryModel.find().then((data)=>{
            res.send(data)
        })
    } catch (error) {
        res.status(400).send(error)
        
    }
})