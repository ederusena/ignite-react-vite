import styles from './Post.module.css'
import Profile from '../../assets/images/profile.svg'
export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/26800480?v=4" />
                    <div className={styles.authorInfo}>
                        <strong>Eder Sena</strong>
                        <span>Frontend Developer</span>
                    </div>
                </div>
                <time title="27 de maio de 2023" dateTime="2023-05-27">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉 <a href="#">eder.design/melisquenciait</a></p>
                <p>
                    <a href="#">#novoprojeto</a>{' '}
                    <a href="#">#nlw</a>{' '}
                    <a href="#">#rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder="Dexe um comentário" />

                <footer>
                    <button className={styles.btn} type="submit">Comentar</button>
                </footer>
            </form>
        </article>
    );
}