import styles from './index.module.css'
import logo from '../../assets/Logo.svg'
import { NavLink } from "react-router-dom"

export const Header = () => {
    return (
        <header className={styles.header}>
            <section className={styles.section_container}>
                <article className={styles.article_container}>
                    <img src={logo} alt="Logo do pokémon" />
                </article>
                <nav className={styles.nav_container}>
                    <NavLink
                        to={`/`}
                        className={({ isActive }) => (isActive ? styles.active : styles.inactive)}>
                        Home
                    </NavLink>
                    <NavLink
                        to={`/Pokedex`}
                        className={({ isActive }) => (isActive ? styles.active : styles.inactive)}>
                        Pokédex
                    </NavLink>
                    <NavLink
                        to={`/Legendaries`}
                        className={({ isActive }) => (isActive ? styles.active : styles.inactive)}>
                        Legendaries
                    </NavLink>
                    <NavLink
                        to={`/Documentation`}
                        className={({ isActive }) => (isActive ? styles.active : styles.inactive)}>
                        Documentation
                    </NavLink>
                </nav>
            </section>
        </header>
    )
}