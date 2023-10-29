import { Link } from 'react-router-dom';
import { css, styled } from 'styled-components';

export const Article = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: stretch;
  background-color: ${({ theme }) => theme.white};
  & + & {
    border-top: dashed 2px ${({ theme }) => theme.basicGray};
  }
  .wrapper {
    width: calc(100% - 36px);
    padding: 16px 12px;
    flex-grow: 1;
    flex-shrink: 1;
  }
  ${(props) =>
    props.className === 'keep-going' &&
    css`
      background-color: ${({ theme }) => theme.point2Bg};
    `}
  ${(props) =>
    props.className === 'read' &&
    css`
      background-color: ${({ theme }) => theme.basicBg};
    `}
`;

export const LinkInfoStyle = css`
  .title {
    line-height: 125%;
    text-align: left;
    color: ${({ theme }) => theme.black};
  }
  .writeed-info {
    display: flex;
    min-width: 0;
    gap: 20px;
    justify-content: space-between;
    padding: 8px 0;
    border-bottom: solid 1px ${({ theme }) => theme.basicGray};
    & > li {
      font-size: 0.87rem;
      color: ${({ theme }) => theme.textInfo};
      &.writer {
        text-align: left;
        flex: 1 1 auto;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      &.writed-date {
        flex: 0 0 69px;
        text-align: right;
      }
    }
  }
`;

export const LinkInfo = styled(Link)`
  ${LinkInfoStyle}
`;

export const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px 8px;
  padding-top: 8px;
  li {
    font-size: 13px;
    color: ${({ theme }) => theme.point};
  }
`;

export const StatusInfo = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  align-self: stretch;
  display: flex;
  align-items: center;
  padding: 8px 10px;
  font-size: 20px;
  background-color: ${({ theme }) => theme.point};
  color: ${({ theme }) => theme.white};
  font-family: ${({ theme }) => theme.pointFont};
  white-space: pre-wrap;
  &.keep-going {
    background-color: ${({ theme }) => theme.linkKeepGoingBg};
    color: ${({ theme }) => theme.point};
  }
  &.read {
    background-color: ${({ theme }) => theme.linkReadBg};
    color: ${({ theme }) => theme.textLinkRead};
  }
`;
