import './App.css';
import { Footer } from './components/Footer/Footer';
import { AuthHeader } from './components/Header/AuthHeader';
import { AskPage } from './pages/AskPage';
import { Routes, Route } from 'react-router-dom';
import { DetailPage } from './pages/DetailPage';
import SidebarWrapper from './components/SidebarWrapper/SidebarWrapper';
import { MainPage } from './pages/MainPage';

function App() {
  return (
    <div className="App">
      <AuthHeader></AuthHeader>
      <Routes>
        {/* 메인 페이지 (질문 목록 페이지) */}
        <Route
          path="/"
          element={
            <SidebarWrapper>
              <MainPage />
            </SidebarWrapper>
          }
        ></Route>
        {/* 질문 상세 페이지 */}
        <Route
          path="/detail"
          element={
            <SidebarWrapper>
              <DetailPage />
            </SidebarWrapper>
          }
        ></Route>
        {/* 질문 작성 페이지 */}
        <Route path="/ask" element={<AskPage />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
