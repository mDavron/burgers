import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={`${styles.title} font-effect-fire-animation`}>Главная</h1>
      <p className={styles.text}>
        Что такое идеальный бургер? Лист свежего салата, мягкие булочки, сочное
        мясо. О других составляющих начинки можно поспорить, ведь это дело
        вкуса.
      </p>
      <p className={styles.text}>
        Есть ещё пара-тройка факторов, влияющих на аппетит: цены, качество
        обслуживания, правильная атмосфера заведения.
      </p>
      <Link className={styles.btn} href={"/burgers"}>
        Все бургеры
      </Link>
    </div>
  );
}
