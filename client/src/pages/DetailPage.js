import styles from './DetailPage.module.css';
import dummyImg from '../assets/images/dummy__profile__img01.jpg';

export const DetailPage = () => {
  return (
    <main className={styles.detailpage}>
      <div className={styles.detailpage__header}>
        <div className={styles.detailpage__header__wrap}>
          <h1>Detail Page Name</h1>
          <div className={styles.detailpage__info}>
            <p>
              Asked&nbsp;
              <span>9 days ago</span>
            </p>
            <p>
              Viewed&nbsp;
              <span>91 times</span>
            </p>
          </div>
        </div>
        <button className={styles.detailpage__askbtn}>Ask Question</button>
      </div>
      <div className={styles.detailpage__post}>
        <div className={styles.detailpage__voting}>
          <p>UP</p>
          <p>1</p>
          <p>DWN</p>
        </div>
        <div className={styles.detailpage__content}>
          <p>
            honey cresent twinkle ice hello ice banana flutter cherish cream
            vanilla hello heimish ideale vanilla hello charming carnival
            fascinating fabulous ideale miracle like honey serendipity illusion
            adolescence girlish fascinating girlish florence ideale stella
            masquerade lucid aurora droplet vanilla apple florence grapes blush
            lovesick apple eunoia lucid carnival ideale droplet seraphic.
            <br />
            <br />
            ice adorable kitten heimish adorable serendipity serendipity kitten
            lovable droplet honey fascinating aurora ideale lovable blossom
            florence flora melody adorable sunrise computer miracle flutter
            flutter miracle twilight sunrise lucy girlish world heimish you iris
            sunrise lucid adorable adolescence way baby lucid grapes hello lucid
            droplet seraphic computer girlish world flutter.
            <br />
            <br />
            miracle flora heimish girlish like hello fascinating way girlish
            serendipity iris moonlight girlish honey shine hello you marshmallow
            iris lovable apple lucy adorable bijou blossom adolescence lovesick
            honey milky iris iris pure twinkle lovable masquerade blush droplet
            kitten computer adolescence sunrise apple serendipity like flutter
            marshmallow like florence grapes.
          </p>
          <div className={styles.detailpage__menu}>
            <div>
              <button>Share</button>
              <button>Edit</button>
              <button>Delete</button>
            </div>
            <div
              className={`${styles.detailpage__asked} ${styles.detailpage__asked__post}`}
            >
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
              kitten computer adolescence sunrise apple serendipity like flutter
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
              kitten computer adolescence sunrise apple serendipity like flutter
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
