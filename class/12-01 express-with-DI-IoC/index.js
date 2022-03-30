import express from "express"

import { ProductController } from "./mvc/controllers/product.controller.js"
import { CouponController } from "./mvc/controllers/coupon.controller.js"
import { ProductService } from "./mvc/controllers/services/product.service.js"
import { CashService } from "./mvc/controllers/services/cash.service.js"
import { PointService } from "./mvc/controllers/services/point.service.js"



const app = express()

const productService= new ProductService()
const cashService = new CashService()
const pointService=new PointService()

// 상품 API
const productController = new ProductController(cashService,productService)
app.post("/products/buy", productController.buyProduct)// 상품 구매하기
app.post("/products/refund", productController.refundProduct)// 상품 환불하기

// 쿠폰 API
const couponController = new CouponController(cashService)
app.post("/coupons/buy", couponController.buyCoupon)

app.listen(3000)