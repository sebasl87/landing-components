import React from "react";
import styled from "@emotion/styled";

interface ParcelsList {
  imgUrl: string;
  title: string;
  description: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  handleClick: () => void;
}

const BoxContainer = styled.div`
  width: 100%;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  margin-bottom: 18px;
  box-shadow: 0px 3px 14px 2px rgba(152, 167, 204, 0.12);
  @media (min-width: 600px) {
    max-width: 324px;
  }
`;

const RowImage = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #f4f4ff;
  height: 132px;
  @media (min-width: 600px) {
    height: 151px;
  }
`;

const RowTitle = styled.div`
  display: flex;
  width: 100%;
  justify-content: left;
  font-family: Inter, sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: #233362;
  margin-top: 11px;
  padding-left: 20px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  @media (min-width: 600px) {
    padding-right: 16px;
    padding-left: 16px;
  }
`;

const RowText = styled.div`
  display: flex;
  padding-left: 20px;
  padding-right: 8px;
  font-family: Inter, sans-serif;
  font-size: 14px;
  line-height: 17px;
  color: rgba(35, 51, 98, 0.5);
  text-align: left;
  margin-top: 4px;
  margin-bottom: 16px;
  font-weight: 400;
  @media (min-width: 600px) {
    margin-bottom: 24px;
    padding-right: 16px;
    padding-left: 16px;
  }
`;

const Image = styled.img`
  width: 190px;
  @media (min-width: 600px) {
    width: 209px;
  }
`;

const BoxImage: React.FC<ParcelsList> = ({
  imgUrl,
  title,
  description,
  handleClick
}) => {
  return (
    <BoxContainer>
      <RowImage onClick={handleClick}>
        <Image src={imgUrl} />{" "}
      </RowImage>
      <RowTitle>{title}</RowTitle>
      <RowText>{description}</RowText>
    </BoxContainer>
  );
};

export default BoxImage;
