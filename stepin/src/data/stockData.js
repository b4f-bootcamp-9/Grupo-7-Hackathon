const { ObjectId } = require("mongodb")
const {getMongoCollection} = require("./mongodb")
const col = "stock"
const db = "stepin"


async function FindBrand(query) {
    try{
        const collection = await getMongoCollection(db, col)

        return await collection.find(query).toArray()
    }catch(error){
        console.log("Erro ao buscar marcas: ", error);
        throw new Error("Erro ao buscar marcas")
        
    }

}

module.exports = {FindBrand}