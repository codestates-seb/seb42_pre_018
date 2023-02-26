import { useLocation } from 'react-router-dom';
import { EditPage } from './EditPage';
import { DetailPage } from './DetailPage';
import LayoutWrapper from '../components/LayoutWrapper/LayoutWrapper';

const QuestionPage = (props) => {
  const location = useLocation();
  const component = location.state.component;
  console.log(location);
  return (
    <>
      {component === 'edit' ? (
        <EditPage />
      ) : (
        <LayoutWrapper>
          <DetailPage />
        </LayoutWrapper>
      )}
    </>
  );
};

export default QuestionPage;
