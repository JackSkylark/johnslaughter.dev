import style from "./style.module.scss";

export const Header = () => {
    return (
        <header className={style.header}>

            <a  href="/" className={style.logo}>
                js
            </a>

            <div className={style.actions}>        
                <a href="/resume">
                    Resume
                </a>

                <a href="/blog">
                    Blog
                </a>

                <a href="/music">
                    Music
                </a>
            </div>

        </header>
    );
}
