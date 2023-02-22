import './questionsummary.css';
import PropTypes from 'prop-types';

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
  return (
    <>
      <div className="question d-flex">
        <div className="question-stats d-flex">
          <div className="stats-item">0 votes</div>
          <div className="stats-item">0 answers</div>
          <div className="stats-item">{question_views} views</div>
        </div>
        <div className="question-content">
          <h3>{question_title}</h3>
          <div className="question-summary">{question_main}</div>
          <div className="question-meta d-flex">
            <div className="avatar-wrapper">
              {/* 여기에 아바타 이미지 삽입 */}
            </div>
            <div className="username">{question_writer_name}</div>
            <div className="time">asked 1 min ago</div>
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
