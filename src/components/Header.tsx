import styles from './Header.module.css'
import igniteLogo from '../assets/icons/logo.svg'
export function Header() {
    return(
        <header className={styles.header}>
        <strong >Ignite feed</strong>
        <img src={igniteLogo} alt="logo tipo do ignite" />
        </header>
    );
}