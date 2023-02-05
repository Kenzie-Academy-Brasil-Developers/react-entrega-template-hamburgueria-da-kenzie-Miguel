import styled from "styled-components";

export const UlContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  max-width: 960px;
  width: 100%;
  gap: 20px;
  margin-left: 40px;
  margin-top: 31px;
  justify-content: center;

  @media (max-width: 500px) {
    margin-left: 50px;
  }
`;
