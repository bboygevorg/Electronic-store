import styled from "styled-components";


export const Input = styled.input`
    width: 80%;
    padding: 10px;
    border-radius: 10px 0 0 10px;
    border: 1px solid;
    border-color: ${(props) => props.borderColor};
    color: ${(props) => props.color};
    background-color: inherit;
    outline: none;
    border-right: none;
    :hover {
        border-color: #d1d5db;
        transition: 0.2s ease-in-out;
        
    }

    :hover + Button {
        background-color: #3598CC;
        border-color: #3598CC;
        transition: 0.2s ease-in-out
    } 

    :focus {
        border-color: #1E75A3;
        transition: 0.1s ease-in-out;
    }

    :focus + Button {
        background-color: #1E75A3;
        border-color: #1E75A3;
        transition: 0.1s ease-in-out;
    }
`;

export const Button = styled.button`
    width: 2.5rem;
    height: 2.44rem;
    background-color:  ${(props) => props.buttonColor};
    border: 1px solid;
    border-color: ${(props) => props.borderColor};
    border-radius: 0 8px 8px 0;
    text-align: center;
    cursor: pointer;
    vertical-align: middle;
    margin-bottom: 3.2px;
    position: relative;
`;

export const SectionCart = styled.section`
  position: absolute;
  width: ${(props) => props.width};
  background-color: rgba(255, 255, 255, 0.7);
  transform: translateY(-9rem);
  transition: 50s;
  padding: 1.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonCart = styled.button`
  padding: ${(props) => props.padding};

  :focus {
    padding: ${(props) => props.paddingFocus};

  }
`;
