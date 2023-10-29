import { styled } from 'styled-components';

export const DropwdownWrapper = styled.div`
  position: relative;
  .dropdown__button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 0 0 10px;
    background-color: ${({ theme }) => theme.white};
    font-size: 15px;
    .placeholder {
      color: ${({ theme }) => theme.textLight};
    }
    img {
      width: 36px;
      height: 36px;
    }
  }
  .dropwdown__list {
    position: absolute;
    z-index: 9;
    width: 100%;
    overflow-y: auto;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.14);
    height: 0;
    transition: height 0.2s ease-in-out;
    &.open {
      height: 160px;
    }
    li {
      button {
        width: 100%;
        padding: 10px 12px;
        background-color: ${({ theme }) => theme.white};
        border-top: solid 1px ${({ theme }) => theme.basicGray};
        text-align: left;
        &:hover {
          background-color: ${({ theme }) => theme.point2Bg};
        }
      }
    }
  }
`;
