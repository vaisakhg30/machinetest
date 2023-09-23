const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/product')

const productSchema=new mongoose.Schema({
    id:{
        required:true,
        type:String
    },
    product:{
        required:true,
        type:String
    }

})
module.exports=new mongoose.model("producttable",productSchema)
