import express from "express";
import { getProducts } from '../contollers/productsControllers.js'


const router = express.Router()



router.get('/getProducts',getProducts)

export default router