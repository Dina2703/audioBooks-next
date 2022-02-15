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
        <h1 className={styles.title}>WHY YOU SHOULD READ EVERY DAY</h1>
        <div className={styles.text}>
          <p className={styles.text}>
            There are so many benefits to reading books.
            <br />
            But let&#39;s face it: It can be challenging to motivate ourselves
            to read a 382-page book when we can watch the movie, listen to the
            audiobook, or watch a YouTube video summary instead.
            <br />
            Am I right? However, if most of your daily reading consists of
            social media posts, text messages, and news headlines, you&#39;re
            missing out. So, what are the benefits of reading books? If
            you&#39;re interested in reading more books but need some
            motivation, this article&#39;s for you. After all, when you
            understand the importance of reading books, you&#39;re more likely
            to do it.
          </p>
          <p className={styles.text}>
            Here are 10 benefits of reading that illustrate the importance of
            reading books. When you read every day you:
            <ul>
              <li>Gain valuable knowledge</li>
              <li>Exercise your brain</li>
              <li>Improve your focus</li>
              <li>Improve your memory</li>
              <li>Enjoy entertainment</li>
              <li>Improve your ability to empathize</li>
              <li>Improve your communication skills</li>
              <li> Reduce stress</li>
              <li>Improve your mental health</li>
              <li>Live longer</li>
            </ul>
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
