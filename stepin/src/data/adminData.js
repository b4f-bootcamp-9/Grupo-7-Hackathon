const {getMongoCollection} = require("./mongodb")
const col = "admin"
const db = "stepin"

async function FindOneAdmin(data) {
    try {
        const collection = await getMongoCollection(db, col);
        const result = await collection.findOne({email: data.email, senha: data.senha});
    
        if (!result) {
          console.log("Nenhum fornecedor encontrado com as credenciais fornecidas.");
        }
    
        return result;
      } catch (error) {
        console.error("Erro ao buscar fornecedor:", error);
        throw new Error("Erro ao buscar fornecedor.");
      }
}


module.exports =  {FindOneAdmin}