import styled from "styled-components";

export const LiCard = styled.li`
  max-width: 300px;
  width: 100%;
  height: 346px;

  border: 2px solid #e0e0e0;
  border-radius: 5px;
  background: #ffffff;
`;

export const DivImg = styled.div`
  max-width: 300px;
  width: 100%;
  height: 150px;

  display: flex;
  justify-content: center;

  background: #f5f5f5;
`;

export const DivInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  margin-top: 26px;
  padding: 0 0 0 21px;
`;

export const ButtonAddProduct = styled.button`
  width: 106px;
  height: 40px;

  background: #27ae60;
  border: 2px solid #27ae60;
  border-radius: 8px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
`;

export const Title = styled.h2`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;

  color: #333333;
`;

export const Category = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;

  color: #828282;
`;

export const Price = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;

  color: #27ae60;
`;
