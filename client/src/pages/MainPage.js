export const MainPage = () => {
  return (
    <>
      <div id="mainbar">
        <div>
          <h1>All Questions</h1>
          <div>
            <button>Ask Question</button>
          </div>
        </div>
        <div>
          <div>23,507,409 questions</div>
          <div>
            <div>tab</div>
            <div>
              <button>Filter</button>
            </div>
          </div>
        </div>
        <div>
          {/* questions */}
          {/* 여기에 map 사용 */}
          <div>
            <div>
              <div>0 votes</div>
              <div>0 answers</div>
              <div>2 views</div>
            </div>
            <div>
              <h2>question title</h2>
              <div>question content</div>
              <div>
                <div>tag</div>
                <div>user</div>
                <div>time</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>pagination-left</div>
          <div>pagination-right</div>
        </div>
      </div>
    </>
  );
};
