import styles from './Header.module.css'
import Logo from '../../assets/images/logo.svg'
export function Header() {
    return (
        <>
            <header className={styles.header}>
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
                    <div
                        className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
                        <div className="flex items-center">
                            <a href="#">
                                <span className="sr-only">Workflow</span>
                                <img className="h-10 w-auto" src={Logo} alt="Logo" />
                            </a>
                        </div>
                        <div className="ml-10 space-x-4">
                            <a href="#"
                               className="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75">Sign
                                in</a>
                            <a href="#"
                               className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50">Sign
                                up</a>
                        </div>
                    </div>
                </nav>
            </header>

        </>
    );
}