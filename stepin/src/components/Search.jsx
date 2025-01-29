"use cliente"
import { useRouter } from "next/navigation";
import { useState } from "react";

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
    <div>
      <h1>Busca de Pedido</h1>
      <div>
        <input
          type="text"
          placeholder="Marca"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
        <input
          type="text"
          placeholder="Modelo"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button onClick={handleSearch} disabled={loading}>
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
