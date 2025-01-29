"use client";
import Image from "next/image"; // Correta importação do Next.js
import styles from "../../src/app/styles/Cards.module.css";
import BrandFilter from "@/components/BrandFilter";
import { useEffect, useState } from "react";
import Modal from "@/components/Modal";
import CardBack from "@/components/CardBack";
import Search from "@/components/Search";
import { Pedidoespecial } from "@/components/Pedidoespecial";

export default function HomePage() {
  const [models, setModels] = useState([]);
  const [modalValue, setModalValue] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [data, setData] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchModels = async (brand) => {
    try {
      const url = brand ? `/api/find-brand?brand=${brand}` : "/api/find-brand";
      const res = await fetch(url);
      const data = await res.json();

      if (res.ok) {
        const sortedModels = data.response
          .sort((a, b) => b.quantity_sold - a.quantity_sold) // Ordena pela quantidade vendida (menor para maior)
          .slice(0, 4); // Pega apenas os 4 primeiros (menos vendidos)

        setModels(sortedModels);
      } else {
        console.error("Erro ao buscar modelos:", data.error);
      }
    } catch (error) {
      console.error("Erro ao buscar modelos:", error);
    }
  };

  // Alternar a visibilidade do modal
  const handleModal = () => {
    setModalValue((prev) => !prev);
  };

  // Função para buscar pedidos
  const fetchOrders = async () => {
    try {
      const res = await fetch("/api/orders");
      if (!res.ok) {
        throw new Error("Falha ao carregar os pedidos");
      }
      const data = await res.json();
      setOrders(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Chama as funções de fetch quando o componente for montado
  useEffect(() => {
    fetchOrders();
    fetchModels(selectedBrand);
  }, [selectedBrand]); // Dependência de selectedBrand

  if (loading) return <p>Carregando pedidos...</p>;
  if (error) return <p>{error}</p>;
  return (
    <div>
      <Search />
      <div className={styles.Banner}>
        <div className={styles.HomePic}>
          <Image
            src="/images/Home.png"
            alt="Tenis Home"
            width={1890}
            height={800}
            style={{
              borderRadius: "15px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          />
        </div>
        <div className={styles.circlehome}>
          <img
            src="/images/circlehome.png" // Caminho direto para a imagem na pasta public
            alt="Circle Home"
            width={"full"}
            height={"full"}
          />
        </div>
      </div>
      <h2
        style={{
          fontFamily: "Roboto",
          textAlign: "center",
          fontSize: "2rem",
          margin: "2.5rem",
          color: "black",
          margin: "2rem",
        }}
      >
        Confira os nossos destaques!
      </h2>
      <div className={styles.modelsList}>
        {models.length > 0 ? (
          models.map((model, index) => (
            <ul key={index}>
              <CardBack
                model={model.model}
                brand={model.brand}
                imageSrc={model.imageSrc}
              />
            </ul>
          ))
        ) : (
          <></>
        )}
      {/* <Image
        src="/images/Home.png" // Caminho direto para a imagem na pasta public
        alt="Tenis Home"
        width={1500}
        height={625}
        style={{
          borderRadius: "15px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      /> */}
      {/* <div style={{ backgroundColor: "rgba(237,224,212,0.8)", fontFamily: "Roboto",
            textAlign: "center",
            fontSize: "1.5rem",
            color: "black",
             }}> */}
     
      </div> 
      <div>
      <h2>
        Confira todos os nossos produtos!</h2>
      </div>
      {/* CardBack */} <BrandFilter />
      <div className={styles.contactSection}>
        {" "}
        {modalValue ? <Modal onClose={handleModal} /> : null}
        <Pedidoespecial
          onClick={handleModal}
          title="Quero um Modelo Especial"
        />
      </div>
    </div>
  );
}
