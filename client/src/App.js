import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { RightSidebar } from './components/RightSidebar/RightSidebar';
import { Sidebar } from './components/Sidebar/Sidebar';
import { MainPage } from './pages/MainPage';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Sidebar></Sidebar>
      <MainPage></MainPage>
      <RightSidebar></RightSidebar>
      <Footer></Footer>
    </div>
  );
}

export default App;
