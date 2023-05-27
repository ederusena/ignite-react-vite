import styles from './Sidebar.module.css'
import imgSide from '../../assets/images/sidebar-user.jpg'
import { PencilLine } from 'phosphor-react'
export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src={imgSide}/>
            <div className={styles.profile}>
                <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/26800480?v=4" alt="Avatar Profile"/>
                <strong className={styles.username}>Eder Sena</strong>
                <span className={styles.role}>Frontend Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={18}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}