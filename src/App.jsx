/*import logo from './logo.svg';*/
import './App.css';
import { Header } from './components/header/Header';
import { Main } from './components/main/Main';
import { Menu } from './components/menu/Menu';
import { Aside } from './components/aside/Aside';


function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <Menu />
      <Aside />
    </div>
  );
}

export default App;
