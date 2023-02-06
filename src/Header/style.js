import styled from "styled-components";

export const HeaderStyle = styled.header`
  width: 100%;
  height: 80px;
  background: #f5f5f5;

  @media (max-width: 500px) {
    height: 139px;
  }
`;

export const NavHeader = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  height: 80px;

  @media (max-width: 500px) {
    height: 139px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`;
