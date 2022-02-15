import styles from "../../styles/Books.module.css";
import Link from "next/link";

// export const getStaticProps = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await res.json();
//   return {
//     props: { authors: data },
//   };
// };

import Head from "next/head";
const Books = () => {
  const authors = [
    {
      name: "GOOD VIBES, GOOD LIFE",
      author: "Vex King",
      url: "https://www.youtube.com/watch?v=Bgaok7GF3_g",
      id: 1,
    },
    {
      name: "ATOMIC HABITS",
      author: "James Clear",
      url: "https://www.youtube.com/watch?v=gXyDChaiqJI",
      id: 2,
    },
    {
      name: "EMPOWERING WOMEN",
      author: "Louise Hay",
      url: "https://www.youtube.com/watch?v=RuRsdWXUWcs",
      id: 3,
    },
    {
      name: "WILL",
      author: "Will Smith",
      url: "https://www.youtube.com/watch?v=_mpynWHzSvQ",
      id: 4,
    },
    {
      name: "IKIGAI: The Japanese Secret to a Long and Happy Life",
      author: "Francesc Miralles and Hector Garcia",
      url: "https://www.youtube.com/watch?v=_mpynWHzSvQ",
      id: 5,
    },
  ];

  return (
    <>
      <Head>
        <title>Books shop | Book Listing</title>
        <meta name="keywords" content="books" />
      </Head>
      <div>
        <h1 className={styles.title}>Some audio books from YouTube</h1>
        {authors.map((author) => (
          <Link key={author.id} href={author.url}>
            <a className={styles.single} target="_blank">
              <h3>{author.name}</h3>
              <p>by {author.author}</p>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Books;
