import './App.css';
import { AuthHeader } from './components/Header/AuthHeader';
import { AskPage } from './pages/AskPage';
import { Routes, Route } from 'react-router-dom';
import { DetailPage } from './pages/DetailPage';
import LayoutWrapper from './components/LayoutWrapper/LayoutWrapper';
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
            <LayoutWrapper>
              <MainPage />
            </LayoutWrapper>
          }
        ></Route>
        {/* 질문 상세 페이지 */}
        <Route
          path="/detail"
          element={
            <LayoutWrapper>
              <DetailPage />
            </LayoutWrapper>
          }
        ></Route>
        {/* 질문 작성 페이지 */}
        <Route path="/ask" element={<AskPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
