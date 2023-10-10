import { styled } from 'styled-components';

export const ListHeader = styled.ul`
  display: flex;
  justify-content: space-between;
  border-bottom: solid 1px ${({ theme }) => theme.basicGray};
  .link-title {
    padding: 8px 12px;
  }
  .link-status {
    padding: 8px 5px;
  }
`;
export const List = styled.div`
  min-height: 240px;
  .alert {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 240px;
    color: ${({ theme }) => theme.textLight};
    line-height: 150%;
    a {
      color: ${({ theme }) => theme.point};
    }
  }
`;
