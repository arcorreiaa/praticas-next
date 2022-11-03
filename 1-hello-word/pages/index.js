import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Oi Mundo</h1>

      <div>
        <h1>
          <Link href="/products">Produtos</Link>
        </h1>

        <ul>
          <li>
            <Link href="/products/shirt">Camisa</Link>
          </li>
          <li>
            <Link href="/products/pants/bluepant">Calça Azul</Link>
          </li>
          <li>
            <Link href="products/pants/redpant">Calça Vermelha</Link>
          </li>
        </ul>
      </div>

      <Link href="/about">Página de About</Link>
    </div>
  );
}
