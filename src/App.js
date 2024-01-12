//import logo from './logo.svg';
import './App.css';
import About from './component/About';
import Introduction from './component/Introduction';
import ProductList from './component/ProductList';
import Contact from './component/Contact'
import Toggle from './component/Toggle';
import { useContext } from 'react';
import { ThemeContext } from './Contextapi/context';


function App() {

  const theme=useContext(ThemeContext)
  const darkMode=theme.state.darkMode;
  return (
    <div style={{backgroundColor: darkMode ? "#222":"white", color:darkMode &&"white"}}>
      <Introduction></Introduction>
      <About></About>
      <ProductList></ProductList>
      <Contact></Contact>
      <Toggle></Toggle>
      
      
      
    </div>
  );
}

export default App;
