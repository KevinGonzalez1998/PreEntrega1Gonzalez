
import './App.css';
import NavBar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Wallpaper from './wallpaper/wallpaper';

function App() {
  return (
   <div className="App">
      <NavBar/>
      <Wallpaper/>
      <ItemListContainer greeting={'Bienvenidos'}/>
    </div>
  );
}

export default App;
