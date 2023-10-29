import { css, styled } from 'styled-components';

export const ModalWrapper = styled.section`
  position: relative;
  z-index: 9999;
  padding: 0;

  & > :first-child > :first-child {
    width: 100%;
  }
`;
export const Contents = styled.section`
  padding: 0;
  fieldset {
    border: none;
    & > legend {
      display: none;
    }
    & > span {
      padding: 10px 3.3% 10px 0;
    }
  }
`;

export const TagsFieldset = styled.fieldset`
  display: flex;
  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px 4px;
    padding: 8px 14px;
    min-height: 45px;
    border-bottom: solid 1px ${({ theme }) => theme.point};
    .no-tags {
      padding: 2px 0;
      color: ${({ theme }) => theme.textInfo};
    }
    &__button {
      padding: 6px 8px;
      border-radius: 15px;
      background: #fff;
      box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.08);
      &::after {
        content: 'x';
        display: inline-block;
        padding-left: 6px;
        color: ${({ theme }) => theme.point};
      }
    }
  }
  .wrapper {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 10px;
  }
`;

const checkBoxLine = css`
  content: '';
  display: block;
  width: 69px;
  height: 1px;
  background-color: ${({ theme }) => theme.basicGray};
  position: absolute;
  left: 50%;
  top: 15px;
  transform: translateX(calc(-100% - 15px));
`;

export const StatusFieldset = styled.fieldset`
  display: flex;
  .wrapper {
    flex-grow: 1;
    flex-shrink: 1;
    & > ul {
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      width: 250px;
      padding: 8px;
      & > li {
        display: inline-block;
        input {
          opacity: 0;
          &:focus + label {
            border: solid 2px #000;
          }
        }
        label {
          display: flex;
          flex-direction: column;
          align-items: center;
          box-sizing: border-box;
          border-radius: 4px;
          border: solid 2px transparent;
          padding: 4px;
          span {
            padding: 4px 0;
            font-family: ${({ theme }) => theme.fontEB};
          }
          span + span {
            font-size: 18px;
          }
          &.keep {
            span:not(:last-child) {
              color: ${({ theme }) => theme.point2Line};
            }
          }
          &.keep-going {
            position: relative;
            span:not(:last-child) {
              color: ${({ theme }) => theme.point2};
            }
            &::before {
              ${checkBoxLine}
            }
            &.line {
              &::before {
                background-color: ${({ theme }) => theme.point2};
              }
            }
          }
          &.read {
            position: relative;
            span:not(:last-child) {
              color: ${({ theme }) => theme.point};
            }
            &::before {
              ${checkBoxLine}
            }
            &.line {
              &::before {
                background-color: ${({ theme }) => theme.point};
              }
            }
          }
        }
      }
    }
  }
`;
