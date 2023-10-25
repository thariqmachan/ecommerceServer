const express=require('express')
const { adminLogin,addProduct, getProducts, editProduct, deleteProduct, getSingleProduct, userSignUp, userLogin, addToCart, cartCount, cartItems, totalPrice, quantityIncrement, quantityDecrement, removeCart, addWishlist, getUsers, deleteUser, wishlistItems ,removeWishlist} = require('../controllers/logic')


const router=new express.Router()

router.post('/admin/login',adminLogin)

router.post('/admin/add-product',addProduct)

router.get('/product-access',getProducts)

router.put('/product-update/:id',editProduct)

router.delete('/product-delete/:id',deleteProduct)

router.get('/one-product/:id',getSingleProduct)

router.post('/user-register',userSignUp)

router.post('/user-login',userLogin)

router.post('/addtocart',addToCart)

router.get('/cart-count/:userId',cartCount)

router.get('/cart-items/:userId',cartItems)

router.get(`/quantity-update-inc/:_id`,quantityIncrement)

router.get(`/quantity-update-dec/:_id`,quantityDecrement)

router.get(`/price-total/:userId`,totalPrice)

router.delete('/remove-cart/:_id',removeCart)

router.post('/addtowishlist',addWishlist)

router.get("/user-access",getUsers)

router.delete("/user-delete:/_id",deleteUser)

router.get('/wishlist-items/:userId',wishlistItems)

router.delete('/remove-wishlist/:_id',removeWishlist)



module.exports=router