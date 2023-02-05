import styled from "styled-components";

export const DivCard = styled.div`
  display: flex;
`;

export const DivInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;

  padding: 10px;
`;

export const DivImg = styled.div`
  width: 80px;
  background: #e0e0e0;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImgCard = styled.img`
  width: 70px;
`;

export const LiCard = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
`;

export const ButtonRemove = styled.button`
  border: none;
  background: #f5f5f5;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #bdbdbd;
  height: 40px;
`;

export const TitleProduct = styled.h2`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  color: #333333;
`;

export const CategoryProduct = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #828282;
`;
