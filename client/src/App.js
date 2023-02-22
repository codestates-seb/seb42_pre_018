import './App.css';
import { Footer } from './components/Footer/Footer';
import { AuthHeader } from './components/Header/AuthHeader';
import { BasicPage } from './pages/BasicPage';
import { AskPage } from './pages/AskPage';
import { Routes, Route } from 'react-router-dom';
import { DetailPage } from './pages/DetailPage';

function App() {
  return (
    <div className="App">
      <AuthHeader></AuthHeader>
      <Routes>
        <Route path="/" element={<BasicPage />}></Route>
        <Route path="/detail" element={<DetailPage />}></Route>
        <Route path="/ask" element={<AskPage />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
