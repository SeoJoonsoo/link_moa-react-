import { css, styled } from 'styled-components';
import currentDot from '@/assets/images/Welcome/ic-dot__current.svg';
import dot from '@/assets/images/Welcome/ic-dot.svg';
import arrow from '@/assets/images/ic-arrow__under.svg';

const switerNavigationButton = css`
  z-index: 2;
  top: auto;
  bottom: 0;
  color: ${({ theme }) => theme.textInfo};
  width: 36px;
  height: 36px;
  &::after {
    content: '';
    display: block;
    width: 36px;
    height: 36px;
    background-image: url(${arrow});
    background-position: center;
    background-repeat: no-repeat;
  }
`;

export const Swiper = styled.div`
  width: 100%;
  height: 100%;
  .swiper {
    width: 100%;
    height: 100%;
    position: relative;
    .swiper-button-prev {
      ${switerNavigationButton}
      left: calc(50% - 92px);
      &::after {
        transform: rotate(90deg);
      }
    }
    .swiper-button-next {
      ${switerNavigationButton}
      right: calc(50% - 92px);
      &::after {
        transform: rotate(-90deg);
      }
    }
    .swiper-pagination {
      z-index: 1;
      bottom: 0;
      height: 36px;
      display: flex;
      justify-content: center;
      align-items: center;
      & > span {
        width: 24px;
        height: 24px;
        margin: 0;
        background-color: unset;
        opacity: 1;
        background-image: url(${dot});
        &.swiper-pagination-bullet-active {
          content: '';
          display: block;
          background-image: url(${currentDot});
        }
      }
    }
  }
`;

const Slice = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  width: 100%;
  height: 100%;
  padding-top: 36px;
  padding-bottom: 24px;
  & > span {
    color: ${({ theme }) => theme.textInfo};
    text-align: center;
    font-size: 16px;
    line-height: 180%;
    .point {
      color: ${({ theme }) => theme.point};
      font-family: ${({ theme }) => theme.fontB};
    }
  }
`;

export const Slide1 = styled.div`
  ${Slice}
  & > img {
    width: 62px;
  }
`;
export const Slide2 = styled.div`
  ${Slice}
  & > img {
    width: 290px;
  }
`;
export const Slide3 = styled.div`
  ${Slice}
  & > img {
    width: 274px;
  }
`;
export const Slide4 = styled.div`
  ${Slice}
  & > img {
    width: 77px;
  }
`;
