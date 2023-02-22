import { Footer } from '../components/Footer/Footer';
import { AuthHeader } from '../components/Header/AuthHeader';
import { AskPage } from '../components/AskPage/AskPage';

export const AskQuestion = () => {
  return (
    <div className="App">
      <AuthHeader></AuthHeader>
      <AskPage></AskPage>
      <Footer></Footer>
    </div>
  );
};
