 import ProductsModelMem from "../models/DAO/ProductsModelMem.js"

class Factory{
    static get(persistence){
        switch (persistence) {
            case "MEM":
                console.log("Persistiendo en la memoria del Servidor.")
                return new ProductsModelMem();
            default:
                console.log("Persistiendo en la memoria por default.")
                return new ProductsModelMem();
        }
    }
}

export default Factory