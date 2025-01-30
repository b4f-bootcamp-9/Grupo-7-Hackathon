import { FindBrand } from "@/data/stockData";

export async function ReadBrand(filters) {
  try {
    return await FindBrand(filters); 
  } catch (error) {
    console.log("Erro no serviço ReadBrand", error);
    throw new Error("Erro ao buscar marcas.");
  }
}
