import logo from './logo.svg';
import './App.css';
import { NavBar } from './Components/NavBar';
import { MainCont } from './Components/MainCont';
import { Books } from './Components/BooksCard';
import { Dashboard } from './Components/Dashboard';

function App() {
  return (
    <div>
      {/* <Dashboard/> */}
      {localStorage.getItem("name")!=null?<Dashboard/>:<MainCont/>}
      {/* <Books/> */}
    </div>
  );
}

export default App;
