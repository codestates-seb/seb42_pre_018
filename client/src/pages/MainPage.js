/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from './mainpage.module.css';
import classNames from 'classnames/bind';
import { BiFilter } from 'react-icons/bi';
import Pagination from '../components/Pagination/Pagination';
import QuestionSummary from '../components/QuestionSummary/QuestionSummary';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { allQuestionsData } from '../api/questionApi';

export const MainPage = () => {
  const cx = classNames.bind(styles);

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchAllQuestions = async () => {
      try {
        const res = await allQuestionsData();
        setQuestions(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllQuestions();
  }, []);

  return (
    <main>
      <div className={cx('title', 'd-flex')}>
        <h1>All Questions</h1>
        <div>
          <Link to="/ask">
            <button>Ask Question</button>
          </Link>
        </div>
      </div>
      <div className={cx('topbar', 'd-flex')}>
        <div className={cx('number', 'd-flex')}>
          <div>{questions.length} questions</div>
        </div>
        <div className={cx('d-flex')}>
          <div className={cx('navbar', 'd-flex')}>
            <a href="#" className={cx('left-navbar')}>
              Newest
            </a>
            <a href="#">Active</a>
            <a href="#">Bountied</a>
            <a href="#">Unanswered</a>
            <a href="#" className={cx('right-navbar')}>
              More
            </a>
          </div>
          <div>
            {/* 필터 아이콘 추가해야 함 */}
            <button className={cx('d-flex', 'filter-btn')}>
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
      <div className={cx('questions')}>
        {questions.map((question) => {
          return (
            <QuestionSummary question={question} key={question.question_id} />
          );
        })}
      </div>
      <div className={cx('pagination')}>
        <Pagination></Pagination>
      </div>
    </main>
  );
};
