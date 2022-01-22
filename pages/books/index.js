import styles from "../../styles/Books.module.css";
import Head from "next/head";
const Test = () => {
  return (
    <>
      <Head>
        <title>Books shop | Book Listing</title>
        <meta name="keywords" content="books" />
      </Head>{" "}
      <div>
        <h1 className={styles.txt}>Books page</h1>
      </div>
    </>
  );
};

export default Test;
