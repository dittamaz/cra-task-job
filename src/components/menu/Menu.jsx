import style from './Menu.module.css';

export function Menu () {
    return (
        <menu className={style.menu}>
            <nav className={style.nav}> 
                <a href="/">A</a>
                <a href="/">B</a>
                <a href="/">C</a>
            </nav>
        </menu>
    );
}