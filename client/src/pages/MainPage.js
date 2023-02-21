/* eslint-disable jsx-a11y/anchor-is-valid */
import './mainpage.css';
import { BiFilter } from 'react-icons/bi';
import Pagination from '../components/Pagination/Pagination';
import QuestionSummary from '../components/QuestionSummary/QuestionSummary';

export const MainPage = () => {
  return (
    <>
      <main>
        <div className="title d-flex">
          <h1>All Questions</h1>
          <div>
            <button>Ask Question</button>
          </div>
        </div>
        <div className="topbar d-flex">
          <div className="number d-flex">
            <div>23,507,409 questions</div>
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
          <QuestionSummary></QuestionSummary>
        </div>
        <div className="pagination">
          <Pagination></Pagination>
        </div>
      </main>
    </>
  );
};
