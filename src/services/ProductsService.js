import Factory from "../models/Factory.js";
import { validateGame } from "./validate/schemaProducts.js";
import { validateSale } from "./validate/schemaSales.js";

class ProductsService{

    constructor(){
        this.model = Factory.get('MEM')
    }

    getAllGames = async () => {
        const games = await this.model.getAllGames()
        return games;
    }
    
    newGame = async (game) => {
        if(validateGame(game)){
            const newGame = await this.model.newGame(game)        
            return newGame
        } else{
            return { errorMsg: "Los datos ingresados no son válidos"};
        }
    }
    getAllSales = async () => {
        const sales = await this.model.getAllSales()
        return sales;
    }
    
    newSale = async (sale) => {
        if(validateSale(sale)){
            const newSale = await this.model.newSale(sale)        
            return newSale
        } else{
            return { errorMsg: "Los datos ingresados no son válidos"};
        }
    }
   
}

export default ProductsService