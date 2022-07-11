import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Container from '../components/Container'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Doctors world</title>
        <meta name='description' content='Doctors world test task' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Container className={styles.container}>
        <h1>А вдруг СМА?</h1>
        <h2>Выберете, кто Ваш пациент:</h2>
      </Container>
    </div>
  )
}

export default Home
