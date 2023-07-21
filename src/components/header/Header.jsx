import logo from '../../img/JobLogo.png';
import style from './Header.module.css';
import { Button } from './Button';
import { Card } from './Card';



export function Header () {
    return (
        <header className={style.header}>
            <div className={style.search}>
                <img className={style.logo} src={logo} alt='Logo' />
                <Button />
            </div>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
        </header>
    );
}