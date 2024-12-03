import ProductsController from "../controllers/ProductsController.js"
import express from "express"

class ProductsRoutes {
    constructor() {
        this.router = express.Router()
        this.controller = new ProductsController()
    }

    start() {
        this.router.get("/prod/getAllGames", this.controller.getAllGames);
        this.router.post("/prod/newGame", this.controller.newGame);
        this.router.get("/sales/getAllSales", this.controller.getAllSales);
        this.router.post("/sales/newSale", this.controller.newSale);

        return this.router
    }
}

export default ProductsRoutes