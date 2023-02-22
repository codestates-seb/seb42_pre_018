import './App.css';
import { Footer } from './components/Footer/Footer';
import { AuthHeader } from './components/Header/AuthHeader';
import { RightSidebar } from './components/RightSidebar/RightSidebar';
import { Sidebar } from './components/Sidebar/Sidebar';
import { MainPage } from './pages/MainPage';
import { AskQuestion } from './pages/AskQuestion';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <AuthHeader></AuthHeader>
      <div className="main__flex">
        <Sidebar></Sidebar>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/ask" element={<AskQuestion />}></Route>
        </Routes>
        <RightSidebar></RightSidebar>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
