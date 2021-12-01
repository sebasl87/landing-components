import React from "react";
import styled from "@emotion/styled";

export interface InputSearchProps {
  placeHolder: string;
}

const SearchButton = styled.img`
  width: 19px;
  height: 19px;
  margin-right: 8px;
`;

const ContainerInput = styled.div`
  display: flex;
  border-radius: 6px;
  border: 1px solid rgba(35, 51, 98, 0.23);
  background: #fff;
  align-items: center;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 12px;
  padding-bottom: 12px;
  :focus,
  :hover:not(:focus):not(:disabled) {
    border: solid 1px #233362;
  }
  @media (min-width: 600px) {
    width: 460px;
  }
`;

const Input = styled.input`
  line-height: 1.71;
  text-align: left;
  color: #233362;
  border: 0;
  outline: none;
  background-color: transparent;
  text-overflow: ellipsis;
  font-family: Inter, sans-serif;
  font-size: 16px;
  width: 100%;
  ::placeholder {
    line-height: 1.71;
    text-align: left;
    color: rgba(35, 51, 98, 0.5);
    border: none;
    @media (min-width: 600px) {
      text-align: center;
    }
  }
  @media (min-width: 600px) {
    width: 460px;
  }
`;

const InputSearch: React.FC<InputSearchProps> = ({
  placeHolder = "Buscar por nombre de paquetería..."
}) => {
  return (
    <>
      <ContainerInput>
        <SearchButton src="search.svg" />
        <Input type="text" placeholder={placeHolder} />
      </ContainerInput>
    </>
  );
};
export default InputSearch;
