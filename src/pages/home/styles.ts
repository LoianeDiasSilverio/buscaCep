import styled from "styled-components";

export const Principal = styled.div`
  display: grid;
  justify-content: center;
  justify-items: center;
  .emptyIcon {
    right: 20px;
    top: 15px;
    cursor: pointer;
    font-size: 100px;
  }
`;

export const Container = styled.div`
  display: grid;
  border: 1px solid black;
  border-radius: 10px;
  padding: 15px;
`;

export const ContainerFilter = styled.div`
  width: 100%;
  display: grid;
  gap: 10px;
`;

export const ContainerContent = styled.div`
  display: grid;
  gap: 5px;
  margin-top: 10px;
  justify-content: center;
`;

export const Button = styled.button`
  background-color: #383d43;
  color: white;
`;

export const TypograpyBold = styled.b`
  margin-right: 5px;
`;

export const ContainerTypography = styled.span`
  .copyBtn {
    right: 20px;
    top: 15px;
    cursor: pointer;
  }
`;
