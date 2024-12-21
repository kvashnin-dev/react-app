import styled, { css } from 'styled-components';

const disabledCss = css`
  background-color: #e2e2e2;
  border-width: 0px;
  cursor: not-allowed;
`;

const checkedCss = css`
  border-color: #b5b5ba;
  background-color: #b5b5ba;
  background-image: url(assets/images/svg/todo-done.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 12px;
`;

export const CheckboxContainer = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid #c4c4c4;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  ${({ disabled }) => (disabled ? disabledCss : '')};
  ${({ checked }) => (checked ? checkedCss : '')};

  &:hover {
    border-color: ${({ disabled, checked }) =>
      !disabled && !checked ? '#888888' : ''};
  }
`;

export const TodoItemCheckbox = ({ disabled, checked, onClick }) => {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return <CheckboxContainer disabled={disabled} checked={checked} onClick={handleClick} />;
};
