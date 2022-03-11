import './App.css';
import FoodFinder from './components/FoodFinder';
import Nav from './components/Nav';
import About from './components/About';
import { useState } from 'react';

export const PAGES = {
  ABOUT : "ABOUT",
  FINDER : "FINDER"
}; 

function App() {
  const [activePage, setActivePage] = useState(PAGES.ABOUT);
  console.log(activePage)
  return (
    <div className="App">
      <Nav activePage ={activePage} setActivePage={setActivePage}/>
      <main>
        {
          activePage == PAGES.ABOUT ? <About/> : <FoodFinder/>
        }
      </main>
    </div>
  );
}

export default App;
