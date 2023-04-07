import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import NavBar from '../NavBar';
import Login from '../../pages/Login';
import SignUp from '../../pages/SignUp';
import Form from '../Form/Form';

function App() {
  return (
    <BrowserRouter>
    <NavBar></NavBar>
      <Routes>
        <Route path="/" />
        <Route path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
