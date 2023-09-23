const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/product')

const subcategorySchema=new mongoose.Schema({
    name:{
        required:true,
        type:String
    },
    type:{
        required:true,
        type:String
    },
    price:{
        required:true,
        type:String
    }

})
module.exports=new mongoose.model("subcategoryttable",subcategorySchema)
