import { ReadBrand } from "@/services/stockService";
import { NextResponse } from "next/server";


export async function GET(req) {
    try {
      const brand = url.searchParams.get("brand")
      const searchValue = url.searchParams.get("searchValue")
     
  
      console.log("Marca:", brand)

      const query = {}
      if (brand) {
        query.brand = brand
      }
      if (searchValue) {
        query.model = searchValue
      }
      
      const results = await QueryStock(query);
      
      if(searchValue && results.length === 0) {
        saveSearchInterest()
        addOrUpdateOrder()
      }
    
  
      return NextResponse.json({ response: results }, { status: 200 });
    } catch (error) {
      console.error("Erro na API GET:", error);
      return NextResponse.json({ error: "Erro ao buscar marca." }, { status: 500 });
    }
  }