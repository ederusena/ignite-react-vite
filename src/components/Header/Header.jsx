import styles from './Header.module.css'
import Logo from '../../assets/images/logo.svg'
import Profile from '../../assets/images/profile.svg'
export function Header() {
    return (
        <>
            <header className={styles.header}>
                <nav className={styles.nav} aria-label="Top">
                    <div
                        className={styles.nav_flex}>
                        <div className="flex items-center gap-2">
                            <a href="#">
                                <span className="sr-only">Logo</span>
                                <img className="h-10 w-auto" src={Logo} alt="Logo" />
                            </a>
                            Ignite Feed
                        </div>
                        <div className="md:invisible ml-10 space-x-4">
                            <a href="#">
                                <span className="sr-only">Profile</span>
                                <img className={styles.profile} src={Profile} alt="Profile" />
                            </a>
                        </div>
                    </div>
                </nav>
            </header>

        </>
    );
}