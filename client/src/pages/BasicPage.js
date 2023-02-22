import { RightSidebar } from '../components/RightSidebar/RightSidebar';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { MainPage } from '../pages/MainPage';

export const BasicPage = () => {
  return (
    <div className="main__flex">
      <Sidebar></Sidebar>
      <MainPage></MainPage>
      <RightSidebar></RightSidebar>
    </div>
  );
};
