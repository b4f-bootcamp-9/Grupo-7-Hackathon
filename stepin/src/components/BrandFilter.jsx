"use client";
import { useEffect, useState } from "react";
import styles from "../app/styles/BrandFilter.module.css";
import CardBack from "./CardBack";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function BrandFilter() {
  const [models, setModels] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const params = useSearchParams();
  const brand = params.get("brand");

  // Função para buscar os modelos de uma marca
  const fetchModels = async (brand) => {
    try {
      const url = brand ? `/api/find-brand?brand=${brand}` : "/api/find-brand";
      const res = await fetch(url);
      const data = await res.json();

      if (res.ok) {
        const sortedModels = data.response.sort((a, b) => {
          // Ordena primeiro por quantidade vendida (quantidade_sold) de forma crescente
          if (a.quantity_sold !== b.quantity_sold) {
            return b.quantity_sold - a.quantity_sold;
          }
          // Se a quantidade vendida for igual, ordena por marca alfabeticamente
          return a.brand.localeCompare(b.brand);
        });
        setModels(sortedModels);
      } else {
        console.error("Erro ao buscar modelos:", data.error);
      }
    } catch (error) {
      console.error("Erro ao buscar modelos:", error);
    }
  };
  useEffect(() => {
    setSelectedBrand(brand);
    fetchModels(brand); // "null" equivale ao filtro "All"
  }, [brand]);

  const handleBrandClick = (brand) => {
    setSelectedBrand(brand); // Atualiza o estado da marca selecionada
    fetchModels(brand); // Chama a função para buscar modelos dessa marca
  };

  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        {/* Botões para filtrar as marcas */}
        <button
        className={styles.btn}
          style={{
            color: selectedBrand === "adidas" ? "white" : "black",
            backgroundColor: selectedBrand === "adidas" ? "#3a5440" : "",
            borderRadius: ".5rem",
            padding: ".5rem",
            border: "none",
          }}
          onClick={() => handleBrandClick("adidas")}
        >
          Adidas
        </button>
        <button
        className={styles.btn}
          style={{
            color: selectedBrand === "new balance" ? "white" : "black",
            backgroundColor: selectedBrand === "new balance" ? "#3a5440" : "",
            borderRadius: ".5rem",
            padding: ".5rem",
            border: "none",
          }}
          onClick={() => handleBrandClick("new balance")}
        >
          New Balance
        </button>
        <button
        className={styles.btn}
          style={{
            color: selectedBrand === "nike" ? "white" : "black",
            backgroundColor: selectedBrand === "nike" ? "#3a5440" : "",
            borderRadius: ".5rem",
            padding: ".5rem",
            border: "none",
          }}
          onClick={() => handleBrandClick("nike")}
        >
          Nike
        </button>
        <button
        className={styles.btn}
          style={{
            color: selectedBrand === "puma" ? "white" : "black",
            backgroundColor: selectedBrand === "puma" ? "#3a5440" : "",
            borderRadius: ".5rem",
            padding: ".5rem",
            border: "none",
          }}
          onClick={() => handleBrandClick("puma")}
        >
          Puma
        </button>
        <button
        className={styles.btn}
          style={{
            color: selectedBrand === null ? "white" : "black",
            backgroundColor: selectedBrand === null ? "#3a5440" : "",
            borderRadius: ".5rem",
            padding: ".5rem",
            border: "none",
          }}
          onClick={() => handleBrandClick(null)}
        >
          All
        </button>{" "}
        {/* Busca todos */}
      </div>

      {/* Exibe os modelos da marca escolhida */}
      <div className={styles.modelsList}>
        {models.length > 0 ? (
          models.map((model, index, imagem) => (
            <ul key={index}>
              <CardBack
              onClick={() =>
                  router.push(
                    "/details"
                  )}
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
  );
}
