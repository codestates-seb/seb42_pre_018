/* eslint-disable react/prop-types */
// children props를 자꾸 에러먹여서 그냥 여기에만 비활성화시켜뒀습니다..
import { Sidebar } from '../Sidebar/Sidebar';
import { RightSidebar } from '../RightSidebar/RightSidebar';

const SidebarWrapper = ({ children }) => {
  return (
    <>
      <div className="main__flex">
        <Sidebar></Sidebar>
        {children}
        <RightSidebar></RightSidebar>
      </div>
    </>
  );
};

export default SidebarWrapper;
