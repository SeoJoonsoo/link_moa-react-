import { styled } from 'styled-components';

export const Tab = styled.div`
  &.tab {
    .tab__buttons {
      padding: 12px 12px 10px;
      display: flex;
      justify-content: center;
      gap: 8px;
      a {
        padding: 8px 12px;
        border-radius: 15px;
        font-size: 15px;
        border: solid 1px ${({ theme }) => theme.basicGray};
        &.active {
          background-color: ${({ theme }) => theme.point2Line};
          border: solid 1px ${({ theme }) => theme.point2Line};
        }
      }
    }
  }
`;
