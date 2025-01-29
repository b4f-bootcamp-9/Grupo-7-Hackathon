import { useState } from "react";
import styles from "../app/styles/Modal.module.css";

export default function BrandFilter() {
  const [models, setModels] = useState([]);

  // Função para buscar os modelos de uma marca
  const fetchModels = async (brand) => {
    try {
      const url = brand ? `/api/find-brand?brand=${brand}` : "/api/find-brand";
      const res = await fetch(url);
      const data = await res.json();

      if (res.ok) {
        
        const sortedModels = data.response
        .sort((a, b) => a.quantity_sold - b.quantity_sold) // Ordena pela quantidade vendida
        .sort((a, b) => a.brand.localeCompare(b.brand)); // Ordena por marca alfabeticamente

        setModels(sortedModels);
      } else {
        console.error("Erro ao buscar modelos:", data.error);
      }
    } catch (error) {
      console.error("Erro ao buscar modelos:", error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        {/* Botões para filtrar as marcas */}
        <button onClick={() => fetchModels("nike")}>Nike</button>
        <button onClick={() => fetchModels("adidas")}>Adidas</button>
        <button onClick={() => fetchModels(null)}>All</button>{" "}
        {/* Busca todos */}
      </div>

      {/* Exibe os modelos da marca escolhida */}
      <div className={styles.modelsList}>
        {models.length > 0 ? (
          models.map((model, index) => (
            <div key={index}>
              <p>Modelo: {model.model}</p>
              <p>Marca: {model.brand}</p>
              <p>Quantidade Vendida: {model.quantity_sold}</p>
            </div>
          ))
        ) : (
          <p>Nenhum modelo encontrado.</p>
        )}
      </div>
    </div>
  );
}
