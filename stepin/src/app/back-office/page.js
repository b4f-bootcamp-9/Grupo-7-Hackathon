"use client";
import { useEffect, useState } from "react";
import styles from "../styles/BackOfficePage.module.css"


export default function Page() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    <div className= {styles.container}>
      <h2 className={styles.tittle}>Lista de Pedidos</h2>
      {orders.length === 0 ? (
        <p>Não há pedidos registrados.</p>
      ) : (
        <table className={styles.tableContainer}>
            <thead>
                <tr className={styles.tableHeader}>
                    <th>Modelo</th>
                    <th>Marca</th>
                    <th>Quantidade</th>
                    </tr>
                    </thead>
                    <tbody>
          {orders.map((order) => (
            <tr key={order._id} className={styles.tableRow}>
              <td>{order.model}</td> 
              <td>{order.brand}</td> 
              <td>{order.quantity}</td> 
            </tr>
          ))}
        </tbody>
        </table>
      )}
    </div>
  );
}
