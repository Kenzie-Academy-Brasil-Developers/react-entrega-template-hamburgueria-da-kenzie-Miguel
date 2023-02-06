import styled from "styled-components";

export const DivContainer = styled.div`
  max-width: 363px;
  width: 363px;
  height: 180px;

  background: #f5f5f5;

  border-top: solid 3px #e0e0e0;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const DivValueInfo = styled.div`
  max-width: 343px;
  width: 343px;
  height: 60px;

  display: flex;
  justify-content: space-between;
  margin: 20px auto;
  background: #f5f5f5;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const TotalInfo = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
`;

export const TotalPrice = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;

  color: #828282;
`;

export const ButtonRemove = styled.button`
  width: 343px;
  height: 60px;

  background: #e0e0e0;
  border: 2px solid #e0e0e0;
  border-radius: 8px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;

  color: #828282;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const DivButton = styled.div`
  max-width: 343px;
  width: 343px;

  margin: 0 auto;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;
