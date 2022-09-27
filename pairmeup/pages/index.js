import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import myGif from 'url'




export default function Home() {
  returna (
    <div className={styles.container}>


      <main className={styles.main}>
        <h1 className={styles.title}>
          pairmeup <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <div className={styles.grid}>

        <span className={styles.card}>
          <Image src="/assets/hackerman.gif" alt="me" width="64" height="64" />
          </span>

          <span className={styles.card}>
          <Image src="/assets/hackerman.gif" alt="me" width="64" height="64" />
          </span>
          <span className={styles.card}>
          <Image src="/assets/hackerman.gif" alt="me" width="64" height="64" />
          </span>

          
        </div>
      </main>


      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >

        </a>
      </footer>
    </div>
  )
}
