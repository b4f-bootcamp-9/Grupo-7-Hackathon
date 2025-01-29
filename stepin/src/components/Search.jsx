"use cliente"
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "../app/styles/Search.module.css"

export default function Search() {
  const [brand, setBrand] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [results, setResults] = useState([]);
  const router = useRouter();

  const handleSearch = async () => {
    setLoading(true);
    setError(null);


    try {
      const response = await fetch(
        `/api/search?brand=${brand}&searchValue=${searchValue}`
      );
      const data = await response.json();

      if (data.response) {
        router.push(
        `/search?brand=${brand}&searchValue=${searchValue}`)
      
      } else {
        setError("Erro ao buscar os dados.");
      }
    } catch (err) {
      console.log(err);
      setError("Erro ao processar a solicitação.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Não perca tempo!</h1> 
      <h2>Procure os seus ténis agora e dê um passo em frente no seu estilo.</h2>
      <div>
        <input className={styles.input}
          type="text"
          placeholder="Marca"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
        <input className={styles.input}
          type="text"
          placeholder="Modelo"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button className={styles.btn} onClick={handleSearch} disabled={loading}>
          {loading ? "Buscando..." : "Buscar"}
        </button>
      </div>

      {error && <p>{error}</p>}

      {results.length > 0 && (
        <ul>
          {results.map((result, index) => (
            <li key={index}>
              {result.model} - {result.brand}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
