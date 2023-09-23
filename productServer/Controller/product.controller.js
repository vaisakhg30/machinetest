const express=require('express')
const mongoose=require('mongoose')

const server=express();
const productModel=require('../Model/product.model')

exports.saveproduct=((req,res)=>{
    try {
        productModel.create(req.body).then((data)=>{
            res.send("data saved")
        })
    } catch (error) {
        res.status(400).send(error)
    }
})

exports.findproduct=((req,res)=>{
    try {
        productModel.find().then((data)=>{
            res.send(data)
        })
    } catch (error) {
        res.status(400).send(error)
        
    }
})