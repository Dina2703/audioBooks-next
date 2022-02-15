import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Books shop | Home</title>
        <meta name="keywords" content="books" />
      </Head>
      <div>
        <h1 className={styles.title}>Hey there !</h1>
        <div className={styles.container}>
          <div className={styles.text}>
            <p>
              Losing yourself in a book is the ultimate relaxation.
              <div style={{ fontStyle: "oblique", textIndent: "100px" }}>
                Dr. David Lewis
              </div>
            </p>
            <p>
              If you don&#39;t like to read, you haven&#39;t found the right
              book.
              <div style={{ fontStyle: "oblique", textIndent: "100px" }}>
                J.K. Rowling
              </div>
            </p>
            <p>
              That&#39;s the thing about books. They let you travel without
              moving your feet.
              <div style={{ fontStyle: "oblique", textIndent: "100px" }}>
                Jhumpa Lahiri
              </div>
            </p>
          </div>
          <Image
            src="/home.jpg"
            alt="book"
            width={400}
            height={250}
            className={styles.img}
          />
        </div>
        <Link href="/books">
          <a className={styles.btn}>See Books Listing</a>
        </Link>
      </div>
    </>
  );
}
