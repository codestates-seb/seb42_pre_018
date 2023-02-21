import './App.css';
import { Footer } from './components/Footer/Footer';
import { AuthHeader } from './components/Header/AuthHeader';
import { RightSidebar } from './components/RightSidebar/RightSidebar';
import { Sidebar } from './components/Sidebar/Sidebar';
import { MainPage } from './pages/MainPage';

function App() {
  return (
    <div className="App">
      <AuthHeader></AuthHeader>
      <Sidebar></Sidebar>
      <MainPage></MainPage>
      <RightSidebar></RightSidebar>
      <Footer></Footer>
    </div>
  );
}

export default App;
