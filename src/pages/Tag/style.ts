import { styled } from 'styled-components';

export const Tag = styled.div`
  margin-top: 12px;
  position: relative;
  border-top: solid 1px ${({ theme }) => theme.point};
`;

export const TagInfoWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  gap: 8px;
  min-height: 53px;
  background-color: ${({ theme }) => theme.basicBg};
  & > span {
    font-family: ${({ theme }) => theme.fontB};
  }
  & > .quit-button {
    padding: 0;
    background-color: unset;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  }
`;

export const Wrapper = styled.div`
  & + & {
    margin-top: 10px;
    border-top: solid 1px ${({ theme }) => theme.basicGray};
  }
  .alert {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 240px;
    color: ${({ theme }) => theme.textLight};
    line-height: 150%;
  }
`;

export const Title = styled.h3`
  padding: 16px 12px;
  font-family: ${({ theme }) => theme.fontB};
  font-size: 15px;
  text-align: left;
`;
