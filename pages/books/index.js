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
      name: "RICH DAD POOR DAD",
      author: "Robert Kiyosaki",
      url: "https://www.youtube.com/watch?v=wp7Lz1svVro",
      id: 1,
    },
    {
      name: "ATOMIC HABITS",
      author: "James Clear",
      url: "https://www.youtube.com/watch?v=gXyDChaiqJI",
      id: 2,
    },
    {
      name: "Thinking, Fast & Slow",
      author: "Daniel Kahneman",
      url: "https://www.youtube.com/watch?v=d953fegpMFE",
      id: 3,
    },
    {
      name: "Do It Today",
      author: "Darius Foroux",
      url: "https://www.youtube.com/watch?v=mHrvzVqeMIU&list=LL&index=19&t=4s",
      id: 6,
    },
    {
      name: "EMPOWERING WOMEN",
      author: "Louise Hay",
      url: "https://www.youtube.com/watch?v=RuRsdWXUWcs",
      id: 8,
    },

    {
      name: "IKIGAI: The Japanese Secret to a Long and Happy Life",
      author: "Francesc Miralles and Hector Garcia",
      url: "https://www.youtube.com/watch?v=qM4vJjQqk-4",
      id: 5,
    },

    {
      name: "The Alchemist",
      author: " Paulo Coelho",
      url: "https://www.youtube.com/watch?v=uxOto_WRWdM&list=LL&index=24&t=8394s",
      id: 7,
    },
    {
      name: "WILL",
      author: "Will Smith",
      url: "https://www.youtube.com/watch?v=_mpynWHzSvQ",
      id: 4,
    },
  ];

  return (
    <>
      <Head>
        <title>Books shop | Book Listing</title>
        <meta name="keywords" content="books" />
      </Head>
      <div>
        <h1 className={styles.title}>Recommended self-development books</h1>
        <p className={styles.parag}>
          click to listen the audio-book on YouTube
        </p>
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
