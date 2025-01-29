
import Image from "next/image"; // Correta importação do Next.js
import styles from "../../src/app/styles/Cards.module.css";
import Cards from "@/components/Cards";
import NavbarSupplier from "../components/NavbarSupplier"; // Importa a Navbar

export default function HomePage() {
  return (
    <div>
      <Image 
        src="/images/Home.png" // Caminho direto para a imagem na pasta public
        alt="Tenis Home" 
        width={1500} 
        height={625} 
        style={{ borderRadius: '15px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }} 
      />

      <div style={{ backgroundColor: 'rgba(237,224,212,0.8)'}}>
        <h2
          style={{
            fontFamily: "Roboto",
            textAlign: "center",
            fontSize: "2rem",
            margin: "2.5rem",
            color: "black",
            margin:"2rem",
          }}
        >
          Confira os nossos destaques!
        </h2>

        <div className={styles.containerCards}>
          <Cards
            imageSrc="/images/tenis1.png"
            title="Tenis 1"
            price="A partir de 350€"
          />
          <Cards
            imageSrc="/images/tenis2.png"
            title="Tenis 2"
            price="A partir de 100€ por convidado"
          />
          <Cards
            imageSrc="/images/tenis3.png"
            title="Tenis 3"
            price="O preço certo para o seu bolso!"
          />
        </div>
      </div>
        <h2>
        Confira todos os nossos produtos!

      </h2>
      {/* CardBack */}

      <div className={styles.containerCards}>
          <Cards
            imageSrc="/images/tenis1.png"
            title="Tenis 1"
            price="A partir de 350€"
          />
          <Cards
            imageSrc="/images/tenis2.png"
            title="Tenis 2"
            price="A partir de 100€ por convidado"
          />
          <Cards
            imageSrc="/images/tenis3.png"
            title="Tenis 3"
            price="O preço certo para o seu bolso!"
          />
          <Cards
            imageSrc="/images/tenis3.png"
            title="Tenis 3"
            price="O preço certo para o seu bolso!"
          />
        </div>
        <div className={styles.containerCards}>
          <Cards
            imageSrc="/images/tenis1.png"
            title="Tenis 1"
            price="A partir de 350€"
          />
          <Cards
            imageSrc="/images/tenis2.png"
            title="Tenis 2"
            price="A partir de 100€ por convidado"
          />
          <Cards
            imageSrc="/images/tenis3.png"
            title="Tenis 3"
            price="O preço certo para o seu bolso!"
          />
          <Cards
            imageSrc="/images/tenis3.png"
            title="Tenis 3"
            price="O preço certo para o seu bolso!"
          />
        </div>
        <div className={styles.containerCards}>
          <Cards
            imageSrc="/images/tenis1.png"
            title="Tenis 1"
            price="A partir de 350€"
          />
          <Cards
            imageSrc="/images/tenis2.png"
            title="Tenis 2"
            price="A partir de 100€ por convidado"
          />
          <Cards
            imageSrc="/images/tenis3.png"
            title="Tenis 3"
            price="O preço certo para o seu bolso!"
          />
          <Cards
            imageSrc="/images/tenis3.png"
            title="Tenis 3"
            price="O preço certo para o seu bolso!"
          />
        </div>
        <div className={styles.containerCards}>
          <Cards
            imageSrc="/images/tenis1.png"
            title="Tenis 1"
            price="A partir de 350€"
          />
          <Cards
            imageSrc="/images/tenis2.png"
            title="Tenis 2"
            price="A partir de 100€ por convidado"
          />
          <Cards
            imageSrc="/images/tenis3.png"
            title="Tenis 3"
            price="O preço certo para o seu bolso!"
          />
          <Cards
            imageSrc="/images/tenis3.png"
            title="Tenis 3"
            price="O preço certo para o seu bolso!"
          />
        </div>
      </div>
      

  );
}
