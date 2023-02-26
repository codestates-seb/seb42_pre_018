/* eslint-disable prettier/prettier */
import styles from './questionsummary.module.css';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const QuestionSummary = ({
  question: {
    question_id,
    question_title,
    question_main,
    question_views,
    question_attachFile,
    question_time,
    question_closed,
    question_writer_email,
    question_writer_name,
  },
}) => {
  const cx = classNames.bind(styles);
  return (
    <>
      <div className={cx('question', 'd-flex')}>
        <div className={cx('question-stats', 'd-flex')}>
          <div className={cx('stats-item')}>0 votes</div>
          <div className={cx('stats-item')}>0 answers</div>
          <div className={cx('stats-item')}>{question_views} views</div>
        </div>
        <div className={cx('question-content')}>
          <Link
            to={`/questions/${question_id}`}
          >
            <h3>{question_title}</h3>
          </Link>

          <div className={cx('question-summary')}>{question_main}</div>
          <div className={cx('question-meta', 'd-flex')}>
            <div className={cx('avatar-wrapper')}>
              {/* 여기에 아바타 이미지 삽입 */}
            </div>
            <div className={cx('username')}>{question_writer_name}</div>
            <div className={cx('time')}>asked 1 min ago</div>
          </div>
        </div>
      </div>
    </>
  );
};

QuestionSummary.propTypes = {
  question: PropTypes.object.isRequired,
};

export default QuestionSummary;
