"use client"
import CardBack from "@/components/CardBack";
import Search from "@/components/Search";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "../page.module.css"

export default function Page() {
    const [models, setModels] = useState([]);
    const params = useSearchParams();
    const searchValue = params.get("searchValue");
    const brand = params.get("brand");
    const [search, setSearch] = useState([]);
    const [erro, setErro] = useState(null);

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
            setErro("Guardámos a sua sugestão e tentaremos providenciá-la..");
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
    
        <div className={styles.erro}>
          {/* Renderiza mensagem de erro se existir */}
          {erro && (
            <p style={{ color: "red", fontWeight: "bold", textAlign: "center", fontSize: "36px" }}>
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
                imageSrc={model.imagem} 
              />
        
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