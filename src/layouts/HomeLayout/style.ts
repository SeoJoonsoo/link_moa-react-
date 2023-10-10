import { styled } from 'styled-components';

const tablistLinkHeight = '36px';
const tabMaxZIndex = 10;

export const PageSection = styled.section`
  .name-wrapper {
    ul {
      display: flex;
      li {
        a {
          display: flex;
          justify-content: center;
          align-items: center;
          box-sizing: border-box;
          width: 70px;
          height: ${tablistLinkHeight};
          padding: 8px 10px;
          background-color: ${({ theme }) => theme.basicGray};
          border-radius: 7px 7px 0 0;
          box-shadow: 6px 6px 12px 0px rgba(0, 0, 0, 0.12);
          position: relative;
          &::after {
            content: '';
            display: block;
            position: absolute;
            bottom: 0;
            right: -7px;
            width: 0px;
            height: 0px;
            border-top: 0px solid transparent;
            border-bottom: calc(${tablistLinkHeight} - 7px) solid ${({ theme }) => theme.basicGray};
            border-right: 7px solid transparent;
            border-left: 7px solid ${({ theme }) => theme.basicGray};
          }
          &.keep {
            z-index: 2;
          }
          &.read {
            z-index: 1;
            box-shadow: unset;
          }
          &.all {
            z-index: 1;
            box-shadow: unset;
          }
        }
        &.left {
          a.active {
            background-color: ${({ theme }) => theme.white};
            z-index: ${tabMaxZIndex};
            box-shadow: 6px 6px 12px 0px rgba(0, 0, 0, 0.12);
            &::after {
              border-bottom-color: ${({ theme }) => theme.white};
              border-left-color: ${({ theme }) => theme.white};
            }
          }
        }
        &.right {
          flex-grow: 1;
          flex-shrink: 1;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          & + & {
            flex-grow: 0;
            flex-shrink: 0;
          }
          a {
            box-shadow: -6px 6px 12px 0px rgba(0, 0, 0, 0.12);
            &::after {
              left: -7px;
              border-top: 0px solid transparent;
              border-bottom: calc(${tablistLinkHeight} - 7px) solid ${({ theme }) => theme.basicGray};
              border-right: 7px solid ${({ theme }) => theme.basicGray};
              border-left: 7px solid transparent;
            }
            &.active {
              background-color: ${({ theme }) => theme.white};
              z-index: ${tabMaxZIndex};
              box-shadow: 0px 6px 12px 0px rgba(0, 0, 0, 0.12);
              &::after {
                border-bottom-color: ${({ theme }) => theme.white};
                border-right-color: ${({ theme }) => theme.white};
              }
            }
          }
        }
      }
    }
  }
  .content-wrapper {
    background-color: ${({ theme }) => theme.white};
    position: relative;
    z-index: ${tabMaxZIndex};
    padding: 10px 0;
    box-shadow: 2px 4px 4px 0px rgba(0, 0, 0, 0.08);
  }
`;
