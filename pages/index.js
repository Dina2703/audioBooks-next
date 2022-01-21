import Head from "next/head";
import Image from "next/image";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Navbar />
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
      <Footer />
    </div>
  );
}
