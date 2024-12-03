import ProductsService from "../services/ProductsService.js"

class ProductsController {
  constructor() {
    this.service = new ProductsService()
  }

  getAllGames = async (req, res) => {
    const games = await this.service.getAllGames()
    res.status(200).send(games);
  }

  newGame = async (req, res) => {
    const game = req.body
        if (JSON.stringify(game) === "{}") {
            res.status(400).send("Datos ingresados inválidos")
        } else {
            const newGame = await this.service.newGame(game)
            res.status(200).send(newGame)
        }
  }
  getAllSales = async (req, res) => {
    const sales = await this.service.getAllSales()
    res.status(200).send(sales);
  }

  newSale = async (req, res) => {
    const sale = req.body
        if (JSON.stringify(sale) === "{}") {
            res.status(400).send("Datos ingresados inválidos")
        } else {
            const newSale = await this.service.newSale(sale)
            res.status(200).send(newSale)
        }
  }
  getAllSales = async (req, res) => {
    const sales = await this.service.getAllSales()
    res.status(200).send(sales);
  }

  newSale = async (req, res) => {
    const sale = req.body
        if (JSON.stringify(sale) === "{}") {
            res.status(400).send("Datos ingresados inválidos")
        } else {
            const newSale = await this.service.newSale(sale)
            res.status(200).send(newSale)
        }
  }


}

export default ProductsController;