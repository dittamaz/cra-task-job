import style from './Menu.module.css';

export function Menu () {
    return (
        <menu className={style.menu}>
            <nav className={style.nav}> 
                <a href="/">P</a>
                <a href="/">S</a>
                <a href="/">H</a>
            </nav>
        </menu>
    );
}