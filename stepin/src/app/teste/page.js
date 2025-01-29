"use client"

import BrandFilter from "@/components/BrandFilter";
import Modal from "@/components/Modal";
import { useEffect, useState } from "react";

export default function Page() {
    const [modalValue, setModalValue] = useState(false);
    const [data, setData] = useState([]);
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

      // Alternar a visibilidade do modal
      const handleModal = () => {
        setModalValue((prev) => !prev);
      };
  
      useEffect(() => {
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
    
        fetchOrders();
      }, []);
    
      if (loading) return <p>Carregando pedidos...</p>;
      if (error) return <p>{error}</p>;
    
    return (
      <div>
        {/* <BrandFilter/> */}
        {modalValue ? <Modal onClose={handleModal} /> : null}
                <button onClick={handleModal}>
                  Entrar em contacto
                </button>
    </div>
  );
}