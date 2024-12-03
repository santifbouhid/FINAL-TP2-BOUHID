class ProductsModelMem {
    constructor() {
        this.juegos = [
            { id: 1, nombre: 'TEG', categoria: 'estrategia', precio: 100, stock: 5 },
            { id: 2, nombre: 'Monopoly', categoria: 'familiar', precio: 120, stock: 5 },
            { id: 3, nombre: 'UNO', categoria: 'cartas', precio: 80, stock: 5 }
        ]
        this.ventas = [
            { idJuego: 1, cantVendida: 10 },
            { idJuego: 2, cantVendida: 3 },
            { idJuego: 3, cantVendida: 6 },
        ]
    }
    getAllGames = async () => {
        return await this.juegos;
    };

    newGame = async (game) => {
        const yaExiste = this.juegos.some(j=>j.nombre == game.nombre);
        console.log('yaExiste', yaExiste);
        if (yaExiste) {
            const indexGame = this.juegos.findIndex(j=>j.nombre == game.nombre);
            this.juegos[indexGame].stock += game.stock;
            console.log(this.juegos[indexGame].stock);
            
            const newGame = await this.juegos[indexGame]
            return {msg:`El juego '${game.nombre}' ya existe. Se añadió el stock ingresado`,
        juego:newGame}
        }else{
            const newId = this.juegos[this.juegos.length - 1].id + 1;
            game.id = newId;
            this.juegos.push(game);
            return game;
        }
        
    }
    getAllSales = async () => {
        return await this.ventas;
    };
    newSale = async (sale) => {
        const vendidoAntes = this.ventas.some(v => v.idJuego == sale.idJuego);
        if (vendidoAntes) {
            let game = this.juegos.find(g => g.id == sale.idJuego)
            if (game){
                const indexGame = this.juegos.findIndex(g => g.id == sale.idJuego);
                const cantidad = this.juegos[indexGame].stock - sale.cantVendida;
                console.log(this.juegos[indexGame].stock);
                if(cantidad >= 0){
                    this.juegos[indexGame].stock = cantidad
                    const index = this.ventas.findIndex(v => v.idJuego == sale.idJuego);
                    const newSale = { ...sale, cantVendida: sale.cantVendida + this.ventas[index].cantVendida }
                    this.ventas.splice(index, 1, newSale);
                    return newSale;
                } else{
                    return {msg:'No hay esa cantidad'}
                }
                
            }else{
                return {msg:'Id de juego invalido'}
            }
            
            
        } else{
            this.ventas.push(sale);
            return sale;
        }
        
    }

}

export default ProductsModelMem;
