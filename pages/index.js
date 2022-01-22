import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
  <Head>
  <title>Books shop | Home</title>
  <meta name="keywords" content="books"/>
  </Head>
    <div>
      <h1 className={styles.title}>Home page</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis porro
        saepe adipisci dolor ipsum, officiis corrupti tenetur vel tempore fugit
        veniam minus, assumenda dolores nihil commodi aliquam natus
        reprehenderit dignissimos.
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis porro
        saepe adipisci dolor ipsum, officiis corrupti tenetur vel tempore fugit
        veniam minus, assumenda dolores nihil commodi aliquam natus
        reprehenderit dignissimos.
      </p>
      <Link href="/books">
        <a className={styles.btn}>See Books Listing</a>
      </Link>
    </div>
    </>
  );
}
