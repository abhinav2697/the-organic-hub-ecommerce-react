
import './App.css';
import { BrowserRouter as  Routes,Route } from "react-router-dom";
import { Home } from './Pages/Home';

function App() {
  return (
    <div className='App'>
      <Routes>
      <Route path="/" element={<Home/>} />
        
     </Routes>
    </div>
  );
}

export default App;
