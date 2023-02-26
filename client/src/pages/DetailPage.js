/* eslint-disable react/prop-types */
import styles from './DetailPage.module.css';
import dummyImg from '../assets/images/dummy__profile__img01.jpg';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { singleQuestionData } from '../api/questionApi';

export const DetailPage = () => {
  const [question, setQuestion] = useState({});
  const params = useParams();
  const id = params.id;
  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const res = await singleQuestionData(id);
        setQuestion(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchQuestion();
  }, []);

  return (
    <main className={styles.detailpage}>
      <div className={styles.detailpage__header}>
        <div className={styles.detailpage__header__wrap}>
          <h1>{question.question_title}</h1>
          <div className={styles.detailpage__info}>
            <p>
              Asked&nbsp;
              <span>{question.question_time}</span>
            </p>
            <p>
              Viewed&nbsp;
              <span>{question.question_views} times</span>
            </p>
          </div>
        </div>
        <Link to="/ask">
          <button className={styles.detailpage__askbtn}>Ask Question</button>
        </Link>
      </div>
      <div className={styles.detailpage__post}>
        <div className={styles.detailpage__voting}>
          <p>UP</p>
          <p>1</p>
          <p>DWN</p>
        </div>
        <div className={styles.detailpage__content}>
          <p>{question.question_main}</p>
          <div className={styles.detailpage__menu}>
            <div>
              <button>Share</button>
              <Link to={`/questions/${id}/edit`}>
                <button>Edit</button>
              </Link>

              <button>Delete</button>
            </div>
            <div
              className={`${styles.detailpage__asked} ${styles.detailpage__asked__post}`}
            >
              <p>
                asked&nbsp;
                <span>{question.question_time}</span>
              </p>
              <div className={styles.detailpage__asked__img}>
                <img src={dummyImg} alt=""></img>
              </div>
              <strong>{question.question_writer_name}</strong>
            </div>
          </div>
          <div className={styles.detailpage__comment__wrap}>
            <p className={styles.detailpage__comment}>
              kitten computer adolescence sunrise apple serendipity like
              <span> - name Feb 14 at 5:22</span>
            </p>
            <button className={styles.detailpage__comment__btn}>
              Add a comment
            </button>
          </div>
        </div>
      </div>
      <div className={styles.detailpage__answer__count}>1 Answer</div>
      <div className={styles.detailpage__answer__wrap}>
        <div className={styles.detailpage__voting}>
          <p>UP</p>
          <p>1</p>
          <p>DWN</p>
        </div>
        <div className={styles.detailpage__answer}>
          <p>
            honey cresent twinkle ice hello ice banana flutter cherish cream
            vanilla hello heimish ideale vanilla hello charming carnival
          </p>
          <div className={styles.detailpage__menu}>
            <div>
              <button>Share</button>

              <button>Edit</button>
              <button>Delete</button>
            </div>
            <div className={styles.detailpage__asked}>
              <p>
                asked&nbsp;
                <span>Feb 11 at 17:39</span>
              </p>
              <div className={styles.detailpage__asked__img}>
                <img src={dummyImg} alt=""></img>
              </div>
              <strong>Name</strong>
            </div>
          </div>
          <div className={styles.detailpage__comment__wrap}>
            <p className={styles.detailpage__comment}>
              kitten computer adolescence sunrise apple serendipity like
              <span> - name Feb 14 at 5:22</span>
            </p>
            <button className={styles.detailpage__comment__btn}>
              Add a comment
            </button>
          </div>
        </div>
      </div>
      <div className={styles.detailpage__answer__editer}>
        <h3 className={styles.detailpage__answer__h3}>Your Answer</h3>
        <input className={styles.detailpage__answer__editer_input}></input>
        <button className={styles.detailpage__answer__postbtn}>
          Post Your Answer
        </button>
      </div>
    </main>
  );
};
