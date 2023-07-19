/*import logo from './logo.svg';*/
import './App.css';
import { Aside } from './components/aside/Aside';
import { Header } from './components/header/Header';
import { Main } from './components/main/Main';
import { Menu } from './components/menu/Menu';

function App() {
  return (
    <div className="App">
      <Menu />
      <Aside />
      <Header />
      <Main />
    </div>
  );
}

export default App;
