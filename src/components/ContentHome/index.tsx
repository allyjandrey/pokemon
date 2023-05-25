import styles from './index.module.css'
import banner from '../../assets/BannerCompleto.svg'
import { NavLink } from 'react-router-dom'


export const ContentHome = () => {
    return (
        <section className={styles.section_container}>
            <main>
                <article className={styles.article_container}>
                    <article>
                        <h1><strong>Find </strong>
                            all your <br /> favorite <br />
                            <strong> Pokemon</strong>
                        </h1>
                        <h2>You can know the type of Pokemon, <br />
                            it's strenghts, disadvantages and <br />
                            abilities
                        </h2>
                        <NavLink to={`/Pokedex`}>
                            <button className={styles.button}>See pokemons</button>
                            </NavLink>
                    </article>
                    <article className={styles.img_container}>
                        <img src={banner} alt="Banner do Pikachu com duas pokébolas próximas a ele e nuvens atrás" />
                    </article>
                </article>
            </main>
        </section>
    )
}