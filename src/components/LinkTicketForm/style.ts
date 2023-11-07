import { styled } from 'styled-components';
import * as S from '@/components/LinkTicket/style';

export const Article = styled(S.Article)`
  &:hover {
    box-shadow: unset;
  }
`;
export const LinkInfo = styled.div`
  ${S.LinkInfoStyle}
  .title-wrapper {
    display: flex;
    border-bottom: solid 1px ${({ theme }) => theme.basicGray};
    & > span {
      padding: 0.53rem 3.3% 0.53rem 0;
    }
    textarea {
      box-sizing: border-box;
      height: auto;
      padding: 0.53rem 0.8rem;
      background-color: ${({ theme }) => theme.basicBg};
      outline: solid 0px transparent;
      &.warning {
        background-color: #ffe9e9;
        border-radius: 4px;
        &:focus {
          outline: solid 2px ${({ theme }) => theme.pointFocus};
        }
      }
    }
  }
`;
export const Tags = S.Tags;
export const NoTags = styled.li`
  &#no-tags {
    color: ${({ theme }) => theme.textInfo};
  }
`;
export const StatusInfo = S.StatusInfo;
