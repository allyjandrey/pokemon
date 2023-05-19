import styles from './index.module.css'
import banner from '../../assets/BannerCompleto.svg'


export const Home = () => {
    return (
        <section className={styles.section_container}>
            <main>
                <article className={styles.article_container}>
                    <h1><strong>Find </strong>
                        all your <br /> favorite <br />
                        <strong> Pokemon</strong>
                    </h1>
                    <h2>You can know the type of Pokemon, <br />
                        it's strenghts, disadvantages and <br />
                        abilities
                    </h2>
                    <button className={styles.button}>See pokemons</button>
                </article>
                <article>
                    <img src={banner} alt="Banner do Pikachu com duas pokébolas próximas a ele e nuvens atrás" />
                </article>
            </main>
        </section>
    )
}