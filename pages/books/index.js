import styles from "../../styles/Books.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: { authors: data },
  };
};
import Head from "next/head";
const Books = ({ authors }) => {
  return (
    <>
      <Head>
        <title>Books shop | Book Listing</title>
        <meta name="keywords" content="books" />
      </Head>
      <div>
        <h1 className={styles.title}>Book Authors</h1>
        {authors.map((author) => (
          <div key={author.id}>
            <a className={styles.single}>
              <h3>{author.name}</h3>
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Books;
