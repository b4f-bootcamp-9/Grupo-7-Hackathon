const { findOrder, incrementOrderQuantity, insertOrder, FindOrders } = require("../data/ordersData");

export async function addOrUpdateOrder(model, brand) {
  try {
    const existingOrder = await findOrder(model, brand); // Busca na camada de dados

    if (existingOrder) {
      await incrementOrderQuantity(model, brand); // Incrementa a quantidade
      return { message: "Quantidade incrementada", success: true };
    } else {
      await insertOrder(model, brand); // Adiciona um novo pedido
      return { message: "Pedido adicionado", success: true };
    }
  } catch (error) {
    console.error("Erro no serviço de pedidos:", error);
    throw new Error("Não foi possível processar o pedido.");
  }
}

export async function ReadOrders() {

  return await FindOrders()
  
}


