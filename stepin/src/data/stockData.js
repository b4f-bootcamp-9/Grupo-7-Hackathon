const { ObjectId } = require("mongodb")
const {getMongoCollection} = require("./mongodb")
const col = "stock"
const db = "stepin"


async function FindBrand(filters ={}) {
    try{
        const collection = await getMongoCollection(db, col)

        const query = filters.brand ? { brand: filters.brand} : {}

        return await collection.find(query).toArray()
    }catch(error){
        console.log("Erro ao buscar fornecedores: ", error);
        throw new Error("Erro ao buscar fornecedores")
        
    }

}

module.exports = {FindBrand}