import styles from './Header.module.css';
import igniteLogo from '../../assets/Ignite-simbol.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="logotipo do ignite"/>
      <strong>Ignite Feed</strong>
    </header>
  )
}