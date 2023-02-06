import styled from "styled-components";

export const DivTitle = styled.div`
  max-width: 365px;
  height: 65px;
  margin-top: 31px;

  background: #27ae60;
  border-radius: 5px 5px 0px 0px;

  @media (min-width: 1000px) {
    width: 365px;
  }
`;

export const TitleCart = styled.h2`
  padding: 20px 13px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: #ffffff;

  max-width: 365px;
`;

export const UlCart = styled.ul`
  max-width: 365px;

  background: #f5f5f5;
  border-radius: 0px 0px 5px 5px;

  @media (min-width: 1000px) {
    width: 365px;
  }
`;

export const DivGeneral = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin-left: 15px;
  margin-right: 15px;
`;

export const DivCartClean = styled.div`
  width: 100%;
  height: 158px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;

  background: #f5f5f5;
  border-radius: 0px 0px 5px 5px;
`;

export const CartClean = styled.h3`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
`;

export const AddProduct = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;

  color: #828282;
`;
