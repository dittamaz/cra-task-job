import style from './Main.module.css';
import { Row } from './Row';

export function Main () {
    return (
        
        <main className={style.main}>
            <Row />
            <div>
              <h1>MAIN CONTENT</h1>
            </div>
        </main> 
    );
}

