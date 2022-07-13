import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { AdultDescriptions, KidDescriptions } from '../assets/texts/Descriptions'
import CircleItem from '../components/CircleItem'
import Container from '../components/Container'
import Variant from '../components/Variant'
import { PatientProvider, usePatient } from '../context'
import { CircleInfo } from '../assets/texts/CircleInfo'
import styles from '../styles/Home.module.css'
import Circle from '../components/Circle'

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

        <Circle>{CircleInfo}</Circle>
      </Container>
    </PatientProvider>
  )
}

export default Home
