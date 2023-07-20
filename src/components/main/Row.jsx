import style from './Main.module.css';

export function Row () {
    return (
        <div className={style.cardRow}>
            <div className={style.headerCard}>Welcome</div>
            <div className={style.headerCard}>Welcome</div>
            <div className={style.headerCard}>Welcome</div>
            <div className={style.headerCard}>Welcome</div>
            <div className={style.headerCard}>Welcome</div>
        </div>
    );
}