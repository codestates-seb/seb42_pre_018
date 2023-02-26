import styles from './App.module.css';
import classNames from 'classnames/bind';
import { AuthHeader } from './components/Header/AuthHeader';
import { AskPage } from './pages/AskPage';
import { Routes, Route } from 'react-router-dom';
import { DetailPage } from './pages/DetailPage';
import LayoutWrapper from './components/LayoutWrapper/LayoutWrapper';
import { MainPage } from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import { Footer } from './components/Footer/Footer';
import { ErrorPage } from './pages/ErrorPage';
import { EditPage } from './pages/EditPage';

function App() {
  const cx = classNames.bind(styles);
  return (
    <div className={cx('App')}>
      <AuthHeader></AuthHeader>
      <Routes>
        {/* 메인 페이지 (질문 목록 페이지) */}
        <Route
          path="/"
          element={
            <LayoutWrapper page="home">
              <MainPage />
            </LayoutWrapper>
          }
        ></Route>
        {/* 메인 페이지 (questions 클릭시) */}
        <Route
          path="/questions/all"
          element={
            <LayoutWrapper page="questions">
              <MainPage />
            </LayoutWrapper>
          }
        ></Route>
        {/* 질문 상세 페이지 */}
        <Route
          path="/questions/:id"
          element={
            <LayoutWrapper>
              <DetailPage />
            </LayoutWrapper>
          }
        ></Route>
        {/* 질문 작성 페이지 */}
        <Route
          path="/questions/ask"
          element={
            <>
              <AskPage />
              <Footer />
            </>
          }
        ></Route>
        {/* 질문 수정 페이지 */}
        <Route path="/questions/:id/edit" element={<EditPage />}></Route>
        {/* 로그인 페이지 */}
        <Route path="/login" element={<LoginPage />}></Route>
        {/* 회원가입 페이지 */}
        <Route path="/signup" element={<SignupPage />}></Route>
        {/* 에러 페이지 */}
        <Route path="/error" element={<ErrorPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
