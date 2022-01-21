import Head from "next/head";
import Image from "next/image";

import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis porro
        saepe adipisci dolor ipsum, officiis corrupti tenetur vel tempore fugit
        veniam minus, assumenda dolores nihil commodi aliquam natus
        reprehenderit dignissimos.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis porro
        saepe adipisci dolor ipsum, officiis corrupti tenetur vel tempore fugit
        veniam minus, assumenda dolores nihil commodi aliquam natus
        reprehenderit dignissimos.
      </p>
      <Link href="/books">
        <a>See Books Listing</a>
      </Link>
    </div>
  );
}
