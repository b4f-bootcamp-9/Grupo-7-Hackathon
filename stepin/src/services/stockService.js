import { FindBrand } from "@/data/stockData";

export async function ReadBrand(filters) {
  try {
    if (!filters || !filters.brand) {
      return await FindBrand(); // Se não houver filtro, retorna todos os modelos
    }
    return await FindBrand(filters); // Caso contrário, filtra pela marca
  } catch (error) {
    console.log("Erro no serviço ReadBrand", error);
    throw new Error("Erro ao buscar marcas.");
  }
}
