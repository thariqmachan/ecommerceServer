const mongoose=require('mongoose')


const adminsSchema=new mongoose.Schema({
    uname:String,
    psw:String
})
const admins=new mongoose.model("admins",adminsSchema)

const productSchema=new mongoose.Schema({
    pname:String,
    description:String,
    price:Number,
    image:String,
    rating:Number,
    count:Number
})
const products=new mongoose.model("products",productSchema)


const usersSchema=new mongoose.Schema({
    email:String,
    psw:String
})
const users=new mongoose.model("users",usersSchema)


const cartSchema=new mongoose.Schema({
    userId:String,
    pId:String,
    pname:String,
    description:String,
    price:Number,
    image:String,
    rating:Number,
    quantity:Number,
    totalPrice:Number
})
const carts=new mongoose.model("carts",cartSchema)


const wishlistSchema=new mongoose.Schema({
    userId:String,
    pId:String,
    pname:String,
    description:String,
    price:Number,
    image:String,
    rating:Number,
})
const wishlists=new mongoose.model("wishlists",wishlistSchema)



module.exports={admins,products,users,carts,wishlists}