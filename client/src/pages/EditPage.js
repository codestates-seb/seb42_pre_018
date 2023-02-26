/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */

import { useEffect, useState } from 'react';
import styles from './AskPage.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { singleQuestionData, editQuestion } from '../api/questionApi';

export const EditPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    main: '',
  });
  const { title, main } = formData;
  const id = useParams().id;

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const res = await singleQuestionData(id);
        setFormData({ title: res.data[0].question_title, main: res.data[0].question_main })
      } catch (err) {
        console.log(err);
      }
    }
    fetchQuestion();
  }, [])

  const handleChange = (e) => {
    setFormData((prev) => ({...formData, [e.target.name]: e.target.value}));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      await editQuestion({ title, main }, id);
      navigate("/questions/" + id);
    }catch(err){
      console.log(err)
    }
  }

  return (
    <main className={styles.askpage}>
      <div className={styles.askpage__wrap}>
        <div className={styles.askpage__header}>
          <h1>Ask a public question</h1>
        </div>
        <div className={styles.askpage__tip}>
          <h3>Writing a good question</h3>
          <p>
            You’re ready to ask a programming-related question and this form
            will help guide you through the process.
          </p>
          <p>
            Looking to ask a non-programming question? See the topics here to
            find a relevant site.
          </p>
          <h4>Steps</h4>
          <ul>
            <li>Summarize your problem in a one-line title.</li>
            <li>Describe your problem in more detail.</li>
            <li>Describe what you tried and what you expected to happen.</li>
            <li>
              Add “tags” which help surface your question to members of the
              community.
            </li>
            <li>Review your question and post it to the site.</li>
          </ul>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={styles.askpage__form}>
            <h2>Title</h2>
            <p>
              Be specific and imagine you’re asking a question to another
              person.
            </p>
            <input type="text" name="title" id="title" value={title} onChange={handleChange} required></input>
          </div>
          <div className={styles.askpage__form}>
            <h2>What are the details of your problem?</h2>
            <p>
              Introduce the problem and expand on what you put in the title.
              Minimum 20 characters.
            </p>
            <input type="text" name="main" id="main" value={main} onChange={handleChange} required></input>
            <button className={styles.askpage__btn}>
              Review your question
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};
