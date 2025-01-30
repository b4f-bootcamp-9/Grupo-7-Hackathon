import { addOrUpdateOrder, ReadOrders } from "../../../services/ordersService";
import { NextResponse } from "next/server";


export async function POST(req) {
  const { model, brand } = await req.json(); 

  if (!model || !brand) {
    return new NextResponse(
      JSON.stringify({ message: "Modelo e marca são obrigatórios" }),
      { status: 400 }
    );
  }

  try {
    const result = await addOrUpdateOrder(model, brand); 
    return NextResponse.json({ response: result }, { status: 200 });
  } catch (error) {
    console.error("Erro ao processar o pedido:", error);
    return new NextResponse(
      JSON.stringify({ message: "Erro no servidor" }),
      { status: 500 }
    );
  }
}

export async function GET() {
    try {
      const orders = await ReadOrders(); 
      return NextResponse.json(orders, { status: 200 }); 
    } catch (error) {
      console.error("Erro ao buscar os pedidos:", error);
      return new NextResponse(
        JSON.stringify({ message: "Erro ao buscar os pedidos" }),
        { status: 500 }
      );
    }
  }
