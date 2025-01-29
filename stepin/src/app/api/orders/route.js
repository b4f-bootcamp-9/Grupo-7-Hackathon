// src/app/api/orders/route.js

import { addOrUpdateOrder, ReadOrders } from "../../../services/ordersService";
import { NextResponse } from "next/server";

// Exporte o método POST explicitamente
export async function POST(req) {
  const { model, brand } = await req.json(); // Parse da requisição JSON

  if (!model || !brand) {
    return new NextResponse(
      JSON.stringify({ message: "Modelo e marca são obrigatórios" }),
      { status: 400 }
    );
  }

  try {
    const result = await addOrUpdateOrder(model, brand); // Chama o serviço
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
      const orders = await ReadOrders(); // Use o serviço para buscar os pedidos
      return NextResponse.json(orders, { status: 200 }); // Retorna os pedidos como resposta JSON
    } catch (error) {
      console.error("Erro ao buscar os pedidos:", error);
      return new NextResponse(
        JSON.stringify({ message: "Erro ao buscar os pedidos" }),
        { status: 500 }
      );
    }
  }
