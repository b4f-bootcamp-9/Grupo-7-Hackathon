const { ObjectId } = require("mongodb")
const {getMongoCollection} = require("./mongodb")
const col = "orders"
const db = "stepin"

async function findOrder(model, brand) {
  const collection = await getMongoCollection(db, col);
  return collection.findOne({ model, brand }); // Procura pelo pedido no banco
}

async function incrementOrderQuantity(model, brand) {
  const collection = await getMongoCollection(db,col);
  return collection.updateOne(
    { model, brand },
    { $inc: { quantity: 1 } }
  ); // Incrementa a quantidade
}

async function insertOrder(model, brand) {
  const collection = await getMongoCollection(db, col);
  return collection.insertOne({ model, brand, quantity: 1 }); // Insere novo pedido
}

async function FindOrders() {
  const collection = await getMongoCollection(db, col)
  const result = await collection.find({}).toArray()

  return result 
}


module.exports = { findOrder, incrementOrderQuantity, insertOrder, 
  FindOrders};