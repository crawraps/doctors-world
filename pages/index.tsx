import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { AdultDescriptions, KidDescriptions } from '../assets/texts/Descriptions'
import Container from '../components/Container'
import Variant from '../components/Variant'
import { PatientProvider } from '../context'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <PatientProvider>
      <Head>
        <title>Doctors world</title>
        <meta name='description' content='Doctors world test task' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Container className={styles.container} padding>
        <h1>А вдруг СМА?</h1>
        <h2>Выберете, кто Ваш пациент:</h2>

        <div className={styles.variantsContainer}>
          <Variant
            type='adult'
            title='Взрослый'
            image={require('../assets/images/wooman.jpg')}
            cards={AdultDescriptions}
          />
          <Variant type='kid' title='Ребенок' image={require('../assets/images/kid.jpg')} cards={KidDescriptions} />
        </div>
      </Container>
    </PatientProvider>
  )
}

export default Home
