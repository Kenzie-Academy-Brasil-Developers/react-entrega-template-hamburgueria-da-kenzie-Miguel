import styled from "styled-components";

export const DivProductCart = styled.div`
  display: flex;
  gap: 65px;
  max-width: 1500px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1000px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;
