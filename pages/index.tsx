import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { gql } from "@apollo/client";
import client from "../apollo-client";

const inter = Inter({ subsets: ['latin'] })

export default function Home({ characters }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/rm.svg"
            alt="rick and morty Logo"
            width={300}
            height={200}
            priority
          />
        </div>

        <div className={styles.grid}>
            {characters.map((characters) => (
              <div key={characters.code} className={styles.card}>
                <h3>{characters.name}</h3>
                <p>
                  status : {characters.status} <br /> 
                  species : {characters.species}
                </p>
              </div>
            ))}
        </div>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Characters {
        characters {
          results {
            name 
            status 
            species
            image
          }
        }
      }
    `,
  });

  return {
    props: {
      characters: data.characters.results.slice(0, 8),
    },
 };
}