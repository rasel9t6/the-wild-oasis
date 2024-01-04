import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import MainNav from './MainNav';
import ButtonIcon from './ButtonIcon';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1/-1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

const Sidebar = ({ isSidebarOpen, handleToggleSidebar }) => {
  return (
    <StyledSidebar isSidebarOpen={isSidebarOpen}>
      <ButtonIcon onClick={handleToggleSidebar}>
        {isSidebarOpen ? <FaAngleDoubleLeft /> : <FaAngleDoubleRight />}
      </ButtonIcon>
      {isSidebarOpen && <Logo />}
      <MainNav isSidebarOpen={isSidebarOpen} />
    </StyledSidebar>
  );
};

export default Sidebar;
