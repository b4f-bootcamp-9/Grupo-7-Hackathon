"use client"; //utilizar para usar os states, pois é no client-side

import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "../../src/app/styles/Login.module.css";

export default function Login() {
  const [usePass, setPass] = useState("");
  const [useEmail, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();

  const HandleClick = async (e) => {
    e.preventDefault();
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: useEmail, senha: usePass }),
    };
    //FETCH PARA O END-POINT
    const res = await fetch("/api/login", options);
    if (res.status === 200) {
      //REENCAMINHAR PARA OUTRA PAGINA
      router.push("/back-office");
    } else if (res.status === 401) {
      // Atualizar a mensagem de erro se as credenciais forem inválidas
      setErrorMessage("Email ou senha incorretos. Tente novamente.");
    } else {
      // Mensagem genérica para outros erros
      setErrorMessage("Ocorreu um erro. Tente novamente mais tarde.");
    }
  };
  return (
    <div className={styles.firstContainer}>
      <h1>Login Empresa</h1>
      <div className={styles.secoundContainer}>
        <div className={styles.imagem}>
          <img src="/images/Home.png" alt="imagem"/>
        </div>
        <div className={styles.formulario}>
          <form>
            <h2>Conecte-se com sua conta!</h2>
            {errorMessage && (
              <p className={styles.error}>{errorMessage}</p> // Mostrar mensagem de erro
            )}
            <input
              type="text"
              name="email"
              placeholder="Nome de usuario:"
              value={useEmail}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              name="senha"
              placeholder="Password"
              value={usePass}
              onChange={(e) => setPass(e.target.value)}
            />
            <button onClick={(e) => HandleClick(e)}>Entrar</button>
            <div className={styles.checkbox}>
              <input type="checkbox" name="salvalogin" />
              <label>Manter a sessão iniciada</label>
            </div>{" "}
            <a className={styles.link} href="/create-supplier">
              Criar Conta
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}
