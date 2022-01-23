import Head from "next/head";
import styles from "../styles/Home.module.css";

const About = () => {
  return (
    <>
      <Head>
        <title>Books shop | About</title>
        <meta name="keywords" content="books" />
      </Head>
      <div>
        <h1 className={styles.title}>About</h1>
        <div className={styles.text}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis porro
            saepe adipisci dolor ipsum, officiis corrupti tenetur vel tempore
            fugit veniam minus, assumenda dolores nihil commodi aliquam natus
            reprehenderit dignissimos.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis porro
            saepe adipisci dolor ipsum, officiis corrupti tenetur vel tempore
            fugit veniam minus, assumenda dolores nihil commodi aliquam natus
            reprehenderit dignissimos.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
