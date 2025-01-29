import { ReadBrand } from "@/services/stockService";
import { NextResponse } from "next/server";


export async function GET(req) {
    try {
      const url = new URL(req.url);
      const brand = url.searchParams.get("brand")
     
  
      console.log("Marca:", brand)

      const filters = brand ? {brand} : {}
  
      const brands = await ReadBrand(filters);
  
      return NextResponse.json({ response: brands }, { status: 200 });
    } catch (error) {
      console.error("Erro na API GET:", error);
      return NextResponse.json({ error: "Erro ao buscar marca." }, { status: 500 });
    }
  }