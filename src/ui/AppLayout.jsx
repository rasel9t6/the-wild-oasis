import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import styled from 'styled-components';
import { useState } from 'react';
const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: ${({ isSidebarOpen }) =>
    isSidebarOpen ? '26rem 1fr' : '12rem 1fr'};
  grid-template-rows: auto 1fr;
  grid-template-areas:
    'header header'
    'sidebar main';
  height: 100vh;
  transition: grid-template-columns 0.3s ease; 
`;
const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow: scroll;
`;
const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;
const AppLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const handleToggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <StyledAppLayout isSidebarOpen={isSidebarOpen}>
      <Header />
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        handleToggleSidebar={handleToggleSidebar}
      />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
};

export default AppLayout;
