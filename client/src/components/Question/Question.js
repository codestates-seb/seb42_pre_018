import './question.css';

const Question = () => {
  return (
    <>
      <div className="question d-flex">
        <div className="question-stats d-flex">
          <div className="stats-item">0 votes</div>
          <div className="stats-item">0 answers</div>
          <div className="stats-item">2 views</div>
        </div>
        <div className="question-content">
          <h3>What plugin versions for Android Project are not compatible</h3>
          <div className="question-summary">
            enter image description hereHere is my build graddle for buildscript
            Top-level build enter image description hereHere is my build graddle
            for buildscript Top-level build enter image description hereHere is
            my build graddle for buildscript Top-level build
          </div>
          <div className="question-meta d-flex">
            <div className="avatar-wrapper">
              {/* 여기에 아바타 이미지 삽입 */}
            </div>
            <div className="username">username</div>
            <div className="time">asked 1 min ago</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Question;
