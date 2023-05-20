import styles from './index.module.css'
import logo from '../../assets/Logo.svg'
import { NavLink } from "react-router-dom"

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.div_container}>
                <img className={styles.img} src={logo} alt="Logo do pokémon" />
                <nav>
                    <NavLink to={`/home`}>Home</NavLink>
                    <NavLink to={`/Pokédex`}>Pokédex</NavLink>
                    <NavLink to={`/Legendaries`}>Legendaries</NavLink>
                    <NavLink to={`/Documentation`}>Documentation</NavLink>
                </nav>
            </div>
        </header>
    )
}