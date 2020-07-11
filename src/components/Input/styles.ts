import styled from 'styled-components';


interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  hasError?: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  background: #232129;
  border-radius: 10px;
  padding: 14px 14px;

  display: flex;
  align-items: center;

  border: 2px solid ${(props) => {
    if (props.isFocused) return '#ff9000';
    if (props.hasError) return '#c53030';
    return '#232129';
  }};

  color: ${(props) => props.isFocused || props.isFilled
    ? '#ff9000'
    : '#666360'};

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4ede8;

    &::placeholder {
      color: #666360;
    }
  }

  /* Icon */
  svg:first-child {
    margin-right: 16px;
  }

  /* Error Icon */
  svg:last-child {
    color: #c53030;
  }
`;


// Error message
export const Error = styled.span`
  font-size: 14px;
  width: 100%;
  padding-left: 24px;
  text-align: left;
  margin-top: 4px;
  margin-bottom: 6px;

  color: #c53030;

`;