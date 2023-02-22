import './App.css';
import { Footer } from './components/Footer/Footer';
import { AuthHeader } from './components/Header/AuthHeader';
import { RightSidebar } from './components/RightSidebar/RightSidebar';
import { Sidebar } from './components/Sidebar/Sidebar';
import { MainPage } from './pages/MainPage';
// import { DetailPage } from './pages/DetailPage';

function App() {
  return (
    <div className="App">
      <AuthHeader></AuthHeader>
      <div className="main__flex">
        <Sidebar></Sidebar>
        <MainPage></MainPage>
        {/* <DetailPage></DetailPage> */}
        <RightSidebar></RightSidebar>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
