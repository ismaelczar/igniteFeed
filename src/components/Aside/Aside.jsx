import {PencilLine} from 'phosphor-react';
import styles from './Aside.module.css';

export function Aside() {
  return (
    <aside className={styles.siderbar}>
      <img className={styles.cover}
      src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"  />

      <div className={styles.profile}>
        <img
        className={styles.avatar}
        src="https://avatars.githubusercontent.com/u/103972495?v=4"
        />
        <strong>Ismael Cézar</strong>
        <span>Front-End Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Edite seu perfil
          </a>
      </footer>
    </aside>
  )
}