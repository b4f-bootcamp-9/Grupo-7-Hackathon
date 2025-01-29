"use client"
import CardBack from "@/components/CardBack";
import Login from "@/components/Login";
import Search from "@/components/Search";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
    const [models, setModels] = useState([]);
    const params = useSearchParams();
    const searchValue = params.get("searchValue");
    const brand = params.get("brand");
    const [search, setSearch] = useState([]);
    const [erro, setErro] = useState(null);

    // Dados do fornecedor
    const router = useRouter();  

    useEffect(() => {
      const fetchData = async () => {
  
        try {
          const response = await fetch(
            `/api/search?brand=${brand}&searchValue=${searchValue}`
          );
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const data = await response.json();
          let filtrado = data.response;
  
          if (!searchValue) {
            filtrado = filtrado.filter((e) => e.brand === brand);
          } else {
            filtrado = filtrado.filter(
              (e) => 
                e.model.toLocaleLowerCase() ===
                  searchValue.toLocaleLowerCase() && e.brand === brand
            );
          }
  
          if (filtrado.length === 0) {
            setErro("Guardamos sua sugestão e tentaremos providenciar..");
          } else {
            setErro(null);
          }
          setSearch(filtrado);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
    }, [brand, searchValue]);


  
    return (
      <div >
        <Search/>
      <div  style={{ height: "100vh" }}>
    
        <div>
          {/* Renderiza mensagem de erro se existir */}
          {erro && (
            <p style={{ color: "red", fontWeight: "bold", textAlign: "center" }}>
              {erro}
            </p>
          )}
          {/* Renderiza a lista de fornecedores */}
          <div >
        {search.length > 0 ? (
          search.map((model, index) => (
            <ul key={index}>
              <CardBack 
                model={model.model}
                brand={model.brand}
                imageSrc={model.imagem} // Supondo que você tenha uma URL de imagem ou um caminho
              />
              {/* <p>Modelo: {model.model}</p>
              <p>Marca: {model.brand}</p>
              <p>Quantidade Vendida: {model.quantity_sold}</p> */}
            </ul>
          ))
        ) : (
          <></>
        )}
      </div>
        </div>
      </div>
    </div>
  );
}