import { styled } from 'styled-components';
import * as S from '@/components/LinkTicket/style';

export const Article = S.Article;
export const LinkInfo = styled.div`
  ${S.LinkInfoStyle}
  .title-wrapper {
    display: flex;
    border-bottom: solid 1px ${({ theme }) => theme.basicGray};
    & > span {
      padding-right: 3.3%;
    }
    textarea {
      height: auto;
      &.warning {
        outline-color: ${({ theme }) => theme.pointFocus};
        border: solid 2px ${({ theme }) => theme.basicGray};
        border-radius: 4px;
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
