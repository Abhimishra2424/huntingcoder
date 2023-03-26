import Head from "next/head";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className={styles.title}>Hunting coder</h1>
        <div className="blogs">
          <div className="blogItem">
            <h3>How to learn React js in 2023</h3>
            <p>React js hooks and all things</p>
          </div>
        </div>
      </main>
    </>
  );
}
