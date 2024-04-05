import styled from '@emotion/styled';
import React, { ChangeEvent } from 'react';

interface Props {
  id: string;
  checked: boolean;
  onChange: (value: boolean) => void;
}

const Toggle = ({ id, checked, onChange }: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };

  return (
    <Container>
      <CheckBox
        id={id}
        type="checkbox"
        checked={checked}
        onChange={handleChange}
      ></CheckBox>
      <Slider
        htmlFor={id}
        sliderColor={checked ? '#fcd034' : '#ffffff'}
      ></Slider>
    </Container>
  );
};

export default Toggle;

const Container = styled.div`
  position: relative;
  width: 50px;
  height: 25px;
`;
const Slider = styled.label<{ sliderColor: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 25px;
  border-radius: 25px;
  background-color: var(--gray300);
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;
  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    margin: 2.5px;
    background: ${({ sliderColor }) => sliderColor};
    transition: 0.2s;
  }
`;

const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: 0px;
  transition: background-color 0.2s ease-in-out;
  &:checked + label {
    background: var(--bg);
    &::after {
      margin-left: 27.5px;
    }
  }
`;
