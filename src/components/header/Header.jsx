import logo from '../../img/JobLogo.png';
import style from './Header.module.css';
import { Button } from './Button';


export function Header () {
    return (
        <header className={style.header}>
            <img className={style.logo} src={logo} alt='Logo' />
            <Button />
        </header>
    );
}