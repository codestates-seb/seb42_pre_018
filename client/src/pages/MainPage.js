/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from './mainpage.module.css';
import { BiFilter } from 'react-icons/bi';
import Pagination from '../components/Pagination/Pagination';
import QuestionSummary from '../components/QuestionSummary/QuestionSummary';
import questions from '../assets/data/questions.json';
import { Link } from 'react-router-dom';

export const MainPage = () => {
  return (
    <>
      <main>
        <div className="title d-flex">
          <h1>All Questions</h1>
          <div>
            <Link to="/ask">
              <button>Ask Question</button>
            </Link>
          </div>
        </div>
        <div className="topbar d-flex">
          <div className="number d-flex">
            <div>{questions.length} questions</div>
          </div>
          <div className="d-flex">
            <div className="navbar d-flex">
              <a href="#" className="left-navbar">
                Newest
              </a>
              <a href="#">Active</a>
              <a href="#">Bountied</a>
              <a href="#">Unanswered</a>
              <a href="#" className="right-navbar">
                More
              </a>
            </div>
            <div>
              {/* 필터 아이콘 추가해야 함 */}
              <button className="d-flex filter-btn">
                <BiFilter
                  size="18"
                  viewBox="0 0 24 24"
                  color="var(--powder-700)"
                />
                <span>&nbsp;Filter</span>
              </button>
            </div>
          </div>
        </div>
        <div className="questions">
          {questions.map((question) => {
            return (
              <QuestionSummary question={question} key={question.question_id} />
            );
          })}
        </div>
        <div className="pagination">
          <Pagination></Pagination>
        </div>
      </main>
    </>
  );
};
