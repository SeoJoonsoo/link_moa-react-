import { css, styled } from 'styled-components';

export const Form = styled.form`
  display: flex;
  width: 100%;
  .input-wrapper {
    flex-grow: 1;
    flex-shrink: 1;
    position: relative;
    input {
      width: 100%;
      height: 100%;
      padding: ${(props) => (props.className?.match('isValue') ? '0.53rem 34px 0.53rem 0.8rem' : '0.53rem 0.8rem')};
      border: none;
      outline: none;
      &::placeholder {
        color: ${({ theme }) => theme.textLight};
      }
      &::-webkit-input-placeholder {
        color: ${({ theme }) => theme.textLight};
      }
      &:-ms-input-placeholder {
        color: ${({ theme }) => theme.textLight};
      }
      &::placeholder {
        color: ${({ theme }) => theme.textLight};
      }
      &::-webkit-input-placeholder {
        color: ${({ theme }) => theme.textLight};
      }
      &:-ms-input-placeholder {
        color: ${({ theme }) => theme.textLight};
      }
    }
    .all-delete-button {
      display: ${(props) => (props.className?.match('isValue') ? 'block' : 'none')};
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      padding: 8px;
      font-size: 0;
      background-color: unset;
    }
  }
  button {
    flex-grow: 0;
    flex-shrink: 0;
    background-color: ${({ theme }) => theme.basicGray};
    transition: background 0.2s ease-in-out;
    ${(props) =>
      props.className?.match('point-button') &&
      css`
        font-family: ${({ theme }) => theme.pointFont};
        color: ${({ theme }) => theme.white};
        font-size: 20px;
        padding: 8px 10px;
      `}
    ${(props) =>
      props.className?.match('isValue') &&
      css`
        background-color: ${({ theme }) => theme.point};
        color: ${({ theme }) => theme.white};
        font-size: 20px;
        padding: 8px 10px;
      `}
  }
`;
